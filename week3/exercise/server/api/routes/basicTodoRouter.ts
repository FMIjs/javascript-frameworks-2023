import {Request, Response, Router} from "express";
import {BasicTODO, CreateBasicTODO} from "../../lib/types";
import {StorageService} from "../../lib/storage-service";

const basicTodoRouter = Router();

basicTodoRouter.post('/', (req: Request<any, any, BasicTODO, CreateBasicTODO>, res : Response) => {
    if(req.body !== undefined && req.body.description !== undefined) {
        const result = StorageService.addBasicTodo(req.body);
        if(result === false){
            res.status(401).send("Could not created todo!");
        }

        res.status(200).json(result);
    }

})


export {basicTodoRouter}
