// src/pages/TeacherRegister.tsx
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { registerTeacher } from '../services/auth';

const TeacherRegister = () => {
  const navigate = useNavigate();

  const handleRegister = async (data: { [key: string]: string }) => {
    try {
      await registerTeacher(data);
      navigate('/login/teacher');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h2>Teacher Registration</h2>
      <AuthForm
        fields={['full_name', 'email', 'password']}
        onSubmit={handleRegister}
        buttonText="Register"
      />
    </div>
  );
};

export default TeacherRegister;
