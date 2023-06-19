const { response } = require("express");
const accountsModel = require("./accounts-model");

exports.checkAccountPayload = (req, res, next) => {
  // KODLAR BURAYA
  // Not: Validasyon için Yup(şu an yüklü değil!) kullanabilirsiniz veya kendiniz manuel yazabilirsiniz.
  try{
    let {budget,name} = req.body;
    if(budget === undefined ||name === undefined){
      res.status(400).json({message:"name and budget are required"});
    }else{
      if(req.body.name) name = req.body.name.trim();
      if(name.lenght > 3 || name.lenght < 100){
        res.status(400).json({message:"name of account must be between 3 and 100"});
      }else if(typeof budget !== "number"){
        res.status(400).json({message:"budget of account must be a number"});
      }else if(budget < 0 || budget > 1000000){
        res.status(400).json({message:"budget of account is too large or too small"});
      }else{
        req.body.name=name;
        next();
      }
    }
  }catch(error){
    res.status(400).json({message:error.message});
  }
};

exports.checkAccountNameUnique = async (req, res, next) => {
  // KODLAR BURAYA
  try{
    let isExist=false;
    let existAccount = await accountsModel.getByName(req.body.name);
    isExist = existAccount != null;

    if(isExist){
      res.status(400).json({message:"that name is taken"});
    }else{
      next();
    }
  }catch(error){
    next(error);
  }
};

exports.checkAccountId = async (req, res, next) => {
  // KODLAR BURAYA
  try{
    const existAccount = await accountsModel.getById(req.params.id);
    if(!existAccount){
      res.status(404).json({message:"account not found"});
    }else{
      next();
    }
  }catch(error){
    next(error);
  }
};
