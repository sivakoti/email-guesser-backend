# Email Guesser Backend

## Overview

The Email Guesser API is a simple service built with node, express and javascript that attempts to guess email addresses based on a user's full name and a company domain. 
The service predict email formats from a predefined dataset based on domain name and guess the email addresses of other users using that format.

## Features

- **Email Guessing**: Given a full name and company domain, it guesses the likely email format based on company domain and the return the eamil in that particular format.

## Setup

1. **Clone the repository and install dependencies**

   ```sh
   git clone https://github.com/sivakoti/email-guesser-backend.git
   cd email-guesser-backend
   npm install
   ```

2. **Create env file and use port**
    create a .env file in root directory to add environment variables

   ```sh
   PORT=8080
   ```

3. **Run the server**

   ```sh
   npm start
   ```

## API End points

**POST /api/v1/email-guesser**
Description: return the guessed email address based on user provided full name and company domain

**Req body**
```sh
{
  "fullName": "Jahn Doe",
  "companyDomain": "babble.com"
}
```

**Response**

**success**
```sh
{
  "email": "jdoe@babble.com"
}
```

**failure**
```sh
{
  "message": "Unable to guess email based on given domain name"
}
```

## Project Structure
  
  index.js: contains server setup and api routes.
  services/emailGuesserService.js: Contains business logic for guessing email addresses.
  controllers/emailGuesserController.js: Handles HTTP requests and responses.

## Running tests
 Run the jest test cases using following command

 ```sh
npm test
```

