# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Running the Movie Search App Tutorial

This tutorial will guide you through the process of running the Movie Search App, a Vite-based web application for searching and discovering information about movies.

\*this for who want to learn how to use UseEffect and fecth data with react

## Prerequisites

Before you start, ensure that you have the following prerequisites installed:

1. **Node.js**: Make sure you have Node.js installed. If you haven't installed it yet, you can download it from [nodejs.org](https://nodejs.org/).

2. **Git**: Ensure you have Git installed to clone the project repository.

3. your api key for tmdb

## Step 1: Clone the Repository

To begin, you need to clone the Movie Search App repository from GitHub. Open your terminal and execute the following command:

```bash
git clone git@github.com:alimmiftahul/movie-search.git
This command will create a local copy of the project on your machine.
```

## step 2 : Make api key for tmdb

To fetch movie data, the Movie Search App requires an API key from The Movie Database (TMDb). Follow these steps to obtain your API key:

1. Visit the [TMDb website](https://www.themoviedb.org/).

2. Create an account or log in if you already have one.

3. After logging in, go to your account settings and select the "API" section.

4. Request an API key for developers. Follow the on-screen instructions to obtain your API key.

## Step 4: Configure Your Environment

To keep your API key secure and avoid exposing it directly in your code, you should configure your environment variables. Here's how to do it:

1. Create a new file in the root of your project called `.env`.

2. Open the `.env` file and add the following line, replacing `'YOUR_TMDB_API_KEY'` with the actual API key you obtained:

```bash
VITE_BASE_URL=YOUR_TMDB_API_KEY
```

3. Save the `.env` file.

## Step 4: Navigate to the Project Directory

Change your current directory to the project folder using the cd command:

```bash
cd movie-search
```

## Step 5: Install Dependencies

The Movie Search App relies on several dependencies. To install them, run the following command in your terminal:

#### yarn

```bash
yarn
```

#### npm

```bash
npm install
```

This command will download and install all the required packages.

## Step 6: Run the Development Server

To start the application in development mode, execute the following command:

#### yarn

```bash
yarn run dev
```

#### npm

```bash
npm run dev
```

This will launch a development server, and you'll see output indicating that the app is running. You can access the app in your web browser at http://localhost:5173.

## Step 7: Explore the Movie Search App

The Movie Search App is now running locally. Here's what you can do:

Search for Movies: Use the search bar to find movies by title.
