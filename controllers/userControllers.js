import Users from "../models/users.js";
import encrypt from "encryptjs";

export const userRegister = async (req,res) =>{
    try{
        const {username, email, password, confirmPassword} = req.body;

        const user = await Users.find({email}).exec();
        if(user.length) return res.send("User is already registered.");

        if(password.length < 8 && confirmPassword.length < 8){
            return res.send("Password should be more than 8 characters.");
        }

        if(password !== confirmPassword){
            return res.send("Passwords do not match.");
        }

        let secretKeyPass = "secretKeyPass";
        const encryptPass = encrypt.encrypt(password, secretKeyPass, 256);
        const newUser = new Users({
            username,
            email,
            password : encryptPass
        });
        await newUser.save();
        return res.send("User registered successfully.");

    }catch(err){
        return res.send(err);
    }
}