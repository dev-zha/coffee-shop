import Title1 from '@/components/shared/typo/Title1';
import Title2 from '@/components/shared/typo/Title2';
import Title3 from '@/components/shared/typo/Title3';

export default function PrivacyPolicyPage() {
  return (
    <div className="text-gray-600 p-8">
      <Title1 className="mb-8">Privacy Policy</Title1>
      <p>
        This Privacy Policy describes how we collect, use, and protect the
        information you provide while using our e-commerce coffee shop app. This
        app is designed for portfolio and testing purposes only, and we are
        committed to ensuring the privacy and security of your personal
        information.
      </p>
      <Title2 className="mt-4 mb-2">Information We Collect</Title2>
      <Title3 className="mb-2">Google Login:</Title3>
      <p>
        Our app allows users to log in using their Google credentials. By doing
        so, the app receives basic information such as your name and email
        address.
      </p>
      <Title3 className="mt-3 mb-2">Local Storage:</Title3>
      <p>
        The app stores data locally in your browser's localStorage for the
        purpose of maintaining user sessions.
      </p>
      <Title2 className="mt-4 mb-2">How We Use Your Information</Title2>
      <p>
        We use the information collected during Google login for authentication
        purposes only. The data stored in the browser's localStorage is used to
        maintain your session within the app.
      </p>
      <Title2 className="mt-4 mb-2">Data Security</Title2>
      <p>
        We are committed to ensuring the security of your information. While we
        use industry-standard security measures to protect your data, please
        note that no method of transmission over the internet or electronic
        storage is 100% secure. Your Google login information is securely
        handled through Google's authentication services.
      </p>
      <Title2 className="mt-4 mb-2">Data Retention and Deletion</Title2>
      <p>
        All data stored in the browser's localStorage will be automatically
        erased when you log out of the app. We do not retain any user data after
        the testing or portfolio demonstration period.
      </p>
      <Title2 className="mt-4 mb-2">Third-Party Services</Title2>
      <p>
        Our app uses Google login for authentication. Please refer to{' '}
        <a href="https://policies.google.com/privacy" target="_blank">
          Google's Privacy Policy
        </a>{' '}
        for more information on how they handle user data.
      </p>
      <Title2 className="mt-4 mb-2">Changes to This Privacy Policy</Title2>
      <p>
        We reserve the right to update or change our Privacy Policy at any time.
        Any changes will be effective immediately upon posting the updated
        Privacy Policy on the app.
      </p>
      <Title2 className="mt-4 mb-2">Contact Us</Title2>
      <p>
        If you have any questions or concerns about our Privacy Policy, please
        contact us at{' '}
        <a
          href="mailto:zawhtetaung21199@gmail.com"
          className="text-primary underline"
        >
          zawhtetaung21199@gmail.com
        </a>
        .
      </p>
      <p>
        This Privacy Policy was last updated on <strong>25 January 2024</strong>
        .
      </p>
    </div>
  );
}
