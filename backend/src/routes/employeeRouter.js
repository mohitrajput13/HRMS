import express from 'express';
import upload from '../middlewares/multer.js';
import { addEmployee, addOldEmployee, getAllEmployee, getAllOldEmployee, removeEmployee, removeOldEmployee, updateEmployee, updateOldEmployee } from '../controllers/employeeController.js';

const employeeRouter = express.Router();

employeeRouter.post('/addEmployee',
  upload.fields([
    { name: 'resume', maxCount: 1 },
    { name: 'profile', maxCount: 1 },
  ]),
  addEmployee
);
employeeRouter.get('/getAllEmployee', getAllEmployee);
employeeRouter.put('/updateEmployee/:id',
  upload.fields([
    { name: 'resume', maxCount: 1 },
    { name: 'profile', maxCount: 1 },
  ]),
  updateEmployee
);
employeeRouter.delete('/removeEmployee/:id', removeEmployee);
//---------------------------------------OLD EMPLOYEES-------------------------------------------
employeeRouter.post('/addOldEmployee',
  upload.fields([
    { name: 'profile', maxCount: 1 },
  ]),
  addOldEmployee
);
employeeRouter.get('/getAllOldEmployee', getAllOldEmployee);
employeeRouter.put('/updateOldEmployee/:email',
  upload.fields([
    { name: 'profile', maxCount: 1 },
  ]),
  updateOldEmployee
);
employeeRouter.delete('/removeOldEmployee/:id', removeOldEmployee);
export default employeeRouter;
