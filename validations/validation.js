const validatePassword = (password) => {
  const pattern =
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,25}$/.test(password);
  return pattern;
};

const validateEmail = (email) => {
  const pattern =
  
    !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      email
    );
  return pattern;
};

const validateUsername = (username) => {
  const pattern = !/^(?=[a-zA-Z0-9._]{8,25}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(
    username
  );
  return pattern;
};

const validatePhone=(mobile)=>{
  const pattern=!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(mobile);
  return pattern
}
const validateLinkWebsite=(website)=>{
  const pattern=!/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(website)
  return pattern
}
validatePhone
module.exports = { 
  validateEmail, 
  validatePassword, 
  validateUsername,
  validatePhone, 
  validateLinkWebsite,
};
