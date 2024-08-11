React Chat App
The React Chat App is a dynamic messaging platform that allows users to send messages to friends and manage their friend list. This project is designed with a focus on real-time interaction, user-friendliness, and data persistence, ensuring that all conversations remain intact even after a page refresh.

Functionality
Dummy Logged-In User
The app operates with a pre-defined dummy user, providing a simulated environment for testing and development.

Data Loading
Dummy data is loaded into the app using a JSON file, populating the initial list of contacts and conversations.

Search Feature
Users can search through conversations by typing in the contact name, making it easy to locate specific chats quickly.

Left Sidebar
Conversations List: Displays all ongoing conversations, each showing the contact name and a snippet of the last message.
Create Conversation Button: A button to initiate new conversations.
Pop-up Window: On clicking, a pop-up displays all contacts from the dummy data.
Start/Open Conversation: Clicking a contact either starts a new conversation or opens an existing one.
Right-Side View
Conversation Display: Shows messages from the currently selected conversation.
Send Message: Users can send new messages within the conversation, with the UI updating in real-time.
Tools and Technologies Used
React.js
A powerful JavaScript library for building user interfaces, ensuring a responsive and dynamic user experience.

React Router
Facilitates seamless navigation between different sections of the app, enhancing the overall user experience.

React Hooks
Used exclusively for managing component state and side effects, providing a clean and functional approach to React development.

Redux
Manages the application's state, with data persistence ensuring that conversations and messages are saved across sessions, even after a page refresh.

CSS
Custom styles create a visually appealing and intuitive interface, enhancing user interaction.

Installation and Setup
Clone the Repository
Download the project files to your local machine using Git or directly from the source.

Navigate to the Project Directory
Use the terminal to move to the root directory of the project.

Install Dependencies
Run npm install in the terminal to automatically install all necessary packages.

Launch the Application
Start the development server with the command npm start.

View in Browser
Open your browser and navigate to http://localhost:3000/ to interact with the application.

This React Chat App provides a robust and scalable solution for real-time messaging, with features designed to enhance user interaction and maintain data integrity.