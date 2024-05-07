# CookUnity FullStack Challenge

Welcome to the CookUnity FullStack challenge! This application is built with Next.js version 14, and for component management, MUI is used.

This application manages the API service with Prisma and SQLite, storing necessary information for its functionality and longevity.

## Quick Start

To get started with the application, follow these steps:

1. **Navigate to CookUnity Folder:** Open your terminal and run `cd cookUnity`.
2. **Install Packages:** Inside the `cookUnity` folder, run `npm i` to install all necessary packages.
3. **Run Migrations:** In the same terminal, execute `npm run migration`. This command will run Prisma migrations to create the local database provided by SQLite.
4. **Run Seeds:** After running migrations, execute `npm run seed` in the terminal. This will populate the database with necessary information to start using it.

**Note:** If you wish to view the tables and data of the created database, you need to use a database viewer and select the SQLite driver. Then, select the database file located at `src/services/prisma/dev.db`.

5. **Run the Application:** To launch the application, simply execute `npm run dev` for development mode (with auto-refresh) or `npm run start` to build and obtain the production version.

**Additional Note:** If you want to run Cypress tests, in another terminal use the command `npm run tests`. This will open an additional module on your screen where you can select the browser for running the tests. Follow the provided instructions to complete the test execution.

![CookUnityChallengeTestsPassed.png](cookUnity%2Fcypress%2Fscreenshots%2FCookUnityChallengeTestsPassed.png)

### **Tests Error:**
If you encounter errors during tests, ensure that your local server is running at `localhost:3000`. The tests require the local server to be operational.
