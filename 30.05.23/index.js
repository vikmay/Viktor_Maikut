$(document).ready(function () {
    // Load existing colors from cookie
    let colors = getColorsFromCookie();
    displayColors(colors);

    // Generate initial colors
    let initialColors = [
        {
            name: 'YELLOWGREEN',
            type: 'RGB',
            code: '154, 205, 50'
        },
        {
            name: 'DARKCYAN',
            type: 'RGBA',
            code: '0, 139, 139, 1'
        },
        {
            name: 'ORANGERED',
            type: 'HEX',
            code: '#FF4500'
        }
    ];

    // Add initial colors to collection
    colors.push(...initialColors);

    // Save colors to cookie
    saveColorsToCookie(colors);

    // Display initial colors
    displayColors(colors);

    // Clear form fields
    $('#color-name').val('');
    $('#color-code').val('');
    $('#name-error').text('');
    $('#code-error').text('');

    // Form submission
    $('#color-form').submit(function (event) {
        event.preventDefault();
        let name = $('#color-name').val();
        let type = $('#color-type').val();
        let code = $('#color-code').val();

        let errors = validateColor(name, type, code, colors);
        if (errors.nameErrors.length > 0 || errors.codeErrors.length > 0) {
            displayErrors(errors);
        } else {
            // Add color to collection
            let color = {
                name: name,
                type: type,
                code: code
            };
            colors.push(color);

            // Save colors to cookie
            saveColorsToCookie(colors);

            // Clear form fields
            $('#color-name').val('');
            $('#color-code').val('');
            $('#name-error').text('');
            $('#code-error').text('');

            // Display updated colors
            displayColors(colors);
        }
    });

    function validateColor(name, type, code, colors) {
        let nameErrors = [];
        let codeErrors = [];

        // Validate color name
        if (!name.match(/^[a-zA-Z]+$/)) {
            nameErrors.push('Color name can only contain letters');
        } else if (colors.some(function (color) { return color.name.toLowerCase() === name.toLowerCase(); })) {
            nameErrors.push('Color name must be unique');
        }

        // Validate color code based on type
        if (type === 'RGB') {
            if (!code.match(/^\d{1,3},\s*\d{1,3},\s*\d{1,3}$/)) {
                codeErrors.push('RGB code must match the pattern [0-255], [0-255], [0-255]');
            }
        } else if (type === 'RGBA') {
            if (!code.match(/^\d{1,3},\s*\d{1,3},\s*\d{1,3},\s*0(\.\d{1,2})?|1(\.0{1,2})?$/)) {
                codeErrors.push('RGBA code must match the pattern [0-255], [0-255], [0-255], [0-1].');
            }
        } else if (type === 'HEX') {
            if (!code.match(/^#[0-9A-Fa-f]{6}$/)) {
                codeErrors.push('HEX code must be in the format #RRGGBB.');
            }
        }

        return {
            nameErrors: nameErrors,
            codeErrors: codeErrors
        };
    }

    function displayErrors(errors) {
        // Clear previous error messages
        $('#name-error').empty();
        $('#code-error').empty();

        errors.nameErrors.forEach(function (error) {
            $('#name-error').text(error);
        });

        errors.codeErrors.forEach(function (error) {
            $('#code-error').text(error);
        });
    }

    function displayColors(colors) {
        let colorContainer = $('#color-container');
        colorContainer.empty();

        colors.forEach(function (color) {
            let colorBox = $('<div>').addClass('color-box');
            let colorDetails = $('<div>').addClass('color-details');

            // Set color box background
            if (color.type === 'RGB') {
                colorBox.css('background-color', `rgb(${color.code})`);
            } else if (color.type === 'RGBA') {
                colorBox.css('background-color', `rgba(${color.code})`);
            } else if (color.type === 'HEX') {
                colorBox.css('background-color', color.code);
            }

            // Add color details
            let colorName = $('<span>').text(color.name).addClass('color-name');
            let colorCode = $('<span>').text(color.code).addClass('color-code');
            let colorType = $('<span>').text(color.type).addClass('color-type');

            colorDetails.append(colorName, colorCode, colorType);
            colorBox.append(colorDetails);
            colorContainer.append(colorBox);
        });
    }

    function getColorsFromCookie() {
        let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)colors\s*\=\s*([^;]*).*$)|^.*$/, '$1');
        return cookieValue ? JSON.parse(cookieValue) : [];
    }

    function saveColorsToCookie(colors) {
        document.cookie = `colors=${JSON.stringify(colors)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    }
});