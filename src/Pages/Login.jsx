import { useState } from 'react';
import { Link,useNavigate } from 'react-router';
import { FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate()

  // Get host API from env or fallback to your Render URL
  const HOST_API = 
    import.meta.env?.VITE_HOST_API || 
    'https://library-management-api-9ghg.onrender.com';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    setLoading(true);

    try {
      // OAuth2PasswordRequestForm requires application/x-www-form-urlencoded
      const formData = new URLSearchParams();
      formData.append('username', username);
      formData.append('password', password);

      // NOTE: Update '/auth/token' or '/token' to match your actual FastAPI login/token endpoint
      const response = await fetch(`${HOST_API}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(data.detail || 'Invalid username or password.');
      }

      // Save the bearer token in localStorage (or your auth state)
      if (data.access_token) {
        localStorage.setItem('lm_token', data.access_token);
      }

      if (response.ok){
        navigate('/')
      }


    } catch (err) {
      setError(err.message || 'An error occurred while connecting to the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Optional Back to Home link */}
      
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
          Sign in to your account
        </h2>
        <p className="mt-1 text-xs text-gray-500">
          Access your library dashboard, orders, and saved books.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 shadow-sm border border-slate-200 rounded-xl sm:px-10">
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-md">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Username Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Username
              </label>
              <div className="relative">
                <FiUser className="absolute left-3.5 top-3.5 text-gray-400" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="input input-bordered w-full pl-10 text-sm rounded-md focus:outline-none focus:border-teal-700"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3.5 top-3.5 text-gray-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="input input-bordered w-full pl-10 text-sm rounded-md focus:outline-none focus:border-teal-700"
                />
              </div>
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                <input type="checkbox" className="checkbox checkbox-xs checkbox-accent" />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="text-teal-700 hover:underline font-medium">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn bg-teal-700 hover:bg-teal-800 text-white w-full border-none rounded-md mt-2 flex items-center justify-center"
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Footer note */}
          <div className="mt-6 text-center text-xs text-gray-500">
            Don't have an account?{' '}
            <Link
              type="button"
              to={'/signUp'}
              className="text-teal-700 font-semibold hover:underline bg-transparent border-none cursor-pointer"
            >
              Create an account
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;