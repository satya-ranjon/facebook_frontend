const emailValidator = (value) =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
export default emailValidator;
