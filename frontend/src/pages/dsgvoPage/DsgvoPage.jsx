import MainLayout from "../../layout/MainLayout";
import "./DsgvoPage.css";

export default function DsgvoPage() {
  return (
    <>
      <MainLayout>
        <div className="section-white">
          <h1>Data protection and security</h1>
          At IntimateCode, we take your privacy and data security seriously. Our
          commitment is to ensure that your personal information is handled with
          the utmost care and in compliance with data protection laws. When you
          shop with us, you can trust that your details are safe and secure. We
          collect only the necessary information required for order processing
          and communication. Your data is encrypted using industry-standard SSL
          (Secure Socket Layer) technology, providing a secure online shopping
          environment.
          <br />
          <br />
          Our servers are hosted in secure data centers, and access to your
          information is restricted to authorized personnel only. We do not sell
          or share your personal data with third parties for marketing purposes.
          Your trust is vital to us, and we strive to maintain the highest
          standards of data protection. You have the right to access, modify, or
          delete your personal information at any time. Our privacy policy
          outlines these rights and details how we handle your data. By choosing
          IntimateCode, you choose a secure and transparent shopping experience
          where your privacy is a top priority.
          <br />
          <br />
          <hr></hr>
          <h1>Legal notice</h1>
          Welcome to IntimateCode! This legal notice provides important
          information about our website and services.
          <ul>
            <li>
              IntimateCode is owned and operated by Viki and Kata, we are not a
              registered business.
            </li>

            <li>
              Contact Information:
              <p className="blue"> contact@initimatecode.at</p>
            </li>
            <li>
              Website Usage: By accessing and using our website, you agree to
              comply with our terms and conditions.
            </li>
          </ul>
          <br />
          <br />
          Unauthorized use or reproduction is strictly prohibited. For any legal
          inquiries or concerns, please contact us at
          <p className="blue"> contact@initimatecode.at</p>. Thank you for
          choosing IntimateCode!
          <br />
          <br />
          <div className="pink-bg">
            Disclaimer: The products shown are not for sale. IntimateCode was
            created as a portfolio project.
          </div>
        </div>
      </MainLayout>
    </>
  );
}
