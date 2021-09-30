const {addDays, startOfMonth, startOfWeek, startOfDay, endOfMonth, endOfWeek} = require("date-fns")

function takeWeek(start = new Date()) {
  let date = startOfWeek(startOfDay(start));

  return function () {
    const week = [...Array(7)].map((_, idx) => addDays(date, idx))
    date = addDays(week[6], 1)
    return week;
  }
}

function takeMonth(start = new Date()) {
  let month = []
  let date = start;

  function lastDayOfRange(range) {
    return range[range.length - 1][6]
  }

  return function () {
    const weekGen = takeWeek(startOfMonth(date));
    const endDate = startOfDay(endOfWeek(endOfMonth(date)));
    month.push(weekGen())

    while (lastDayOfRange(month) < endDate) {
      month.push(weekGen());
    }

    const range = month;
    month = []
    date = addDays(lastDayOfRange(range), 1)
    return range;
  }
}
const tw = takeWeek(new Date())
const tm = takeMonth(new Date())
console.log({tw:tw()})
console.log({tm:tm()})
// console.log({ endDate })
