# Startup
Jonah's startup web app for CS 260

[Notes from class](https://github.com/JonahThurston/startup/blob/main/notes.md)

## Specification Deliverable

### Elevator pitch

Do you have a significant other? Do they often struggle to decide what they want to watch on movie night? As a computer science major, I don't have that problem. Luckily for you, with all the time I save not trying to get a significant other to decide something, I am going to make this brilliant startup. This application will keep a database of the top 100 movies of all time and keep track of which ones you have already watched. And to make it even easier, the chat function will connect you with people all over the globe to ask for recomendations and movie reviews. 

### Design

![MainScreen](https://github.com/JonahThurston/startup/assets/90001804/1dbe2810-b463-4ed1-a188-f56614c6d1fe)
Here is a mock up of the main screen of the app. Which will scroll through a grid of movies.

![ChatScreen](https://github.com/JonahThurston/startup/assets/90001804/54b1d506-7c33-4fe1-a7df-dbd6d365aed6)
Here is a mock up of the chat screen. Which will allow for multiple users to communicate.

### Key features

- Secure login over HTTPS
- Display an array of movies, including their posters and titles
- Ability to select, and change, top three choices
- Chats from users displayed in real time
- Ability for a user mark movies as watched or unwatched
- Movie watch status is persistently stored

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Three HTML pages. One for login, one for movie array, one for chat.
- **CSS** - Application styling for various sized screens, uses bold and bright color pallete.
- **JavaScript** - Provides login, movie display, applying watch status, display chat messages, backend endpoint calls.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving and submitting movies and watch statuses
- **DB/Login** - Store users, movies, and watch statuses in database. Register and login users. Credentials securely stored in database. Can't chat unless authenticated.
- **WebSocket** - As each user sends chat messages, their messages are broadcast to all other users.
- **React** - Application ported to use the React web framework.
