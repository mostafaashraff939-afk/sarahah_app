

import UserRepository from "../../db/models/Repositories/user.repository.js";

import { comparePasswords, hash } from "../../Utils/Secuirty/hash.secuirty.js";
import { encrypt } from "../../Utils/Secuirty/encryption.security.js";
import HttpAppError from "../../Utils/Errors/app.error.js";
import { ConflictException } from "../../Utils/Errors/exception.error.js";



const userRepo =new UserRepository()

export const registerUser = async(body)=>{
    const { firstName,lastName,email,password,gender,age,phone} =body;


const isEmailExist= await userRepo.findUserByEmail(email)
if (isEmailExist) throw new ConflictException('email is olready exist',{duplicatedEmail:email},'email_conflict')

let encrypedphone
if (phone) encrypedphone= encrypt(phone)

const hashedPassword=await hash(password)

return userRepo.createDocument({firstName
    ,lastName,
    password,
    email
    ,gender
    ,age
    ,phoneNumber: encrypedphone|| null,});


const userIns= new User({firstName,lastName,email,password,gender,age});
return userIns.save();








}
export const signIn= async ({email,password})=>{
    const user=await User.findOne({email});
console.log({user});



if(!user){
    throw new error('invalid email or password');

}
if(user.password!==password){
    throw new error('invalid email or password');
}
return user;

}

