import express from 'express'
import { addData, getData} from '../controller/data-controller.js';

const router = express.Router();

router.post('/add', addData);
router.get('/getdata', getData);
// router.get('/getpiechartdata', getPieChartData);
// router.get('/getlinechartdata', getLineChartData);

export default router;