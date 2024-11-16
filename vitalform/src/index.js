import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import express from 'express';
import cors from 'cors';
import userRoutes from '/Users/Pedro/Documents/Projeto-VitalForm-main/src/Backend/routes/users';

const app = express()

app.use(express.json())
app.use(cors())

app.listen(8800)

app.use("/", userRoutes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
