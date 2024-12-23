Post Management System
Project Overview
This is a backend project that provides APIs for user authentication (signup, login), and post creation. The application uses Node.js, Express.js, MongoDB, and JWT for secure token-based authentication. It follows a modular architecture with proper structuring of controllers, models, and routes.

Project Structure-

NPM WORKS/
├── .env                     # Environment variables
├── .gitignore               # Ignore sensitive files like .env
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
├── src/
│   ├── controllers/         # API logic
│   │   ├── userController.js
│   │   ├── postController.js
│   ├── models/              # Mongoose schemas
│   │   ├── userModel.js
│   │   ├── postModel.js
│   ├── routes/              # API endpoints
│   │   ├── userRoutes.js
│   │   ├── postRoutes.js
│   ├── index.js            # Entry point for the server


Features -

User Signup and Login:

1-  Users can register and log in to the platform.
    JWT-based authentication ensures secure access to APIs.
    
 2- Post Management:
   Create posts with proper authentication.
   Posts can include name, description, tags, and an imageUrl.
 
 3- Authentication Middleware:
    Ensures only authenticated and verified users can create posts.

 4- Code Formatting:
   Use npm run prettier to auto-format the codebase.

Prerequisites :-

- Node.js: v16 or later
- MongoDB: Installed and running
- Postman: For API testing

 Create a .env File :-

- PORT=3002
- MONGO_URI=mongodb://localhost:27017/postManagement
- JWT_SECRET=your_jwt_secret_key

 Run the Development Server:-
 - npm run dev

Testing:-

1. Using Postman
  - Import API endpoints into Postman.
  - Test user signup, login, and post creation.
  - Use the JWT token obtained during login for protected routes.

  Postman Example Request Headers:-
  
 -  Authorization: Bearer <your-token>

 Ignore Files:-

 - .env
 - node_modules
   

 Prettier Formatting:-
 - npm run prettier









