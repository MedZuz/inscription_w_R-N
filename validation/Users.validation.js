const isEmpty = require('./isEmpty');

const validator = require('validator');

module.exports = function ValidateUser(data){
   
    let errors = {}
   
   
    data.Email = !isEmpty(data.Email) ? data.Email : ""  // we declare a Var fyh test sghir : if data.Email is empty then it means return data.Email or l3aks khaleha empty 
    data.Lastname = !isEmpty(data.Lastname) ? data.Lastname : ""
    data.Firstname = !isEmpty(data.Firstname) ? data.Firstname : ""
    data.Age = !isEmpty(data.Age) ? data.Age : ""

 
    if (!validator.isEmail(data.Email)){
        errors.Email = "required Format  email"
    }

        if (validator.isEmpty(data.Email)){   //idhaken l var ly lfoug (exmp : data.Email) equal to false : then put message required 
            errors.Email = "required email"
        }
        if (validator.isEmpty(data.Lastname)){
            errors.Lastname = "required Lastname"
        }
        if (validator.isEmpty(data.Firstname)){
            errors.Firstname = "required Firstname"
        }
        if (validator.isEmpty(data.Age)){
            errors.Age = "sssss age"
        }

return{    //if we have no errors is valid will be True 
    errors,
    isValid : isEmpty(errors)
}


}
