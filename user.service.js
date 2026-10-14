
import { isValidObjectId } from "mongoose";
import UserRepository from "../../db/models/Repositories/user.repository.js";
import {decrypt} from '../../Utils/Secuirty/encryption.security.js'
import User from "../../db/models/user.model.js";

const userRepo = new UserRepository()

export const getProfileById = async (id) => {
    if (!isValidObjectId(id)) throw new Error('invalid id')
    const user = await userRepo.findDocumentById(id)
    if (user.phoneNumber) user.phoneNumber = decrypt(user.phoneNumber)
    return user
}

export const getAllUsers= async () => {
    return User.find().select ('firstName','lastName')
    .limit(2)
    .skip(1);
    
}

export const updateProfile= async (body,userId)=>{
    const{firstName,lastName,password,gender,age}=body;
//return user.findoneAndupdate({_id:userId},{firstName,lastName,password,gender,age},{new:true,runValidators:true})
    const user = await User.findById(userId)
    if (firstName) user.firstName=firstName
    if(lastName) user.lastName=lastName
    if(gender) user.gender=gender
    if(age) user.age=age
    if (email){

const isExistingUser= await User.findOne({email:{$regex:email,$options:'i'}});
user.email=email
    }


}
return user.save()

export const deleteProfile=async (userId)=>{
    return user.deleteOne({_id:userId})
}
