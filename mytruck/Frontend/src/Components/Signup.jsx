import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const initialState={ name: '', mail: '', password: '' };
  const [form, setForm] = useState(initialState);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/signup', form);
      alert('Signup successful!');
    } catch (err) {
      console.error(err);
      alert('Signup failed.');
    }
    setForm(initialState);
  }

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{
          backgroundImage: 'url("/image.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column gap-4 p-5 border rounded shadow bg-white"
          style={{ width: '30vw', height: '70vh' }}
        >
          <h3 className="text-center mb-3">Signup</h3>

          <input
            type="text"
            placeholder="Name"
            className="form-control form-control-lg"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Enter mail id"
            className="form-control form-control-lg"
            value={form.mail}
            onChange={(e) => setForm({ ...form, mail: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="form-control form-control-lg"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button type="submit" className="btn btn-primary btn-lg w-100">
            Signup
          </button>

          <span className="mt-5">
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default Signup;
