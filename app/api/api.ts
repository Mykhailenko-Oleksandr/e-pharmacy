import axios, { AxiosError } from "axios";

export type ApiError = AxiosError<{
  error: string;
  response: {
    message: string;
    validation: { body: { message: string } };
  };
}>;

export const api = axios.create({
  baseURL: "https://e-pharmacy-backend-ou16.onrender.com/api",
  withCredentials: true,
});
