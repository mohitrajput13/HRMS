import Employee from '../models/employeeModel.js';
import dotenv from 'dotenv'
dotenv.config();
console.log(process.env.baseUrl,"=======================");
const baseUrl = process.env.baseUrl;
export const addEmployee = async (req, res) => {
  try {


    let user = await Employee.findOne({ eid: req.body.eid });

    if (!user) {
      if (req.files && req.files.resume) {
        const resumePath = req.files.resume[0].originalname;
        console.log(resumePath);

        req.body.resume = `${baseUrl}/resumes/${resumePath}`;
      }

      if (req.files && req.files.profile) {
        const profilePath = req.files.profile[0].originalname;
        console.log(profilePath);
        req.body.profile = `${baseUrl}/images/${profilePath}`;
      }


      let result = await Employee.create(req.body);
      return res.status(200).json({ message: 'Sign up success', user: result });
    } else {
      return res.status(401).json({ message: 'Employee Already Exists' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Sign up unsuccessful', error });
  }
};
export const getAllEmployee = async (req, res) => {
  try {
    const resignedEmployees = await Employee.find({ dor: { $exists: false } })
      .then((result) => {
        return res.status(200).json({ user: result });
      })
      .catch()
  } catch (error) {

  }
}
export const removeEmployee = async (req, res) => {
  try {
    const id = "" + parseInt(req.params.id);
    console.log("Request ID: " + req.params.id);
    console.log("Parsed ID: " + id);

    // Await the delete operation to get the result
    let result = await Employee.deleteOne({ eid: id });
    console.log("Delete Result:", result);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    } else {
      return res.status(200).json({ message: 'Employee removed successfully', employee: result });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
}
export const updateEmployee = async (req, res) => {
  try {
    const id = "" + parseInt(req.params.id);
    console.log(req);
    
    let user = await Employee.findOne({ eid:id});
    if (user) {
      if (req.files && req.files.resume) {
        const resumePath = req.files.resume[0].originalname;
        console.log(resumePath);
        req.body.resume = `${baseUrl}/resumes/${resumePath}`;
      }
      if (req.files && req.files.profile) {
        const profilePath = req.files.profile[0].originalname;
        console.log(profilePath);
        req.body.profile = `${baseUrl}/images/${profilePath}`;
      }
      let result = await Employee.updateOne({ eid:id }, req.body);
      return res.status(200).json({ message: 'Update successful', user: result });
    } else {
      return res.status(404).json({ message: 'Employee Not Found' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Update unsuccessful', error });
  }
};

//====================================----OLD EMPLOYEE------==================================

export const addOldEmployee = async (req, res) => {
  try {


    let user = await Employee.findOne({ eid: req.body.eid });

    if (!user) {
      if (req.files && req.files.profile) {
        const profilePath = req.files.profile[0].originalname;
        console.log(profilePath);
        req.body.profile = `${baseUrl}/images/${profilePath}`;
      }
      let result = await Employee.create(req.body);
      return res.status(200).json({ message: 'Sign up success', user: result });
    } else {
      return res.status(401).json({ message: 'Employee Already Exists' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Unsuccessful', error });
  }
};
export const getAllOldEmployee = async (req, res) => {
  try {
    const resignedEmployees = await Employee.find({ dor: { $exists: true, $ne: null } })
      .then((result) => {
        return res.status(200).json({ user: result });
      })
      .catch((error) => {
        return res.status(500).json({ error: 'Error fetching records' });
      });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
export const removeOldEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Request ID: " + id);

    const result = await Employee.deleteOne({ _id: id });
    console.log("Delete Result:", result);
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    } else {
      return res.status(200).json({ message: 'Employee removed successfully' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
}
export const updateOldEmployee = async (req, res) => {
  try {
    
    console.log(req.params
    );
    
    let user = await Employee.findOne({ email:req.params.email});
    
    
    if (user) {
      if (req.files && req.files.profile) {
        const profilePath = req.files.profile[0].originalname;
        // console.log(profilePath);
        req.body.profile = `${baseUrl}/images/${profilePath}`;
      }
      let result = await Employee.updateOne({ email:req.params.email }, req.body);
      return res.status(200).json({ message: 'Update successful', user: result });
    } else {
      return res.status(404).json({ message: 'Employee Not Found' });
    }
  } catch (error) {
    
    return res.status(500).json({ message: 'Update unsuccessful', error });
  }
};