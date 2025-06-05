//验证密码（大写小写数字，长度不低于6位）
export const validatePassword = (password: string) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
  return re.test(String(password));
};

//验证邮箱是否符合要求
export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
//用户名（大写小写数字，长度不低于4位）
export const validateUsername = (name: string) => {
  const regex = /^[A-Za-z0-9]{4,}$/;
  return regex.test(name);
};
//验证手机号码是否符合要求
export const validatePhone = (phone: string) => {
  const re = /^1[3456789]\d{9}$/;
  return re.test(String(phone));
};
