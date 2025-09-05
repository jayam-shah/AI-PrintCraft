import { Printer } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Printer className="text-primary text-2xl" />
              <h3 className="text-xl font-bold">PrintCraft</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Create stunning print materials with our AI-powered design tools and professional printing services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-facebook">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-twitter">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-instagram">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.346-1.24-.652-.56-1.051-1.297-1.051-2.196c0-1.759 1.424-3.183 3.183-3.183c.652 0 1.297.196 1.759.49c-.49-.945-.784-2.196-.784-3.641c0-3.641 2.938-6.579 6.579-6.579c3.641 0 6.579 2.938 6.579 6.579c0 1.445-.294 2.696-.784 3.641c.462-.294 1.107-.49 1.759-.49c1.759 0 3.183 1.424 3.183 3.183c0 .899-.399 1.636-1.051 2.196c-.898.75-2.049 1.24-3.346 1.24H8.449z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-linkedin">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-banners">Banners</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-leaflets">Leaflets</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-posters">Posters</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-business-cards">Business Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-help">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-contact">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-shipping">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-returns">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-about">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-careers">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-privacy">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PrintCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
