import { Router, Request, Response } from 'express';
import DBUtils from '../utils/util_db';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
  
  const data = await DBUtils.connect();
  
  res.send(data);
});

export default router;
