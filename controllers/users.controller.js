const Users = require("../modezls/users.models");

const ValidateUser = require("../validation/Users.validation");

const AddUser = async (req, res) => {   //we use async for a promise mode function with the power of the await 
  const { errors, isValid } = ValidateUser(req.body);
  try {
    if (!isValid) {   /// idha kén el isvalid mt3na false it means fama errors 

      res.status(404).json(errors); //errors mtena hna khdhinéhom ml module user.validation  to notice lfoug fl const { errors, isValid }
    
    } else {
        await Users.findOne({ Email: req.body.Email }).then(async (exist) => {
        if ((exist)) {
          errors.Email = "User Exist";
          res.status(404).json(errors);
        } else {
          await Users.create(req.body);
          res.status(200).json({ message: "User added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllUsers = async (req, res) => {
  try {
    const data = await Users.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSingleUser = async (req, res) => {
  try {
    const data = await Users.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateUser = async (req, res) => {
    const { errors, isValid } = ValidateUser(req.body);

    try {
        if (!isValid) {
            res.status(404).json(errors);
          } else {
    const data = await Users.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(201).json(data);}
  } catch (error) {
    console.log(error.message);
  }
};

const DeleteUser = async (req, res) => {
  try {
    const data = await Users.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "User deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddUser,
  FindAllUsers,
  FindSingleUser,
  DeleteUser,
  UpdateUser,
};
