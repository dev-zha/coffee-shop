import { APP_NAME } from "@/constants/constants";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
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
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="mx-auto">
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
