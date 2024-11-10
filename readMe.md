# Daily Horoscope Generator

This JavaScript program generates a fun, random horoscope each time it’s run. It provides a unique daily outlook, financial forecast, and love advice, making it an entertaining and lighthearted way to start the day!

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [Example Output](#example-output)
- [License](#license)

## Features
- Provides a randomized daily outlook, financial forecast, and love advice.
- Uses a different selection of phrases each time, making each horoscope unique.
- Offers an easily extendable structure if you want to add more phrases.

## Installation
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone or download the repository files to your local machine.

## Usage
1. Open a terminal and navigate to the directory where the file is saved.
2. Run the program with Node.js by entering:
   
        ```bash
        node dailyHoroscopeGenerator.js

## Functions
### dayOutlook()
Returns a random phrase describing the general outlook of the day.

### financialOutlook()
Returns a random phrase describing your financial forecast.

### loveOutlook()
Returns a random phrase with advice or predictions about your love life.

### getMyHoroscope()
Generates and logs the full horoscope, combining the results from dayOutlook(), financialOutlook(), and loveOutlook().

## Example Output
Here’s an example of what you might see when running the program:

    Your day will be full of learning opportunities. When it comes to money, you should look for a great investment opportunity. In matters of the heart, keep in mind that 'you miss 100% of the shots you don't take' - Wayne Gretzky.

Each run will produce a unique horoscope based on the available phrases in each category.

## License
This project is licensed under the MIT License.