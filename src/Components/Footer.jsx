import React from 'react';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-10 px-6 lg:px-20 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-700 pb-8 mb-6">
        
        {/* Info 1 */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-slate-700 rounded-lg text-teal-400">
            <FiMail size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-white">Book Information?</h4>
            <p className="text-xs text-slate-400">Please send us an email at support@gmail.com</p>
          </div>
        </div>

        {/* Info 2 */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-slate-700 rounded-lg text-teal-400">
            <FiPhoneCall size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-white">Need Help?</h4>
            <p className="text-xs text-slate-400">Please call us at 0123456789</p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400">
        <span className="font-bold text-white text-base">Bookshelf</span>
        <p>© 2026 All right reserved. Made with love by ThemeAtelier</p>
      </div>
    </footer>
  );
};

export default Footer;