import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL as string;

interface RegisterRequestData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address: string;
}

interface LoginRequestData {
  email: string;
  password: string;
}


export interface OtpRequestData {

  otp: string;

  email: string;

}


interface ApiResponse<T> {
  success: never;
  data: T;
  message: string;
}

export const registerUser = async (data: RegisterRequestData) => {
  return axios.post<ApiResponse<{ token: string }>>(
    `${API_URL}/api/v1/auth/register`,
    data
  );
};

export const loginUser = async (data: LoginRequestData) => {
  return axios.post<ApiResponse<{ token: string }>>(
    `${API_URL}/api/v1/auth/login`,
    data
  );
};

export const verifyOtp = async (data: OtpRequestData) => {
  return axios.post<ApiResponse<{ message: string }>>(
    `${API_URL}/api/v1/auth/verify`,
    data
  );
};
