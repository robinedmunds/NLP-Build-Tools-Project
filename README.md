# NLP Build Tools Project 2019

THIS REPO IS **NOT MAINTAINED**. THERE ARE **MANY VULNERABILITIES** WITH OUTDATED DEPENDENCIES.

## About

This project is part of the Udacity Front-End course. Its purpose is to demonstrate the use of the webpack build tool. Two webpack configs have been created, one for development which utilises the webpack-dev-server; and a production config which minifies both css and js assets and saves them in the `dist/` directory.

## Instructions

1. clone this repo
1. navigate to local repo directory within your CLI
1. run `npm install` to install required dependencies
1. create file `.env` in project root and enter your aylien api credentials in the following format: -
    ```
    API_ID=__your api id__
    API_KEY=__your api key__
    ```
1. run `npm run build-prod` to build the source files into the `dist/` directory
1. run `npm start` to start the server in node
1. navigate to http://localhost:8080 in your favourite browser
1. enter a link to a page containing an article and click analyse to use the Aylien Classify API


## Testing

This project includes some jest tests. To run the tests, run `npm test` in your CLI

## Service Worker

This project installs a basic service worker on load which caches the page assets for offline use. However, form submissions will not work without network access.

#### Robin Edmunds 2019