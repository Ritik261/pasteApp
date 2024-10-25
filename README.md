# Notes Taking App

Test it Here : https://pasteapptest.netlify.app/

## Overview

The Notes Taking App is a web application built using React and Redux that allows users to create, view, update, and delete notes (or "pastes"). The application utilizes local storage to persist data, ensuring that users can access their notes even after refreshing the page. The app is styled using Tailwind CSS for a modern and responsive design.

## Features

- Create new notes with titles and content.
- Update existing notes.
- View notes in a dedicated view.
- Delete notes.
- Search functionality to filter notes by title.
- Responsive design for various screen sizes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for managing application state.
- **React Router**: For routing and navigation within the application.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Vite**: A build tool that provides a fast development environment.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd notes-taking-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Code Structure

- **src/**: Contains all the source code for the application.
  - **components/**: Contains React components for different parts of the application.
    - `Home.jsx`: The main page where users can create and edit notes.
    - `ViewPaste.jsx`: Displays a single note in a read-only format.
    - `Paste.jsx`: Lists all notes with options to edit, view, delete, and copy.
    - `Navbar.jsx`: The navigation bar for the application.
  - **Redux/**: Contains Redux-related files.
    - `pasteSlice.js`: Defines the Redux slice for managing notes.
  - `App.jsx`: The main application component that sets up routing.
  - `main.jsx`: The entry point of the application.
  - `index.css`: Global styles and Tailwind CSS imports.
- **public/**: Contains static files like `index.html` and icons.
- **package.json**: Contains project metadata and dependencies.
- **vite.config.js**: Configuration file for Vite.

## Usage

- To create a new note, enter a title and content in the input fields on the home page and click "Create My Paste".
- To update an existing note, click on the "Edit" button next to the note you want to modify.
- To view a note, click on the "View" button.
- To delete a note, click on the "Delete" button next to the note.
- Use the search bar to filter notes by title.

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

