# First Unique Character API

## Description
This project provides an API endpoint to find the first unique character in a given string. The API is implemented using Node.js and Express.

## How It Works
1. The API accepts a string as input.
2. It identifies the first non-repeating character and its index.
3. Returns the result along with a timestamp in ISO8601 format.

## Endpoint
### POST /first-unique-character
**Request:**
```json
{
  "text_to_process": "example"
}
```
**Response:**
```json
{
  "first_unique_char": "e",
  "first_unique_char_index": 0,
  "timestamp": "2025-01-16T12:34:56Z"
}
```

## Setup Instructions
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the server with `node index.js`.
4. The server will run on `http://localhost:5000`.

## Project Structure
- `index.js`: Entry point of the application.
- `routes/route.js`: Contains the logic for finding the first unique character and handling API requests.

## Validation
- Ensures the input is a non-empty string.
- Returns appropriate error messages for invalid inputs.

## Logs
Each API call is logged in the console with a timestamp and input data.

