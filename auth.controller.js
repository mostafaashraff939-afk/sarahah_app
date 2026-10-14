import { Router } from 'express';
import * as authservice from './auth.service.js'
import { loginSchema } from './auth.validation.js';
import{signIn} from "./auth.service.js"
import { BadRequestException } from '../../Utils/Errors/exception.error.js';
const authcontroller = Router()

authcontroller.post("/signIn", async (req, res, next) => {
    const validationResult = signupSchema.safeParse(req.body);
    if (!validationResult.success) {
        throw new BadRequestException("Validation Error", validationResult.error.issues);
    }
    const result = await signup(req.body);
    return successResponse({ res, status: 201, data: result });
});


authcontroller.post('/register',async (req,res)=>
{
    const { firstName,lastName,email,password,gender,age,phone}=req.body
    const result =await authservice.registerUser({firstName,lastName,password,email,gender,age,phone})
    res.status(201).json({message: 'user registered succsesfuly',data:result})
})

authcontroller.post('/login',async (req,res)=>{

    
     const validationResult=   loginSchema.safeParse(req.body);
       if(!validationResult.success){
        throw BadRequestException("validation error",validationResult.error);
        
        ; }


    console.log({validationResult});

      //  throw BadRequestException("validation error",error)
        
    
    
    const { email,password}=req.body
    const user = await authservice.signIn({email,password})
    res.status(200).json({message:'user logged in successfuly',data:user})

})

export default authcontroller
