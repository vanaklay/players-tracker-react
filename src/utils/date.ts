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
