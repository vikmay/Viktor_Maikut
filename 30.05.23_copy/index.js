$(document).ready(function() {
  // Load existing colors from cookie
  let colors = getColorsFromCookie();
  displayColors(colors);

  // Form submission
  $('#color-form').submit(function(event) {
    event.preventDefault();
    let name = $('#color-name').val();
    let type = $('#color-type').val();
    let code = $('#color-code').val();

    let errors = validateColor(name, type, code, colors);
    if (errors.length > 0) {
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
    let errors = [];

    // Check if name is unique
    let nameExists = colors.some(function(color) {
      return color.name.toLowerCase() === name.toLowerCase();
    });

    if (name === '') {
      errors.push('Color name is required.');
    } else if (nameExists) {
      errors.push('Color name must be unique.');
    } else if (!/^[a-zA-Z]+$/.test(name)) {
      errors.push('Color name can only contain letters.');
    }

    // Check color code based on type
    switch (type) {
      case 'RGB':
        let rgbRegex = /^\d{1,3},\d{1,3},\d{1,3}$/;
        if (!rgbRegex.test(code)) {
          errors.push('RGB code must match the pattern [0-255],[0-255],[0-255].');
        }
        break;
      case 'RGBA':
        let rgbaRegex = /^\d{1,3},\d{1,3},\d{1,3},0\.\d+$/;
        if (!rgbaRegex.test(code)) {
          errors.push('RGBA code must match the pattern [0-255],[0-255],[0-255],0-1.');
        }
        break;
      case 'HEX':
        let hexRegex = /^#[A-Fa-f0-9]{6}$/;
        if (!hexRegex.test(code)) {
          errors.push('HEX code must match the pattern #[A-Fa-f0-9]{6}.');
        }
        break;
      default:
        errors.push('Invalid color type.');
        break;
    }

    return errors;
  }

  function displayErrors(errors) {
    $('#name-error').text('');
    $('#code-error').text('');

    errors.forEach(function(error) {
      if (error.includes('name')) {
        $('#name-error').text(error);
      }
      if (error.includes('code')) {
        $('#code-error').text(error);
      }
    });
  }

  function displayColors(colors) {
    let colorContainer = $('#color-container');
    colorContainer.empty();
    colors.forEach(function(color) {
      let colorBox = $('<div class="color-box"></div>').css('background-color', color.code);
      let colorDetails = $('<div class="color-details"></div>').text(color.name + ' - ' + color.type + ' - ' + color.code);
      colorBox.append(colorDetails);
      colorContainer.append(colorBox);
    });
  }

  function getColorsFromCookie() {
    let colors = [];
    let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)colors\s*=\s*([^;]*).*$)|^.*$/, "$1");
    if (cookieValue) {
      colors = JSON.parse(cookieValue);
    }
    return colors;
  }

  function saveColorsToCookie(colors) {
    let expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (3 * 60 * 60 * 1000)); // 3 hours
    document.cookie = 'colors=' + JSON.stringify(colors) + '; expires=' + expirationDate.toUTCString() + '; path=/';
  }
});
