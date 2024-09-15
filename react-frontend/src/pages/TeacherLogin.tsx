// src/pages/TeacherLogin.tsx
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { loginTeacher } from '../services/auth';

const TeacherLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async (data: { [key: string]: string }) => {
    try {
      const response = await loginTeacher(data);
      localStorage.setItem('token', response.data.access);
      navigate('/success/teacher');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2>Teacher Login</h2>
      <AuthForm fields={['email', 'password']} onSubmit={handleLogin} buttonText="Login" />
    </div>
  );
};

export default TeacherLogin;
