import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
function Login() {
  const initialState={ mail: '', password: '' };
  const navigate=useNavigate();
  const [form, setForm] = useState(initialState);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/login', form);
      if (res.data.token) {
        navigate("/home");
      } else {
        alert(res.data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      alert('Login request failed.');
    }

    setForm(initialState);
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100" style={{backgroundImage:'url("/image.png")', backgroundSize: 'cover' ,
          backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <form className="d-flex flex-column gap-4 p-5 border rounded-3 shadow  bg-white" style={{ height: '70vh', width: '30vw'}} onSubmit={handleSubmit}>
          <h3 className="text-center mb-3">Login</h3>
          <input type="text" placeholder="Enter username or mail id" id="username" 
            className="form-control form-control-lg" 
            value={form.mail}
            onChange={e=>setForm({...form,mail:e.target.value})}
          />
          <input type="password" placeholder="Password" id="password" className="form-control form-control-lg"
            value={form.password}
            onChange={e=>setForm({...form,password:e.target.value})}
          />
          <button type='submit' className="btn btn-primary btn-lg w-100">Login</button>
          <Link className='d-inline-flex justify-content-end' to="/passwords/reset">Forgot Password?</Link>
          <span className='mt-2'>Need an account? <Link to="/signup">Signup</Link></span>
        </form>
      </div>
    </>
  );
}

export default Login;
