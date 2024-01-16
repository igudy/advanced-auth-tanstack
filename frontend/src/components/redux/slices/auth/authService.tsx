import axios, { AxiosResponse } from "axios";

export interface UserData {
  email: string;
  password: string;
}
export interface UserResponseMessage {
  message: string;
}
export interface UserResponse {
  data: any;
  message: UserResponseMessage;
}

// Validate email
export const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const BACKEND_URL: string = import.meta.env.VITE_REACT_APP_BACKEND_URL;
const API_URL: string = `${BACKEND_URL}/api/users/`;

// Register User
const register = async (userData: UserData): Promise<UserResponse> => {
  const response: AxiosResponse<UserResponse> = await axios.post(
    API_URL + "register",
    userData
  );
  return response.data;
};

// Login User
const login = async (userData: UserResponse): Promise<UserResponse> => {
  const response: AxiosResponse<UserResponse> = await axios.post(
    API_URL + "login",
    userData
  );
  return response.data;
};

// Logout User
const logout = async (): Promise<UserResponse> => {
  const response: AxiosResponse<UserResponse> = await axios.get(
    API_URL + "logout"
  );
  return response.data;
};

// Login Status
const loginStatus = async (): Promise<UserResponse> => {
  const response: AxiosResponse<UserResponse> = await axios.get(
    API_URL + "loginStatus"
  );
  return response.data;
};

// Get User
const getUser = async (): Promise<UserResponse> => {
  const response: AxiosResponse<UserResponse> = await axios.get(
    API_URL + "getUser"
  );
  return response.data;
};

// Update User
const updateUser = async (userData: UserData): Promise<UserResponse> => {
  const response: AxiosResponse<UserResponse> = await axios.patch(
    API_URL + "updateUser",
    userData
  );
  // console.log(`Updated code`, response.data);
  return response.data;
};

// Send verification email
const sendVerificationEmail = async (): Promise<UserResponse> => {
  const response: AxiosResponse<UserResponse> = await axios.post(
    API_URL + "sendVerificationEmail"
  );
  return response.data;
};

// Verify User
const verifyUser = async (
  verificationToken: number
): Promise<UserResponseMessage> => {
  try {
    const response: AxiosResponse<UserResponse> = await axios.patch(
      `${API_URL}verifyUser/${verificationToken}`
    );
    const message: UserResponseMessage = response.data.message;
    return message;
  } catch (error) {
    console.error("Error verifying user:", error);
    throw error;
  }
};

// Fix bug for frontend
// Change password
const changePassword = async (
  userData: UserData
): Promise<UserResponseMessage> => {
  const response: AxiosResponse<UserResponse> = await axios.patch(
    API_URL + "changePassword",
    userData
  );
  const message: UserResponseMessage = response.data.message;
  return message;
};

// Forgot password
const forgotPassword = async (
  userData: UserData
): Promise<UserResponseMessage> => {
  const response: AxiosResponse<UserResponse> = await axios.post(
    API_URL + "forgotPassword",
    userData
  );

  const message: UserResponseMessage = response.data.message;
  return message;
};

// Reset password
const resetPassword = async (
  userData: UserData,
  resetToken: number
): Promise<UserResponseMessage> => {
  const response = await axios.patch(
    `${API_URL}resetPassword/${resetToken}`,
    userData
  );
  const message: UserResponseMessage = response.data.message;
  return message;
};

// Get all users
const getUsers = async (): Promise<UserResponse> => {
  const response: AxiosResponse<UserResponse> = await axios.get(
    API_URL + "getUsers"
  );
  return response.data;
};

// Delete user
const deleteUser = async (id: string): Promise<UserResponseMessage> => {
  const response: AxiosResponse<UserResponse> = await axios.delete(
    API_URL + id
  );
  const message: UserResponseMessage = response.data.message;
  return message;
};

// Upgrade user
const upgradeUser = async (
  userData: UserData
): Promise<UserResponseMessage> => {
  const response: AxiosResponse<UserResponse> = await axios.post(
    API_URL + "upgradeUser",
    userData
  );

  const message: UserResponseMessage = response.data.message;
  return message;
};

// Send login code
const sendLoginCode = async (email: UserData): Promise<UserResponseMessage> => {
  const response: AxiosResponse<UserResponse> = await axios.post(
    API_URL + `sendLoginCode/${email}`
  );

  const message: UserResponseMessage = response.data.message;
  return message;
};

// Login with code
const loginWithCode = async (
  code: number,
  email: UserData
): Promise<UserResponse> => {
  const response: AxiosResponse<UserResponse> = await axios.post(
    API_URL + `loginWithCode/${email}`,
    code
  );
  return response.data;
};

// Login with Google
const loginWithGoogle = async (
  userToken: string | number
): Promise<UserResponse> => {
  const response: AxiosResponse<UserResponse> = await axios.post(
    API_URL + "google/callback",
    userToken
  );
  return response.data;
};

export const authService = {
  register,
  login,
  logout,
  loginStatus,
  getUser,
  updateUser,
  sendVerificationEmail,
  verifyUser,
  changePassword,
  forgotPassword,
  resetPassword,
  getUsers,
  deleteUser,
  upgradeUser,
  sendLoginCode,
  loginWithCode,
  loginWithGoogle,
};
