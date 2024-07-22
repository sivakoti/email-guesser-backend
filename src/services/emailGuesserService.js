const data = {
    "Jane Doe": "jdoe@babbel.com",
    "Jay Arun": "jayarun@linkedin.com",
    "David Stein": "davidstein@google.com",
    "Mat Lee": "matlee@google.com",
    "Marta Dahl": "mdahl@babbel.com",
    "Vanessa Boom": "vboom@babbel.com"
};

// function to format the given data into domain and email naming format mapping
const formatData = (data) =>{
    // using reduce HOC to format the data by iterating over data object
    return Object.entries(data).reduce((acc,[fullName, email]) => {
        const name = email.split("@")[0];
        const domain = email.split("@")[1];
        if(!acc[domain]){
            if(name === fullName.toLowerCase().split(' ').join('')){
                acc[domain] = "first_name_last_name"
            }
            else{
                acc[domain] = "first_name_initial_last_name"
            }
        }
        return acc
    },{})
}
const formattedData = formatData(data);

// function to guess the email fom given name,domain and formattedData 
const emailGuesser = (fullName,companyDomain) => {
    if(formattedData[companyDomain]){
        if(formattedData[companyDomain] === "first_name_last_name"){
            const name = fullName.toLowerCase().split(' ').join('');
            return name + "@" + companyDomain
        }
        else if(formattedData[companyDomain] === "first_name_initial_last_name"){
            const name = fullName.split(" ")[0].charAt(0).toLowerCase() + 
                        fullName.split(" ")[1].toLowerCase();
            return name + "@" + companyDomain
        }
    }
    else{
        return null
    }  
}

module.exports = {emailGuesser};