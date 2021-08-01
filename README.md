# Sauda-App

-   A React Native App for Buying/Selling/Renting Items within IITJ Campus.
-   Developed for Software Engineering (CSL2060) Course Project.

## Steps to follow to contribute

1. Clone the Repository
2. Run the following command on terminal.

```
	yarn install
```

This will install the required dependencies on your local machine.

3. Run the development server.

```
	yarn start
```

4. Now open the expo link in your browser.

5. Scan the QR Code from Expo App from your smartphone or open in Android Emulator from the instructions mentioned in the terminal.

### Testing Process

-   All the tests are written in **tests** folder.
-   The entire CI/CD Workflow .yml file can be found in ".github/workflows/tests.yml".
-   It creates a CI/CD Github Pipeline for the project.
-   _AppTest.js_ runs test which compare whether the **App.js** Component snapshot matches with the component or not using **JEST**.
-   _screenTest.js_ runs test which compare whether the **Screen.js** and **SafeScreen.js** Component snapshot matches with the component or not using **JEST**.
-   Reliable app for students of IITJ within campus
