// src/pages/StudentRegister.tsx
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { registerStudent } from '../services/auth';

const StudentRegister = () => {
  const navigate = useNavigate();

  const handleRegister = async (data: { [key: string]: string }) => {
    try {
      await registerStudent(data);
      navigate('/login/student');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <AuthForm
        fields={['full_name', 'varsity_id', 'email', 'password']}
        onSubmit={handleRegister}
        buttonText="Register"
      />
    </div>
  );
};

export default StudentRegister;
