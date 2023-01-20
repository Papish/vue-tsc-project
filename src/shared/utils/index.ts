import { isValid, format } from "date-fns";
export { iString } from "./string";

// Validates date
export const isDateValid = (date: any): boolean => {
  return isValid(new Date(date));
};

// Formats date
export const formatDate = (
  date: any,
  formatType: string = "dd/MM/uuuu"
): string => {
  return format(new Date(date), formatType);
};
