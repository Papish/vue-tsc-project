import { test, assert } from "vitest";
import { isDateValid, formatDate } from "../index";

test("fn isDateValid", () => {
  const dates = [
    new Date(),
    "1000/01/01",
    "1000-01-01",
    "01/01/1000",
    "01-01-1000",
    "2038-01-19 03:14:07.999999",
  ];
  dates.forEach((date) => {
    assert.isTrue(isDateValid(date));
  });
});

test("fn formatDate", () => {
  const dates = [
    "1000/13/02",
    "1000-01-01",
    "01/01/1000",
    "01-01-1000",
    "1000-01-01 00:00:00.00",
  ];
  dates.forEach((date) => {
    assert.equal(formatDate(date), "13/12/1000");
  });
});
