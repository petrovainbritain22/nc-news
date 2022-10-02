exports.toDateStr = (dateISO, isWithAgo) => {
  const date = new Date(dateISO);
  const dateNow = new Date(Date.now());
  let dateStr;
  if (isWithAgo) {
    const years = dateNow.getFullYear() - date.getFullYear();
    if (years > 0)
      return years === 1 ? years + " year ago" : years + " years ago";
    const months = dateNow.getMonth() - date.getMonth();
    if (months > 0)
      return months === 1 ? months + " month ago" : months + " months ago";
    const days = dateNow.getDate() - date.getDate();
    if (days > 0) return days === 1 ? days + " day ago" : days + " days ago";
    const hours = dateNow.getHours() - date.getHours();
    if (hours > 0)
      return hours === 1 ? hours + " hour ago" : hours + " hours ago";
    const minutes = dateNow.getMinutes - date.getMinutes;
    if (minutes > 0)
      return minutes === 1 ? minutes + " minute ago" : minutes + " minutes ago";
    return "just posted";
  }
  if (
    date.getFullYear() === dateNow.getFullYear() &&
    date.getMonth() === dateNow.getMonth()
  ) {
    const dateDifference = dateNow.getDate() - date.getDate();
    dateStr =
      dateDifference === 0
        ? "Today"
        : dateDifference === 1
        ? "1 day ago"
        : dateDifference + " days ago";
  } else {
    const options = {
      year: "numeric",
      month: "long",
    };
    dateStr = new Date(date).toLocaleDateString(undefined, options);
  }
  return dateStr;
};
