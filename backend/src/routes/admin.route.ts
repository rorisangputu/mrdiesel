import { Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send({message: " Hello from Admin Router"})
})

export default router;