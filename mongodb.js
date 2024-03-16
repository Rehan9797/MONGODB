const mongoose=require('mongoose');
let compass_url='mongodb://localhost:27017/sample'
let mongodb_url = 'mongodb+srv://REHAN_2003:REHAN_2003@rehan.ukixr04.mongodb.net/FRISTDB?retryWrites=true&w=majority&appName=REHAN'
mongoose.connect(mongodb_url).then(()=>{
    console.log("DB connected!");
})
//to find thre errors and to know is it connecting proper
.catch((err) => {
    console.log(err);
});