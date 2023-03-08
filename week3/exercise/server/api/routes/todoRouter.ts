import {Request, Response, Router} from "express";
import {BasicTODO, CreateBasicTODO} from "../../lib/types";
import {StorageService} from "../../lib/storage-service";

const todoRouter = Router();

todoRouter.get('/', (req: Request, res : Response) => {
    const result = StorageService.getAllTodos();

    res.status(200).json(result);

})


export {todoRouter}
