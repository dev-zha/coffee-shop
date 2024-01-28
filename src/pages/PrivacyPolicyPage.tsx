import PageContainer from '@/components/shared/docs-page/PageContainer';
import DocTitle1 from '@/components/shared/docs-page/DocTitle1';
import DocTitle2 from '@/components/shared/docs-page/DocTitle2';
import DocTitle3 from '@/components/shared/docs-page/DocTitle3';

export default function PrivacyPolicyPage() {
  return (
    <PageContainer>
      <DocTitle1>Privacy Policy</DocTitle1>
      <p>
        This Privacy Policy describes how we collect, use, and protect the
        information you provide while using our e-commerce coffee shop app. This
        app is designed for portfolio and testing purposes only, and we are
        committed to ensuring the privacy and security of your personal
        information.
      </p>
      <DocTitle2>Information We Collect</DocTitle2>
      <DocTitle3>Google Login:</DocTitle3>
      <p>
        Our app allows users to log in using their Google credentials. By doing
        so, the app receives basic information such as your name and email
        address.
      </p>
      <DocTitle3>Local Storage:</DocTitle3>
      <p>
        The app stores data locally in your browser's localStorage for the
        purpose of maintaining user sessions.
      </p>
      <DocTitle2>How We Use Your Information</DocTitle2>
      <p>
        We use the information collected during Google login for authentication
        purposes only. The data stored in the browser's localStorage is used to
        maintain your session within the app.
      </p>
      <DocTitle2>Data Security</DocTitle2>
      <p>
        We are committed to ensuring the security of your information. While we
        use industry-standard security measures to protect your data, please
        note that no method of transmission over the internet or electronic
        storage is 100% secure. Your Google login information is securely
        handled through Google's authentication services.
      </p>
      <DocTitle2>Data Retention and Deletion</DocTitle2>
      <p>
        All data stored in the browser's localStorage will be automatically
        erased when you log out of the app. We do not retain any user data after
        the testing or portfolio demonstration period.
      </p>
      <DocTitle2>Third-Party Services</DocTitle2>
      <p>
        Our app uses Google login for authentication. Please refer to{' '}
        <a href="https://policies.google.com/privacy" target="_blank">
          Google's Privacy Policy
        </a>{' '}
        for more information on how they handle user data.
      </p>
      <DocTitle2>Changes to This Privacy Policy</DocTitle2>
      <p>
        We reserve the right to update or change our Privacy Policy at any time.
        Any changes will be effective immediately upon posting the updated
        Privacy Policy on the app.
      </p>
      <DocTitle2>Contact Us</DocTitle2>
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
    </PageContainer>
  );
}
