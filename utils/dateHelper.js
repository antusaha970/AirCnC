const date = new Date(); // Get the current date
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 0x (adding 1 to month index and padding with leading zero)
const day = date.getDate().toString().padStart(2, "0"); // 17 (padding with leading zero)
const arrivalFormattedDate = `${year}-${month}-${day}`; // "2022-04-17"

const threeDaysLater = new Date(arrivalFormattedDate); // Convert the formattedDate string back to a Date object
threeDaysLater.setDate(threeDaysLater.getDate() + 3); // Add 3 days to the date

const yearAfter = threeDaysLater.getFullYear();
const monthAfter = (threeDaysLater.getMonth() + 1).toString().padStart(2, "0");
const dayAfter = threeDaysLater.getDate().toString().padStart(2, "0");
const departureFormattedDate = `${yearAfter}-${monthAfter}-${dayAfter}`; // "2022-04-20" (3 days after the original date)

export { departureFormattedDate, arrivalFormattedDate };
