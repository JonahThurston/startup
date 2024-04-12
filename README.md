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

## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - three HTML page that represent the ability to login, see your movies, and chat.
- **Links** - The login page automatically links to the movies page. All pages have a navigation menu at the top that links to all other pages.
- **Text** - Text descriptions of most buttons and input fields as well as movie titles.
- **Images** - Movies are represented by buttons with their movie poster inside of them. Just placeholders for now.
- **DB/Login** - Input box and submit button for login. The number of movies watched represent data pulled from the database.
- **WebSocket** - The live chat and notifications represent realtime interaction.
- **API** - The list of movies and hopefully the movie posters will be pulled from 3rd party service calls.

Woah! Only two days left to finish up your CSS Startup deliverable. I've seen some awesome looking apps already. The Startup JavaScript is due on Feb 28th. Hopefully you are already starting to make progress on that. As we wrap up with modifying the DOM using JavaScript on Friday you should have a pretty clear idea of how to integrate JavaScript into your startup.
One thing to note when you submit your deliverables is to be really clear in your README.md file about what you are submitting for credit. Create a section with the name of the deliverable and then copy the rubric with a clear indication of what you did and where the TA can find it. Here is a simple example that would work for the CSS deliverable.

## CSS Deliverable 

- done - Prerequisite: Simon CSS deployed to my production environment
- done - Prerequisite: A link to my GitHub startup repository prominently displayed on your application's home page
- done - Prerequisite: Notes in your startup Git repository README.md file
- done - 30% Header, footer, and main content body. Used flex to layout sections. Added bootstrap buttons and nav elements
- done - 20% Navigation elements. Made links look prettier using bootstrap navbar. 
- done - 10% Responsive to window resizing. Used flex and bootstap grid to respond to window resize. header and footer disappear at small sizes.
- done - 20% Application elements. Used bootstrap for buttons and movie cards.
- done - 10% Application text content. Text is displayed using the Franklin Gothic Medium font
- done - 10% Application images. Put images into bootstrap cards.

## JavaScript deliverable

For this deliverable I implemented by JavaScript so that the application works for multiple users. I also added placeholders for future technology.

- **login** - When you press the login button it takes you to the watch list page and stores your username and password in local storage.
- **database** - Displayed the number of movies watched for each individual username. Also colors and changes text in movie buttons to reflect each movie's watch status. Currently this is stored and retrieved from local storage, but it will be replaced with the database data later.
- **WebSocket** - I used the setInterval function to periodically send a random notification. This will be replaced with WebSocket messages later.
- **application logic** - The number of movies watched and the color and text of the buttons change based up the user's selections.

## Service deliverable

For this deliverable I added backend endpoints that stores and returns scores and tables

- **Node.js/Express HTTP service** - see index.js
- **Static middleware for frontend** - see index.js
- **Calls to third party endpoints** - every fifteen seconds, a notification with a random quote is sent out
- **Backend service endpoints** - Placeholders for database use that stores the scores and tables on the server.
- **Frontend calls service endpoints** - I did this using the fetch function.

## DB/Login deliverable

For this deliverable I associate emails with the logged in user. I stored the data in the database.

- **MongoDB Atlas database created** - done!
- **Stores data in MongoDB** - done!
- **User registration** - Creates a new account in the database.
- **existing user** - Stores the watch table under the same user if the user already exists.
- **Use MongoDB to store credentials** - MongoDB stores user and their credentials
- **Restricts functionality** - You have to log in to access the database. This was done using a secure API router

## WebSocket deliverable

For this deliverable I used webSocket to display all users movie watches on the frontend in realtime.

- **Backend listens for WebSocket connection** - done!
- **Frontend makes WebSocket connection** - done!
- **Data sent over WebSocket connection** - done!
- **WebSocket data displayed** - All user watches display in realtime.

## React deliverable

For this deliverable I converted the login function of the application over to use React. I know it was supposed to be a full conversion, but I got mega super stuck trying to get the watchlist to work. And I dont have any more time to work on it. 

- [x] **Bundled and transpiled** - done!
- [x] **Components** - Login and watchlist are components. Only login has interesting functionality.
- [x] **Router** - Routing between login and watchlist components.
- [x] **Hooks** - Hooks were used in login
