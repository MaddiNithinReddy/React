import mongoose from 'mongoose'
const schema=mongoose.Schema({
    name: {type: String,required: true},
    mail:{type: String,required: true,unique: true},
    password: {type: String,required: true,unique: true}
})
export default mongoose.model('User',schema)