# Bookify - Library Information System (Frontend)

## 📚 Overview

This project is a frontend application for the Library Information System, designed to improve library services by providing users with an interactive interface to browse library collections and locate partner libraries on an interactive map.

The application includes integration with OpenAI for enhanced features (e.g., intelligent book recommendations) and OpenStreetMap to visualize partner library locations.

## 🖥️ Backend API

https://github.com/mkokor/bookify-be

The backend of this project is developed using Spring Boot and serves as a RESTful API that provides data management and communication between the frontend and the database. The API includes endpoints for:

- 🔐 User authentication and profile handling
- 📚 Book management (viewing, adding, and deleting book titles)
- 🧾 Member and reservation management
- 📅 Reservation creation and deletion
- 🤖 AI-powered recommendation and book information retrieval

## 🚀 Features

### 👩‍💼 Features for Employees

- 📖 View all available book titles

- ➕ Add new book titles to the system

- 🧾 View member profiles and their reservations

- 🗑️ Delete existing reservations

### 👥 Features for Members

- 📚 Browse all available book titles and view book details

- 📝 Create or cancel reservations for desired titles at preferred libraries

- 🗺️ Access the Libraries menu:
    - Sidebar with a list of partner libraries and essential information
    - Interactive map (via OpenStreetMap) displaying pinned library locations
    - Obtain contact information for partner libraries

- 🤖 Interact with the AI-powered assistant to:
    - Receive book recommendations based on personal preferences
    - Access summaries of selected titles
    - Check global ratings of books of interest

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Spring Boot** - Backend framework
- **OpenStreetMap** - Interactive maps integration
- **OpenAI API** - Smart search and recommendation system
- **CSS** - Styling

## 🔧 Instalation
1. Download the project or clone the repository by running the following command:
```
gh repo clone https://github.com/nkokor/bookify-fe
```
1. Install the dependencies by running:
```
npm install
```
3. Start the application using:
```
npm start
```

## ⚙ Requirements

Node, React

## 📝 License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software with proper attribution. See the LICENSE file for more details.
