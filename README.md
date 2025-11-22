Country Explorer – JavaScript Project
Overview

Country Explorer is a Vanilla JavaScript web application that allows users to search for countries and view detailed information including:

Flag

Capital city

Population

Region

Currency

Languages

The project uses the Rest Countries API, providing live data and a dynamic, responsive interface.

Features

✅ Search any country by name

✅ Display flag, capital, population, region, currency, and languages

✅ Dynamic and responsive card layout

✅ Error handling for invalid country names

✅ Built with pure JavaScript, no frameworks

Technologies Used

HTML5 – Structure

CSS3 – Styling

JavaScript (ES6+) – DOM manipulation and API calls

Fetch API – To retrieve data from the Rest Countries API

Rest Countries API – Public API for country data

Git / GitHub – Version control

Project Structure
JS-Country-Explorer/
│
├── index.html        # Main HTML file
├── style.css         # CSS styles
├── app.js            # JavaScript functionality
└── README.md         # Project documentation

How It Works

Users type a country name in the search box.

JavaScript fetches data from Rest Countries API:

https://restcountries.com/v3.1/name/{country}


The API returns JSON data for the country.

The app dynamically generates a country card with all relevant details.

If the country is not found, an error message is displayed.

How to Run

Clone or download the repository.

Open the folder and double-click index.html.

Enter a country name in the search box to see details.

No installation or dependencies required.

Future Improvements

🌐 Add multiple country search results

📊 Include population or area charts

⭐ Favorite country bookmarks

⚛️ React.js version for advanced development

🌙 Dark / Light mode toggle

Author

Jibran Khan
Frontend Developer | JavaScript Enthusiast
Part of my journey to become a full-stack developer in 2025

License

This project is open-source and free for learning purposes.
