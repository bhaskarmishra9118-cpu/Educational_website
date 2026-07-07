# Educational Website

A learning platform with student and teacher roles, question management, live sessions, authentication, and a React/Vite frontend paired with an Express/MongoDB backend.

## Project Structure

- `Bakend/`
  - Express server
  - Mongoose models
  - JWT authentication
  - Question, live session, and user controllers
- `Frontend/Educational system/`
  - React application built with Vite
  - Redux Toolkit for state management
  - React Router for protected routes
  - Axios API clients and Tailwind-ready styling

## Features

- Register and login for students and teachers
- Role-based protected routing
- Student dashboard with ask question, question history, and profile
- Teacher dashboard with pending questions and earnings view
- Realtime/live session support through socket.io
- API integration between frontend and backend

## Requirements

- Node.js 18+ recommended
- MongoDB database

## Backend Setup

1. Open a terminal in `Bakend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `Bakend/` with:
   ```env
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=2001
   ```
4. Start the backend:
   ```bash
   npm run dev
   ```
5. The backend will run on `http://localhost:2001` by default.

## Frontend Setup

1. Open a terminal in `Frontend/Educational system/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend dev server:
   ```bash
   npm run dev
   ```
4. Open the local Vite URL shown in the terminal (usually `http://localhost:5173`).

## Environment Configuration

The frontend code uses Axios clients in `src/api/axios.js`. If you change the backend port or host, update the `baseURL` there.

## Running the App

- Start backend first, then frontend.
- Login as a teacher or student to access role-specific pages.
- The application uses JWT tokens stored in Redux state and local storage.

## API Endpoints (Example)

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/questions/student`
- `GET /api/questions/teacher`
- `POST /api/questions`
- `GET /api/live-sessions`
- `POST /api/solutions`

## Notes

- The backend folder is named `Bakend`; keep that name when running commands.
- If you need to change route paths, verify both frontend routes in `src/App.jsx` and menu links in `src/components/common/MenuConfig.js`.

## Troubleshooting

- If the frontend cannot reach the backend, confirm the backend is running and `src/api/axios.js` points to the correct host.
- If login fails, verify MongoDB is connected and `JWT_SECRET` in `.env` matches the backend configuration.
