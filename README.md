# CFB Rankings Generator Backend

A very simple REST API that forwards reqquests to the College Football Data API and slightly reformats the responses. It exists primarily so that authorization can happen on the backend.

## Built With

[![Express.js][Express]][Express-url]

## Getting Started

### Prerequisites

- node v18.18.0
- npm v9.8.1

### Installation

- Clone the repo `git clone https://github.com/blicht19/cfb-rankings-backend.git`
- Install dependencies `npm i`
- Create a file called `.env` and and the following line: `API_KEY=YOUR_API_KEY_HERE` Get an API key for the College Football Data API [here](https://collegefootballdata.com/key).

### Usage

- Start the application with `npm start`

## Acknowledgements

- Data comes from the College Football Data API. Check out https://collegefootballdata.com/

[Express]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
