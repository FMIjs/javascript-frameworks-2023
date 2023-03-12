import {Request, Response, Router} from "express";
import {BasicTODO, CreateBasicTODO} from "../../lib/types";
import {StorageService} from "../../lib/storage-service";

const basicTodoRouter = Router();

basicTodoRouter.post('/', (req: Request<any, any, BasicTODO, CreateBasicTODO>, res : Response) => {
    if(req.body !== undefined && req.body.description !== undefined) {
        const result = StorageService.addBasicTodo(req.body);
        if(result === false){
            res.status(400).send("Could not create todo!");
            return;
        }

        res.status(200).json(result);
    }else{
        res.status(400).json({message: 'description not provided in body'});
    }
})

basicTodoRouter.put('/:todoId/complete', (req: Request<{todoId?: string}, BasicTODO, CreateBasicTODO>, res : Response) => {
    if(req.params.todoId) {
        const result = StorageService.completeTodo(+req.params.todoId);
        if(result === false){
            res.status(400).json({message: "Could not complete todo!"});
            return;
        }

        res.status(200).send(true);
    }else{
        res.status(400).json({message: 'Could not complete todo!'});
    }
})


export {basicTodoRouter}
