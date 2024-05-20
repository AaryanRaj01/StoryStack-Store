import User from "../model/user.models.js";
import bcrypt from "bcrypt";
export const Signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    await createdUser.save();
    res.status(201).json({ message: "User Created Succesfully",user:{
        fullname:createdUser.fullname,
        email:createdUser.email,
        _id:createdUser._id
        
    } });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid Username or Password" });
    } else {
      res.status(200).json({
        message: "Sucessfully Logged In",
        user: {
          fullname: user.fullname,
          email: user.email,
          _id: user._id,
        },
      });
    }
  } catch (error) {
    console.log("Error " +error.message);
    res.status(500).json({message:"Internal Server Error"});
  }
};
