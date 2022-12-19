const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const DBconnection = require('../DB/Connection')


const CURDController = {
  create: async (req, res) => {
                  try {
                          // console.log(req.body);
                          const { name, email, phone, password, designation } = req.body;
                          const encPassword = await bcrypt.hash(password,10);
  
                              // Validation of Name
                          if (validator.isAlpha(name) == false) {
                          return res.status(StatusCodes.BAD_REQUEST).json({ msg: " Enter Only Aa-Zz Characters" });
                          }
                              // Validation of Email
                          if (validator.isEmail(email)== false) {
                          return res.status(StatusCodes.BAD_REQUEST).json({ msg: " Enter Only Valid Email" }); 
                          }
                                  // Validation of phone
                          if (validator.isMobilePhone(phone,['en-IN'])==false) {
                          return res.status(StatusCodes.BAD_REQUEST).json({ msg: " Enter Only Valid phone" });  
                          }
  
                          // PassWord Validation and Return Password Score.
                          let score =validator.isStrongPassword(password,{ returnScore: true})
                          if (validator.isStrongPassword(password,{minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: true})==false || score <50) {
                          return res.status(StatusCodes.BAD_REQUEST).json({ msg: `Password Score required above 50, Current Score is ${score}` });    
                          }
                              //  Enter min 10 Characters
                          if (validator.isLength(designation,{min:10 }) == false) {
                              return res.status(StatusCodes.BAD_REQUEST).json({ msg: " Enter min 10 Characters" });
                          }
  
  
                              let findData = `SELECT * FROM user_master WHERE email='${email}'`;
                              // console.log(findData)
                              let exitID = await DBconnection(findData);
                              // console.log(exitID)
                              let id = null;
                              if (exitID.length==0) {
                                // console.log('yes')
                                 //   Insert Query
                              let insertData = `INSERT INTO user_master (name, email, phone, password, designation) VALUES ("${name}","${email}","${phone}","${encPassword}","${designation}")`;
                              // console.log(insertData);
                              let result = await DBconnection(insertData);
                              // console.log(result.insertId);
                               id = result.insertId;
                              } else {
                                // console.log('No')
                              return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Email id is already Exits!" });
                                
                              }
                              res.status(StatusCodes.CREATED).json({ msg: " Create SuccessFull", score ,id });  
                  } catch (err) {
                    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
                  }                   
  },
  update: async (req, res) => {

                                try {
                                  // reading data from url (id);
                                  let id = req.params.id;
                                  const { name,  phone, designation } = req.body;
                              // Validation of Name
                              if (validator.isAlpha(name) == false) {
                                return res.status(StatusCodes.BAD_REQUEST).json({ msg: " Enter Only Aa-Zz Characters" });
                                }
                                        // Validation of phone
                                if (validator.isMobilePhone(phone,['en-IN'])==false) {
                                return res.status(StatusCodes.BAD_REQUEST).json({ msg: " Enter Only Valid phone" });  
                                }

                                    //  Enter min 10 Characters
                                if (validator.isLength(designation,{min:10 }) == false) {
                                    return res.status(StatusCodes.BAD_REQUEST).json({ msg: " Enter min 10 Characters" });
                                }

                                  // console.log(req.body);
                                  let findData = `SELECT * FROM user_master WHERE id='${id}'`;
                                  // console.log(findData)
                                  let exitsID = await DBconnection(findData);

                                  if (exitsID.length == 0) {
                                   return res.status(StatusCodes.OK).json({ msg: "Unable to Update Data, Provide id doesn't exists",id});

                                  } else {
                                    // Update Query
                                    let UpdateQuery = `UPDATE user_master SET name="${name}",phone="${phone}" ,designation="${designation}" WHERE id="${id}"`;
                                    console.log(UpdateQuery);
                                    let result = await DBconnection(UpdateQuery);
                                   
                  
                                  }
                                  res.status(StatusCodes.OK).json({ msg: "Data Update SuccessFull",id});


                                  } catch (err) {
                                    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
                                  }
                                 
  },
  read: async (req, res) => {

    try {
      let getAllData = `Select id,name, email, phone, designation from user_master WHERE is_active=1`;
      let result = await DBconnection(getAllData);
      // console.log(result);
      let length =result.length
      res.status(StatusCodes.OK).json({result,length});
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
    }

         
  },
  delete: async (req, res) => {
                      try {
                      // reading data from url (id);
                      let id = req.params.id;
                      let findData = `SELECT * FROM user_master WHERE id='${id}'`;
                      // console.log(findData)
                      let exitsID = await DBconnection(findData)
                      if (exitsID.length == 0) {
                       return res.status(StatusCodes.OK).json({ msg: "Unable to Update Data, Provide id doesn't exists",id});
                      } else {
                        // Update Query
                        let UpdateQuery = `UPDATE user_master SET is_active="0"  WHERE id="${id}"`;
                        // console.log(UpdateQuery);
                        let result = await DBconnection(UpdateQuery);
                      }
                      res.status(StatusCodes.OK).json({ msg: "Delete SuccessFull",id });
                      } catch (err) {
                        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
                      }
  },
  readSingle:async (req,res)=>{
    try {
        let id = req.params.id;
        let findData = `SELECT * FROM user_master WHERE id='${id}'`;
        // console.log(findData)
        let exitsID = await DBconnection(findData)
        if (exitsID.length == 0) {
          return res.status(StatusCodes.OK).json({ msg: "Unable to Get Data, Provide id doesn't exists",id});
        } else {
           let findData = `SELECT id,name, email, phone, designation FROM user_master WHERE id='${id} AND is_active=1'`;
        // console.log(findData)
        let getData = await DBconnection(findData);
        // console.log(getData)
        res.status(StatusCodes.OK).json({ getData });
        }
       


    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
    }
  }
};

module.exports = CURDController;
