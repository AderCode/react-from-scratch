import { Router } from 'express';
import chirpsRouter from './chirps';
import mentionsRouter from './mentions'

let router = Router();

router.use('/chirps', chirpsRouter);
router.use('/mentions', mentionsRouter)

export default router;