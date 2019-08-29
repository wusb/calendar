import Calendar from '../src/calendar.js';

new Calendar({
  el: document.querySelector('#demo'),
  currentDate: '2019/08/28',
  onDayClick
});

function onDayClick(date) {
  console.log(date);
}