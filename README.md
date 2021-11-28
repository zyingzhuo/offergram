# offergram

## What is offergram?

> offergram is a place to buy and sell locally.

<img width="1438" alt="Screen Shot 2021-11-23 at 10 35 01 AM" src="https://i.imgur.com/Ua3L322.png">

## Live Links

1. [Live Link](https://offergram-aa.herokuapp.com/)

2. [MVP](https://github.com/zyingzhuo/offergram/wiki/MVP-List)

## Technologies

- React.js
- Redux
- JavaScript
- Python
- Flask
- SQLALchemy

## How to run offergram on your local?

- PostgreSQL
- Pipenv with Python v3.94
- Node.js

1. `git clone` this repo
2. `cd` into the local repo
3. Run `pipenv install -r --dev dev-requirements.txt && pipenv install -r requirements.txt`
4. Create your own `.env` file based on the provided `.env.example`.
5. Create a user and database in your PostgreSQL that matches your `.env` configuration
6. In the first terminal, run `pipenv shell` to activate the Pipenv environment.
7. Run `flask db upgrade` and then `flask seed all` to apply migrations and seed data to your database.'
8. Run `flask run` to start flask server.
9. Open another terminal window and `cd` into the local repo, then `cd` into `react-app`
10. Run `npm install`
11. In your terminal running Pipenv shell, run `flask run`.
12. In your terminal in the `react-app`, run `npm start`.
13. Your app should open in your default browser.
14. If you are planning on developing, please make a fork and create pull requests as necessary.
