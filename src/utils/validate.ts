export const isValidPhoneNo = (phoneNo: string) => {
  const phoneNoReg = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;
  return phoneNo.match(phoneNoReg);
};

export const isValidEmail = (email: string) => {
  const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(emailReg);
};
