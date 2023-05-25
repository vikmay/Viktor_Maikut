$(document).ready(function() {
  // Завантаження колекції кольорів з куки
  var colors = JSON.parse(getCookie('colors'));
  if (colors) {
    for (var i = 0; i < colors.length; i++) {
      addColorToList(colors[i]);
    }
  } else {
    colors = [];
  }

  // Обробка події натискання кнопки Save
  $('#color-form').submit(function(event) {
    event.preventDefault();

    var name = $('#color-name').val();
    var type = $('#color-type').val();
    var code = $('#color-code').val();

    // Перевірка достовірності форми
    if (!validateColorForm(name, type, code)) {
      return;
    }

    // Перевірка унікальності назви кольору
    if (isColorNameExists(name, colors)) {
      showError('Назва кольору вже існує');
      return;
    }

    // Додавання нового кольору до колекції
    var color = { name: name, type: type, code: code };
    colors.push(color);
    addColorToList(color);

    // Збереження колекції кольорів у куку
    setCookie('colors', JSON.stringify(colors), 3);

    // Очищення полів форми
    $('#color-name').val('');
    $('#color-code').val('');
  });

  function validateColorForm(name, type, code) {
    // Перевірка обов'язкових полів
    if (name.trim() === '' || code.trim() === '') {
      showError("Будь ласка, заповніть обов'язкові поля");
      return false;
      }
          // Перевірка формату коду кольору залежно від типу
    if (type === 'RGB') {
      var rgbPattern = /^(\d{1,3}),(\d{1,3}),(\d{1,3})$/;
      if (!rgbPattern.test(code)) {
        showError('Некоректний формат коду RGB');
        return false;
      }
    } else if (type === 'RGBA') {
      var rgbaPattern = /^(\d{1,3}),(\d{1,3}),(\d{1,3}),([01](\.\d{1,2})?)$/;
      if (!rgbaPattern.test(code)) {
        showError('Некоректний формат коду RGBA');
        return false;
      }
    } else if (type === 'HEX') {
      var hexPattern = /^#[0-9A-Fa-f]{6}$/;
      if (!hexPattern.test(code)) {
        showError('Некоректний формат коду HEX');
        return false;
      }
    }

    return true;
  }

  function isColorNameExists(name, colors) {
    for (var i = 0; i < colors.length; i++) {
      if (colors[i].name.toLowerCase() === name.toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  function addColorToList(color) {
    var listItem = $('<li>').text(color.name + ': ' + color.code).css('color', color.code);
    $('#color-list').append(listItem);
  }

  function showError(message) {
    $('#color-form').prepend('<p class="error">' + message + '</p>');
    setTimeout(function() {
      $('.error').remove();
    }, 3000);
  }

  function setCookie(name, value, hours) {
    var expires = '';
    if (hours) {
      var date = new Date();
      date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }

  function getCookie(name) {
    var nameEQ = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }
});
