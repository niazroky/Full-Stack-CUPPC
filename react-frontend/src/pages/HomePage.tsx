// src/pages/HomePage.tsx
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Welcome to the Physics Programming Club</h1>
    <Link to="/register/student">Join us as a Student</Link><br></br> <br></br>
    <Link to="/register/teacher">Join us as a Teacher</Link>
  </div>
);

export default HomePage;
