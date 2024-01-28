import { Link } from 'react-router-dom';
import PageContainer from '@/components/shared/docs-page/PageContainer';
import DocTitle1 from '@/components/shared/docs-page/DocTitle1';
import DocTitle2 from '@/components/shared/docs-page/DocTitle2';
import DocTitle3 from '@/components/shared/docs-page/DocTitle3';

export default function TermsAndConditions() {
  return (
    <PageContainer>
      <DocTitle1>Terms and Conditions</DocTitle1>
      <DocTitle2>1. Acceptance of Terms</DocTitle2>
      <p>
        By using our e-commerce coffee shop app, you agree to comply with and be
        bound by the following terms and conditions. If you do not agree to
        these terms, please do not use the app.
      </p>
      <DocTitle2>2. Use of the App</DocTitle2>
      <p>
        You agree to use the app for legitimate and lawful purposes only. You
        must not violate any applicable laws or regulations while using the app.
      </p>
      <DocTitle2>3. User Accounts</DocTitle2>
      <p>
        If you create an account with us, you are responsible for maintaining
        the confidentiality of your account information, including your
        password. You agree to accept responsibility for all activities that
        occur under your account.
      </p>
      <DocTitle2>4. Privacy Policy</DocTitle2>
      <p>
        Your use of the app is also governed by our{' '}
        <Link to="/privacy-policy" className="underline">
          Privacy Policy
        </Link>
        . Please review the Privacy Policy to understand how we collect, use,
        and protect your information.
      </p>
      <DocTitle2>5. Limitation of Liability</DocTitle2>
      <p>
        We are not liable for any direct, indirect, incidental, consequential,
        or punitive damages arising out of your use of the app.
      </p>
      <DocTitle2>6. Changes to Terms and Conditions</DocTitle2>
      <p>
        We reserve the right to update or change these Terms and Conditions at
        any time. Any changes will be effective immediately upon posting the
        updated Terms and Conditions on the app.
      </p>
      <DocTitle2>7. Use of Images</DocTitle2>
      <p>
        We would like to acknowledge that certain images used in this app are
        sourced from Starbucks and Flaticon. These images are subject to the
        respective terms and conditions of Starbucks and Flaticon.
      </p>
      <DocTitle3>Starbucks Images:</DocTitle3>
      <p>
        Images sourced from Starbucks are the property of Starbucks Corporation
        and are used for portfolio and testing purposes only. We do not claim
        ownership of these images.
      </p>
      <DocTitle3>Flaticon Icons:</DocTitle3>
      <p>
        Icons sourced from Flaticon are subject to the licensing terms provided
        by Flaticon. These icons are used for portfolio and testing purposes,
        and we do not claim ownership of the icons.
      </p>
      <DocTitle2>8. Intellectual Property</DocTitle2>
      <p>
        All intellectual property rights related to the content of this app,
        including images, logos, and icons, belong to their respective owners.
        Unauthorized use or reproduction of these materials is prohibited.
      </p>

      <DocTitle2>9. Contact Us</DocTitle2>
      <p>
        If you have any questions or concerns about these Terms and Conditions,
        please contact us at{' '}
        <a
          href="mailto:zawhtetaung21199@gmail.com"
          className="text-primary underline"
        >
          zawhtetaung21199@gmail.com
        </a>
        .
      </p>
      <p>
        These Terms and Conditions were last updated on{' '}
        <strong>25 January 2024</strong>.
      </p>
    </PageContainer>
  );
}
