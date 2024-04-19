//2.5 Creating a Node.js HTTP Web server

//const express = require('express')
import express from 'express';
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import AssignmentsRoutes from "./Kanbas/assignments/routes.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import "dotenv/config";


mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express()

app.use(
    cors({
             credentials: true,
             origin: process.env.FRONTEND_URL,
         })
);

const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.HTTP_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));


//app.use(express.json());
// app.get('/hello', (req, res) => {res.send('Life is good')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.use(express.json());
UserRoutes(app);
AssignmentsRoutes(app)
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);

