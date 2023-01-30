const isDevelopmentMode = process.env.MODE === "DEV";

const clientURL = isDevelopmentMode
	? "http://localhost:3000"
	: "https://socialshare-i5iz.onrender.com";

module.exports = { clientURL };
