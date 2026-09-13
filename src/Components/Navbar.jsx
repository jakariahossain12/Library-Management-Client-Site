
import { FiSearch, FiShoppingCart, FiMenu, FiPhone } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-4 lg:px-12 border-b">
      {/* Left: Mobile Menu & Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FiMenu className="h-5 w-5" />
          </label>
        </div>
        <a className="text-xl font-bold tracking-wider flex items-center gap-1">
          <span className="font-extrabold">BOOKSHELF.</span>
        </a>
      </div>

      {/* Center: Search Bar */}
      <div className="navbar-center hidden md:flex w-1/3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search your book here"
            className="input input-bordered w-full pl-10 rounded-full bg-slate-50 text-sm focus:outline-none"
          />
          <FiSearch className="absolute left-3.5 top-3.5 text-gray-400" />
        </div>
      </div>

      {/* Right: Phone & Cart */}
      <div className="navbar-end gap-4">
        <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-600">
          <FiPhone className="text-base" />
          <span>0123456789</span>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FiShoppingCart className="h-5 w-5" />
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;