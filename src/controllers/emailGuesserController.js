const {emailGuesser} = require("../services/emailGuesserService");

//controller function to handle post requesta to guess the email based on domain
const emailGuesserController = (req, res) => {
    const {fullName,companyDomain}  = req.body;
    // using the emailGuesser function in services layer to guess email
    const email = emailGuesser(fullName,companyDomain);
    if(email){
        res.status(200).json({email});
    }else{
        res.status(404).json({message:"unable to guess email based on given domain name"});
    }
}

module.exports = {emailGuesserController}