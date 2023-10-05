import { Player } from "../features/types";

export const getTodayDate = (): string => new Date().toISOString().slice(0, 10);

export const formatDate = (inputDate: string) => {
  const dateParts = inputDate.split("-");
  if (dateParts.length === 3) {
    const [year, month, day] = dateParts;
    return `${day} ${month} ${year}`;
  } else {
    return "Format de date incorrect";
  }
};

export const getDate = (data: Player[]) =>
  Array.from(
    new Set(data.flatMap((player) => Object.keys(player.daysAttendance)))
  );

export const generateDate = (inputDate: string) => {
  const dateParts = inputDate.split("-");
  return dateParts.slice(1).reverse().join(" - ");
};
