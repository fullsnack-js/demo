import {startOfMonth} from "date-fns"
type DateFnType = | Date | number;

export const selectedDate: DateFnType = new Date();

export const startDate: DateFnType = startOfMonth(selectedDate);
export const endDate: DateFnType = new Date()

console.log({ startDate })
console.log()
