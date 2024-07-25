import userModel from "../models/userModel.js";

const createUser = async (req, res) => {
  try {
    const { userName, email, password, age, gender, phone, address } = req.body;

    // console.log("data", req.body);

    // if (!userName || !email || !password) {
    //   res.status(400).json({ message: "All fields are required." });
    //   return;
    // }

    const user = await userModel.create({
      name: userName,
      email,
      password,
      age,
      gender,
      phone,
      address,
    });

    if (!user) {
      res.status(400).json({ message: "Invalid user data." });
      return;
    }

    console.log("user created", user);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

   const getUser= async (req, res) => {
  try {
    // req.body, req.query, req.params
    
  
          const page = parseInt(req.query.page) || 1;
          const limit = parseInt(req.query.limit) || 10;
          const search = require.query.search || "";
          const skip = (page - 1) * limit;
  
          const name = req.query.name;
          const userName = req.query.userName;
          let query = {};
  
  
          if(req.query.name) {
              query.name1 = req.query.name;
              new RegExp(req.query.name, 'i' );
          }
           if(req.query.userName) {
              query.name1 = req.query.userName;
              new RegExp(req.query.userName, 'i' );
          }
      
        
  
          const findPatients = await Patient.find()
          .skip(skip)
          .limit(limit);
  
          if (!findPatients || findPatients.length === 0) {
              console.log("Patients not found");
              return res.status(404).json("Patients not found");
          }
  
          const totalCount = await Patient.countDocuments();
  
          // Calculate total pages 
          const totalPages = Math.ceil(totalCount / limit);
  
          res.status(200).json({
              findPatients,
              page,
              totalPages,
              totalCount,
          });
    



    // const users = await userModel.find().sort({ createdAt: 1 });

    // // const users = await userModel.countDocuments();
    // //.sort(-1); db.users.find().sort({age:-1})

    // if (users.length === 0) {
    //   res.status(404).json({ message: "No users found." });
    //   return;
    // }

    // res.status(200).json({
    //   success: true,
    //   massage: "total Records",
    //   totalRecords: users,
    // });

    // console.log(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.userId;

    const updatedUser = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      res.status(400).json("something error");
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.userId;
    const deletedUser = await userModel.findByIdAndDelete(id);
    res.json(deletedUser);
    res.status(201).json({ message: " User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// export default createUser;
export { createUser, getUser, updateUser, deleteUser };
