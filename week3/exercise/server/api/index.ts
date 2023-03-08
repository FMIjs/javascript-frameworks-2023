import {Router} from "express";
import {basicTodoRouter} from "./routes/basicTodoRouter";
import {todoRouter} from "./routes/todoRouter";

const apiRouter = Router();

apiRouter.use('/todos', todoRouter);
apiRouter.use('/basic', basicTodoRouter);
// apiRouter.use('/timed', timedTodoRouter);
// apiRouter.use('/advanced', advancedTodoRouter);


export {apiRouter}
