# React Chat App

## Project Overview

The React Chat App is a dynamic messaging platform that enables users to send messages to friends and manage their friend list. Designed with real-time interaction and data persistence in mind, this app ensures that all conversations remain intact even after a page refresh.

## Functionality

### Dummy Logged-In User

The app operates with a pre-defined dummy user, providing a simulated environment for testing and development.
### Data Loading

Dummy data is loaded into the app using a JSON file, populating the initial list of contacts and conversations.
### Search Feature

Users can search through conversations by typing in the contact name, making it easy to locate specific chats quickly.
### Left Sidebar

Conversations List: Displays all ongoing conversations, each showing the contact name and a snippet of the last message.
Create Conversation Button: A button to initiate new conversations.
Pop-up Window: Clicking this button displays all contacts from the dummy data.
Start/Open Conversation: Clicking a contact either starts a new conversation or opens an existing one.
### Right-Side View

Conversation Display: Shows messages from the currently selected conversation.
Send Message: Users can send new messages within the conversation, with the UI updating in real-time.
## Tools and Technologies Used

### React.js

A powerful JavaScript library for building user interfaces, ensuring a responsive and dynamic user experience.
### React Router

Facilitates seamless navigation between different sections of the app, enhancing the overall user experience.
### React Hooks

Used exclusively for managing component state and side effects, providing a clean and functional approach to React development.
### Redux

Manages the application's state, with data persistence ensuring that conversations and messages are saved across sessions, even after a page refresh.
### CSS

Custom styles create a visually appealing and intuitive interface, enhancing user interaction.
## Installation and Run

### 1. Clone the Repository

Start by cloning the repository to your local machine:
git clone https://github.com/yourusername/react-chat-app.git

### 2. Navigate to the Project Directory

Use the terminal to navigate to the root directory of the project:
cd react-chat-app

### 3. Install Dependencies

Install the necessary packages and dependencies using npm:
npm install
### 4. Run the Project

To launch the project in development mode, use
npm start

### 5. View in Browser

Open your web browser and go to http://localhost:3000/ to interact with the chat application.

## Future Enhancements

User Authentication: Implement real user authentication to replace the dummy user.
Real-time Messaging: Integrate with a real-time messaging service for live communication.
Advanced Search: Enhance search functionality with filters and advanced options.
User Settings: Allow users to customize their profile and conversation settings.
