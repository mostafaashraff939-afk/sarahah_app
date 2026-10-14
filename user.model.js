import mongoose from "mongoose";
import { type } from "node:os";

const userschema =new mongoose.Schema({

    firstName:{
        type:String,
        required:true,
        minLingth:[3, 'first name must be at least 3'],
        maxLingth:[20,'first name must be at least '],
        lowercase:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        minLingth:3,
        maxLingth:30,
        trim:true,
        uppercase:true

    },

    email:{
        type:String,
        required:true,
        index:{ name :'idx_email_unique',unique:true}


    },
    password:{
        type:String,
        required:true,
        set:(value)=> {
            console.log(`setting password for user : ${value}`);
            const newValua =  `${value}#${value.length}`;
            return newValua
        }
    },
    gender:{
        type:String,
        enum:['male','female','other'],
        default:'other',
    },
    age:{
        type:Number,
        min:[18,'age must be at least 18'],
        max:200,
    },

profilePicture:String,
phoneNumber:String
},{
    virtuals:{
        fullName:{
            get(){
                return `${this.firstName}  ___ ${this.lastName}`;

            }
        }
    },
    toObject:{virtuals:true},
    toJSON:{virtuals:true},
    timestamps:true



})

console.log({allModels:mongoose.models});

const user =mongoose.model('user',userschema);
export default user;