import { Link } from 'react-router-dom';
import { APP_NAME } from '@/constants/constants';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="w-full mx-auto">
        <div className="w-full max-w-screen-lg md:flex md:justify-between p-4 py-6 lg:py-8 mx-auto">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center text-primary">
              <img
                src="/images/app-logo.svg"
                className="h-8 me-3"
                alt="App Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                {APP_NAME}
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-primary uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-primary uppercase">
                Legal
              </h2>
              <ul className="text-gray-500">
                <li className="mb-4">
                  <Link to="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-200" />
        <div className="p-2 mx-auto">
          <p className="text-sm text-gray-500 text-center">
            {'© 2024 '}
            <Link to="/" className="hover:underline">
              {APP_NAME}
            </Link>
            {'. All Rights Reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
