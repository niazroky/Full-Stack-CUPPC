// src/components/AuthForm.tsx
import { useState } from 'react';

interface AuthFormProps {
  onSubmit: (data: { [key: string]: string }) => void;
  fields: string[];
  buttonText: string;
}

const AuthForm = ({ onSubmit, fields, buttonText }: AuthFormProps) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field}>
          <label>{field}</label>
          <input type="text" name={field} onChange={handleChange} required />
        </div>
      ))}
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default AuthForm;
