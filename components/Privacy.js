import React from "react";

const PrivacyPage = () => {
  return (
    <div className="privacy-container">
      <h2 className="privacy-header">Privacy Policies</h2>
      <h4 className="introduction-header">INTRODUCTION</h4>
      <p className="introduction-content">
        This privacy policy sets out how HiPPOs and ZEbRAs("thehippoz")and its
        subsidiaries (together referred to as "the Group") uses and protects any
        information that you give when you use https://relieve.careers ("the
        website" or "the site")
        <br />
        <br />
        thehippoz is committed to ensuring that your privacy is protected. In
        the event that we ask you to provide certain information which you can
        be identified by when using this website then you can be assured that it
        will only be used in accordance with this Privacy Policy. thehippoz may
        change this policy from time to time by updating this page. You should
        check this page from time to time to ensure that you are happy with any
        changes.
        <br />
        <br />
        This policy is effective from 20th May, 2020
      </p>

      <p className="whatwecollect-header">WHAT WE COLLECT</p>
      <p>We may collect the following information but not limited to:</p>
      <ol type="1">
        <li>
          <p>name and job title</p>
        </li>
        <li>
          <p>contact information including email address</p>
        </li>
        <li>
          <p>
            demographic information such as postcode, preferences and interests
          </p>
        </li>
        <li>
          <p>other information relevant to customer surveys and/or offers</p>
        </li>
      </ol>

      <h4 className="informationusage-header">
        WHAT WE DO WITH THE INFORMATION WE GATHER
      </h4>
      <p>
        We require this information to understand your needs and provide you
        with better service, and in particular for the following reasons:
      </p>
      <ol type="1">
        <li>Internal record keeping</li>
        <li>We may use the information to improve our products and services</li>
        <li>
          From time to time, we may also use your information to contact you for
          market research purposes
        </li>
        <li>We may contact you by email, phone or post</li>
        <li>
          We may use the information to customise the website according to your
          interests
        </li>
        <li>
          We may periodically send promotional emails about new products,
          special offers or other information which we think you may find
          interesting using the email address which you have provided. If you do
          not want to receive these emails, you may opt out by clicking on the
          unsubscribe link in our promotional emails
        </li>
      </ol>
      <h4>SECURITY</h4>
      <p style={{ marginBottom: "5rem" }}>
        We are committed to ensuring that your information is secure. In order
        to prevent unauthorised access or disclosure, we have put in place
        suitable physical, electronic and managerial procedures such as to
        safeguard and secure the information we collect online.
      </p>
      <h4>HOW WE USE COOKIES</h4>
      <p style={{ marginBottom: "5rem" }}>
        We are committed to ensuring that your information is secure. In order
        to prevent unauthorised access or disclosure, we have put in place
        suitable physical, electronic and managerial procedures such as to
        safeguard and secure the information we collect online. A cookie is a
        small file which asks permission to be placed on your computer's hard
        drive. Once you agree, the file is added and the cookie helps analyse
        web traffic or lets you know when you visit a particular site. Cookies
        allow web applications to respond to you as an individual. The web
        application can tailor its operations to your needs, likes and dislikes
        by gathering and remembering information about your preferences.
        <br />
        We use traffic log cookies to identify which pages are being used. This
        helps us analyse data about web page traffic and improve our website in
        order to tailor it to customer needs. We only use this information for
        statistical analysis purposes and then the data is removed from the
        system. Overall, cookies help us provide you with a better website, by
        enabling us to monitor which pages you find useful and which you do not.
        A cookie in no way gives us access to your computer or any information
        about you, other than the data you choose to share with us. You can
        choose to accept or decline cookies. Most web browsers automatically
        accept cookies, but you can usually modify your browser setting to
        decline cookies if you prefer. However, this may prevent you from taking
        full advantage of the website.
      </p>
      <h4>LINKS TO OTHER WEBSITE</h4>
      <p style={{ marginBottom: "5rem" }}>
        Our website may contain links to other websites of interest. However,
        once you have used these links to leave our site, you should note that
        we do not have any control over that other website. Therefore, we cannot
        be responsible for the protection and privacy of any information which
        you provide whilst visiting such sites and such sites are not governed
        by this privacy statement. You should exercise caution and look at the
        privacy statement applicable to the website in question.
      </p>
      <h4>YOUR INFORMATION WITH US</h4>
      <p style={{ marginBottom: "5rem" }}>
        If you believe that any information we are holding on you is incorrect
        or incomplete, email us as soon as possible, at the address below. We
        will promptly correct any information found to be incorrect.Persons
        under the age of 18 Our websiteis not intended for persons under 18
        years of age. No one under age 18 may provide any personal information
        to or on the site. We do not knowingly collect personal information from
        persons under 18. If you are under 18, do not use or provide any
        information on this website or on or through any of its features, make
        any purchases through the site, use any of the interactive or public
        comment features of this site or provide any information about yourself
        to us, including your name, address, telephone number, e-mail address or
        any screen name or user name you may use. If we learn we have collected
        or received personal information from a person under 18, we will delete
        that information. If you believe we might have any information from or
        about a child under 18, please contact us.
      </p>
      <h4>YOUR DETAILS WITH US</h4>
      <p className="yourdetails">
        The full name of thehippoz is HiPPOs and ZEbRAs HiPPOs and ZEbRAs is
        registered in Nigeria You can contact us by sending an email to
        contact@relieve.careers.
      </p>
      <style jsx>{`
        .privacy-container {
          padding: 5.2rem 2.5rem 3.8rem;
          background-color: var(--primary-white);
        }
        .privacy-container p {
          font-size: 2rem;
          line-height: 180%;
        }

        .privacy-container ol {
          margin-bottom: 5rem;
        }
        .privacy-container ol li {
          font-size: 2rem;
          list-style-type: decimal;
          text-decoration: initial;
          line-height: 180%;
        }
        h4 {
          font-weight: bold;
          font-size: 20px;
          line-height: 150%;
          color: #000;
          margin-bottom: 2.5rem;
        }
        .privacy-header {
          font-weight: 500;
          font-size: 40px;
          line-height: 150%;
          color: var(--primary-black);
          margin-bottom: 5.1rem;
        }
        .introduction-header {
          font-weight: bold;
          font-size: 20px;
          line-height: 150%;
          color: #000;
          margin-bottom: 2.5rem;
        }
        .introduction-content {
          margin-bottom: 5rem;
        }
        .whatwecollect-header {
          font-weight: bold;
          margin-bottom: 2.5rem;
        }
        .informationusage-header {
          font-weight: bold;
          font-size: 20px;
          line-height: 150%;
          color: #000;
          margin-bottom: 2.5rem;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 1200px) {
          .privacy-container {
            padding: 11.2rem 11.5rem 8.8rem 10rem;
          }
          .yourdetails {
            text-align: left;
            width: 45rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPage;
