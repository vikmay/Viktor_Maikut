function generateCalendar() {
  var monthInput = document.getElementById('month');
  var yearInput = document.getElementById('year');
  var calendarContainer = document.getElementById('calendar');

  var month = parseInt(monthInput.value);
  var year = parseInt(yearInput.value);

  if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
    calendarContainer.innerHTML = '<p>Некоректно введений місяць або рік.</p>';
    return;
  }

  var daysInMonth = new Date(year, month, 0).getDate();
  var firstDayOfMonth = new Date(year, month - 1, 1).getDay();

  var monthNames = [
    'Січень', 'Лютий', 'Березень', 'Квітень',
    'Травень', 'Червень', 'Липень', 'Серпень',
    'Вересень', 'Жовтень', 'Листопад', 'Грудень'
  ];

  var calendarHTML = '<h3>' + monthNames[month - 1] + ', ' + year + '</h3>' +
    '<table>' +
    '<tr>' +
    '<th>Пн</th>' +
    '<th>Вт</th>' +
    '<th>Ср</th>' +
    '<th>Чт</th>' +
    '<th>Пт</th>' +
    '<th class="weekend">Сб</th>' +
    '<th class="weekend">Нд</th>' +
    '</tr>';

  var day = 1;
  for (var i = 0; i < 6; i++) {
    calendarHTML += '<tr>';

    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        calendarHTML += '<td></td>';
      } else if (day > daysInMonth) {
        calendarHTML += '<td></td>';
      } else {
        calendarHTML += '<td>' + day + '</td>';
        day++;
      }
    }

    calendarHTML += '</tr>';

    if (day > daysInMonth) {
      break;
    }
  }

  calendarHTML += '</table>';
  calendarContainer.innerHTML = calendarHTML;
}