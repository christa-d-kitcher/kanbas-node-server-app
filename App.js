//2.5 Creating a Node.js HTTP Web server

//const express = require('express')
import express from 'express';
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentsRoutes from "./Kanbas/assignments/routes.js";
import cors from "cors";

const app = express()
app.use(cors());
//app.use(express.json());
// app.get('/hello', (req, res) => {res.send('Life is good')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.use(express.json());
AssignmentsRoutes(app)
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);

