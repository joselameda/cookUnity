# CookUnity FullStack Challenge

Welcome to the CookUnity FullStack challenge! This application is built with Next.js version 14, and for component management, MUI is used.

This application manages the API service with Prisma and SQLite, storing necessary information for its functionality and longevity.

## Quick Start

To get started with the application, follow these steps:

1. **Install Packages:** Open your terminal and run `npm i` inside the `cookUnity` folder.
2. **Run Migrations:** In the same terminal, execute `npm run migration`. This command will run Prisma migrations to create the local database provided by SQLite.
3. **Run Seeds:** In the terminal, run `npm run seed`. This will populate the database with necessary information to start using it.

**Note:** If you wish to view the tables and data of the created database, you need to use a database viewer and select the SQLite driver. Then, select the database file located at `src/services/prisma/dev.db`.

4. **Run the Application:** To launch the application, simply execute `npm run dev` for development mode (with auto-refresh) or `npm run start` to build and obtain the production version.

**Additional Note:** If you want to run Cypress tests, in a other terminal use the command `npm run tests`. This will open an additional module on your screen where you can select the browser for running the tests. Follow the provided instructions to complete the test execution.


![CookUnityChallengeTestsPassed.png](cypress%2Fscreenshots%2FCookUnityChallengeTestsPassed.png)


### **Tests Error:**
Check you have running the server local, localhost:3000, the test needs the local server is running. 