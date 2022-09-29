exports.toDateStr = (date) => {
  let dateStr = "";

  if (date) {
    const newDate = new Date(Date.parse(date));
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    dateStr = "On " + newDate.toLocaleDateString(undefined, options);
  }
  return dateStr;
};
