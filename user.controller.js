import { Router } from "express";
import * as userService from './user.service.js'
const userController = Router();

userController.get('/health',(req,res)=>{
     res.status(200).json({ message:'user server is healthy'});

}); 


userController.get('/profile/:userId',async(req,res)=>{

    const { userId}=req.params
    const Userprofile =await userService.getUserprofile(userId)
    res.status(200).json({message:'user profile successfully',data:Userprofile})

})

userController.get('/',async (req,res) => {
    const users =await userService.getAllUser()
    res.status(200).json({message:'all user ',data:users})
    
})

userController.patch('/update/:userId',async (req,res) => {
     const{firstName,lastName,password,gender,age}=req.body
     const {userId}=req.params
     const result=await userService.updateProfile({firstName,lastName,password,gender,age},userId)
    res.status(200).json({message:'all user updated ',data:result})
})



userController.delete('/delete/:userId',async (req,res) => {
    const result=await userService.deleteProfile(req.params.userId)
    res.status(200).json({message:'user deleted',data:result})   
})

export default userController;