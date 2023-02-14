//Task8  Показувати дні тижня в циклі

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let i = 0;

while (true) {
  const answer = confirm(`Day of the week: ${weekDays[i]}\nDo you want to see the next day?`);
  if (!answer) break;
  i = (i + 1) % 7;
}