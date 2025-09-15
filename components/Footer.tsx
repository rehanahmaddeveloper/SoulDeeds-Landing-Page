
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-soul-purple text-purple-100">
      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Logo & About */}
          <div>
            <img src="/logo-white.png" alt="Soul Deeds Logo" className="h-10 w-auto mb-6" />
            <p className="max-w-xs text-sm leading-relaxed">
              Soul Deeds is a community-driven platform designed to bring people together through shared values, meaningful projects, and a purpose-led approach.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              <span className="text-white">|</span>
              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
              </a>
              <span className="text-white">|</span>
              <a href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.794 4.654-.737.201-1.514.243-2.296.088.606 1.883 2.368 3.256 4.464 3.294-1.711 1.341-3.873 2.144-6.224 2.144-.404 0-.802-.023-1.195-.069 2.203 1.408 4.822 2.228 7.601 2.228 9.122 0 14.11-7.558 14.11-14.111v-.636c.969-.692 1.815-1.56 2.487-2.573z"/></svg>
              </a>
              <span className="text-white">|</span>
              <a href="#" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Column 3: Newsletter */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">NEWS LETTER</h3>
            <p className="mb-4">Subscribe our newsletter to get our latest update & news</p>
            <form>
              <div className="flex bg-white rounded-lg p-1 border border-purple-300/50">
                <input type="email" placeholder="Your email address" className="w-full bg-transparent px-3 py-1.5 text-gray-800 placeholder-gray-500 text-sm focus:outline-none" />
                <button type="submit" aria-label="Subscribe" className="bg-soul-purple p-2.5 rounded-md hover:bg-soul-purple-dark transition-colors flex-shrink-0">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                   </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-purple-200/20 pt-8 mt-12 text-center text-sm text-purple-200/80">
          <p>&copy; Copyright 2025. Soul Deeds. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
