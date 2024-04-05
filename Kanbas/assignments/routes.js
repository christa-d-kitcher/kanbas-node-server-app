import db from "../Database/index.js";

function AssignmentsRoutes(app) {

    //4.3.5 Creating Assignments for a course
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        db.assignments.push(newAssignment);
        res.send(newAssignment);
    });

    //Retrieving Assignments for a course
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignmentsList = db.assignments
            .filter((a) => a.course === cid);
        res.send(assignmentsList);
    });

    //4.3.5 Updating Assignments for a course
    app.put("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const assignmentIndex = db.assignments.findIndex((a) => a._id === aid);
        db.assignments[assignmentIndex] = {...db.assignments[assignmentIndex], ...req.body};
        res.sendStatus(204);
    });

    //4.3.3 Deleting an Assignment
    app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        db.assignments = db.assignments.filter((a) => a._id !== aid);
        res.sendStatus(200);
    });

}
export default AssignmentsRoutes;