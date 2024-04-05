//4.3.1 Retrieving Modules for Course
import db from "../Database/index.js";

// import {modules} from "../Database/index.js";

function ModuleRoutes(app) {

    //4.3.4 Update Module
    app.put("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        const moduleIndex = db.modules.findIndex((m) => m._id === mid);
        db.modules[moduleIndex] = {...db.modules[moduleIndex], ...req.body};
        res.sendStatus(204);
    });

    //4.3.3 Deleting a Module
    app.delete("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        db.modules = db.modules.filter((m) => m._id !== mid);
        res.sendStatus(200);
    });

    //4.3.2 Creating Modules for a Course
    app.post("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const newModule = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        db.modules.push(newModule);
        res.send(newModule);
    });

    //
    app.get("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const mdls = db.modules.filter((m) => m.course === cid);
        res.send(mdls);
    });
}
export default ModuleRoutes;