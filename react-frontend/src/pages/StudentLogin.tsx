// src/pages/StudentLogin.tsx
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { loginStudent } from '../services/auth';

const StudentLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async (data: { [key: string]: string }) => {
    try {
      const response = await loginStudent(data);
      localStorage.setItem('token', response.data.access);
      navigate('/success/student');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2>Student Login</h2>
      <AuthForm fields={['varsity_id', 'password']} onSubmit={handleLogin} buttonText="Login" />
    </div>
  );
};

export default StudentLogin;
