import * as dao from "./dao.js";
export default function CourseRoutes(app) {

    const createModule = async (req, res) => {
        //const { cid } = req.params;

        const module = await dao.createModule(req.body);
        res.json(module);
    };

    const findAllModules = async (req, res) => {
        const { name } = req.query;
        if (name) {
            const module = await dao.findModuleByName(name);
            res.json(module);
            return;
        }

        const { cid } = req.params;

        const modules = await dao.findAllModules(cid);
        res.json(modules);
    };

    const findModuleById = async (req, res) => {
        const module = await dao.findModuleById(req.params.moduleId);
        res.json(module);
    };

    const updateModule = async (req, res) => {
        const { moduleId } = req.params;
        const status = await dao.updateModule(moduleId, req.body);
        res.json(status);
    };

    const deleteModule = async (req, res) => {
        const status = await dao.deleteModule(req.params.userId);
        res.json(status);
    };


    app.post("/api/courses/:cid/modules", createModule);
    app.get("/api/courses/:cid/modules", findAllModules);
    app.get("/api/modules/:moduleId", findModuleById);
    app.put("/api/modules/:moduleId", updateModule);
    app.delete("/api/modules/:moduleId", deleteModule);


}
