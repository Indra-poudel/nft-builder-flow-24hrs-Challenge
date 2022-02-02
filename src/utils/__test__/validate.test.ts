import { isValidEmail, isValidPhoneNo } from "../validate";

test("isValidEmail should return false for inValid email address", () => {
  const isEmailValid = isValidEmail("isfaf.com@,com");
  expect(isEmailValid).toBeFalsy();
});

test("isValidEmail should return true for valid email address", () => {
  const isEmailValid = isValidEmail("abcdef@gmail.com");
  expect(isEmailValid).toBeTruthy();
});

test("isValidPhoneNo should return false for Invalid Phone no", () => {
  const isPhoneNoValid = isValidPhoneNo("123E459");
  expect(isPhoneNoValid).toBeFalsy();
});

test("isValidPhoneNo should return true for valid Phone no", () => {
  const isPhoneNoValid = isValidPhoneNo("(123) 456-7890");
  expect(isPhoneNoValid).toBeTruthy();
});
