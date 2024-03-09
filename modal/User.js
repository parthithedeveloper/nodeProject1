const Sequelize = require('sequelize');
bcrypt = require('bcryptjs');

const sequelize = require('../dbConfig');

const User = sequelize.define('user',{
    username:{type:Sequelize.STRING},
    email:{type:Sequelize.STRING,unique:true},
    password:{type:Sequelize.STRING},
    mobile:{type:Sequelize.STRING},
    roleId:{type:Sequelize.INTEGER}
},{
    hooks:{
        beforeCreate:async function(user,option){
            try{
                user.password =await bcrypt.hash(user.password,12);
            }catch(err){
                console.log(err);
            }
        }
    }
})

User.prototype.checkPassword = async function (password) {
    try{
        if(!password){
            return false
        }
        return await bcrypt.compare(password,this.password);
    }catch(err){
        console.log(err);
    }
  
}

User.sync();

module.exports=User;