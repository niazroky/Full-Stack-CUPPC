// src/services/auth.ts
import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Your Django API URL

// Register Student
export const registerStudent = async (formData: any) => {
  return await axios.post(`${API_URL}/api/register/student/`, formData);
};

// Register Teacher
export const registerTeacher = async (formData: any) => {
  return await axios.post(`${API_URL}/api/register/teacher/`, formData);
};

// Login Student
export const loginStudent = async (formData: any) => {
  return await axios.post(`${API_URL}/api/login/student/`, formData);
};

// Login Teacher
export const loginTeacher = async (formData: any) => {
  return await axios.post(`${API_URL}/api/login/teacher/`, formData);
};
