import  { useState } from 'react';
import { Link } from 'react-router';
import { FiUser, FiMail, FiLock, FiArrowLeft, FiShield } from 'react-icons/fi';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('MEMBER'); // default UserRole.MEMBER
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validation matching your schema constraints
    if (username.length < 3 || username.length > 50) {
      setError('Username must be between 3 and 50 characters.');
      return;
    }
    if (firstname.length < 1 || firstname.length > 100) {
      setError('First name is required (max 100 characters).');
      return;
    }
    if (lastname.length < 1 || lastname.length > 100) {
      setError('Last name is required (max 100 characters).');
      return;
    }
    if (password.length < 6 || password.length > 128) {
      setError('Password must be between 6 and 128 characters.');
      return;
    }

    const userData = {
      username,
      email,
      firstname,
      lastname,
      password,
      role,
    };

    console.log(userData);
    
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Back to Home link */}
      
        <div className="max-w-md mx-auto w-full px-6 mb-4">
          <Link
            type="button"
            to={'/'}
            className="flex items-center gap-2 text-sm text-teal-700 hover:text-teal-900 font-medium"
          >
            <FiArrowLeft /> Back to Home
          </Link>
        </div>
      

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h1 className="text-3xl font-extrabold tracking-wider text-slate-800">
          BOOKSHELF<span className="text-teal-700">.</span>
        </h1>
        <h2 className="mt-2 text-xl font-bold text-slate-700">
          Create your account
        </h2>
        <p className="mt-1 text-xs text-gray-500">
          Join our library platform to borrow and manage books.
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 shadow-sm border border-slate-200 rounded-xl sm:px-10">
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-md">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* First Name & Last Name Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="First name"
                  className="input input-bordered w-full text-sm rounded-md focus:outline-none focus:border-teal-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Last name"
                  className="input input-bordered w-full text-sm rounded-md focus:outline-none focus:border-teal-700"
                />
              </div>
            </div>

            {/* Username Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Username (3-50 chars)
              </label>
              <div className="relative">
                <FiUser className="absolute left-3.5 top-3.5 text-gray-400" />
                <input
                  type="text"
                  required
                  minLength={3}
                  maxLength={50}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Unique username"
                  className="input input-bordered w-full pl-10 text-sm rounded-md focus:outline-none focus:border-teal-700"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-3.5 top-3.5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@example.com"
                  className="input input-bordered w-full pl-10 text-sm rounded-md focus:outline-none focus:border-teal-700"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Password (min 6 chars)
              </label>
              <div className="relative">
                <FiLock className="absolute left-3.5 top-3.5 text-gray-400" />
                <input
                  type="password"
                  required
                  minLength={6}
                  maxLength={128}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="input input-bordered w-full pl-10 text-sm rounded-md focus:outline-none focus:border-teal-700"
                />
              </div>
            </div>

            {/* Role Selection Field (Member or Librarian) */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                User Role
              </label>
              <div className="relative">
                <FiShield className="absolute left-3.5 top-3.5 text-gray-400" />
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="select select-bordered w-full pl-10 text-sm rounded-md focus:outline-none focus:border-teal-700"
                >
                  <option value="MEMBER">Member</option>
                  <option value="LIBRARIAN">Librarian</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn bg-teal-700 hover:bg-teal-800 text-white w-full border-none rounded-md mt-4"
            >
              Sign Up
            </button>
          </form>

          {/* Footer note */}
          <div className="mt-6 text-center text-xs text-gray-500">
            Already have an account?{' '}
            <Link
              type="button"
              to={'/login'}
              className="text-teal-700 font-semibold hover:underline bg-transparent border-none cursor-pointer"
            >
              Sign In
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;