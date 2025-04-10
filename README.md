# Business Connect - Business Card Management System

## Overview

Business Connect is a React web application that allows businesses to create and manage digital business cards. Regular users can browse, search, and save their favorite business cards, while business users have the ability to create, edit, and manage their own cards.

## Features

### For All Users

- Browse business cards on the homepage
- Search for specific cards using the search bar
- View detailed information about each business, including location on Google Maps
- Toggle between light and dark mode

### For Registered Users

- Save favorite business cards
- Manage your personal account details
- Access your favorite cards in one place

### For Business Users

- Create and publish business cards
- Edit and delete your business cards
- Manage all your cards in a dedicated "My Cards" section

## Technology Stack

- **Frontend**: React with TypeScript
- **State Management**: React Context API
- **Routing**: React Router v7
- **Form Management**: Formik with Yup validation
- **HTTP Requests**: Axios
- **Styling**: Bootstrap with custom CSS
- **Maps Integration**: Google Maps API
- **Authentication**: JWT-based authentication

## Installation and Setup

1. Clone the repository:

```
git clone https://github.com/Ronshusterman715/React-project.git
```

2. Navigate to the project directory:

```
cd business-connect
```

3. Install dependencies:

```
npm install
```

4. Create a `.env` file in the root directory with the following variables:

```
VITE_BASE_URL_API=https://monkfish-app-z9uza.ondigitalocean.app/bcard2
VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

5. Start the development server:

```
npm run dev
```

## Project Structure

The project follows a modular structure:

- `/src/components`: UI components
- `/src/interfaces`: TypeScript interfaces
- `/src/services`: API service functions
- `/src/utils`: Utility functions
- `/src/context`: React context providers
- `/src/hooks`: Custom React hooks

## API Integration

This project connects to a RESTful API for all data operations:

- User authentication (register, login)
- Business card CRUD operations
- User profile management
- Favorites management

## User Guide

### Registration and Login

1. Click on the "Register" link in the navigation bar
2. Fill out the registration form, including whether you want a business account
3. After registration, login with your email and password

### Creating a Business Card (Business Users Only)

1. Navigate to "Create Card" in the navigation menu
2. Fill out all required fields including business details, contact information, and address
3. Submit the form to create your business card

### Managing Favorites

1. Click the heart icon on any business card to add it to favorites
2. Access all your favorite cards through the "Fav Cards" link
3. Click the heart icon again to remove from favorites

### Managing Your Business Cards (Business Users Only)

1. Access "My Cards" to view all your created cards
2. Use the edit and delete icons to manage your cards
