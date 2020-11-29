import React from "react";
import ActiveLink from './ActiveLink'

const GetInTouch = () => {
  return (
    <div className="getintouch">
      <p className="getintouch-header">How can we help you?</p>
      <ActiveLink href="/contact">
      <p className="getintouch-text">
          <span className="getintouch-link">Get in touch</span>
          with us
          </p>
          </ActiveLink>

      <style jsx>
        {`
          .getintouch {
            background-color: #fffa46;
            padding: 4.5rem 3.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .getintouch-header {
            font-weight: 500;
            font-size: 3rem;
            color: #333333;
            margin-bottom: 1.2rem;
          }
          .getintouch-text {
            font-size: 2rem;
            color: #4f4f4f;
          }
          .getintouch-link {
            text-decoration: underline;
            color: #4f4f4f;
            padding-right: 5px;
          }
        `}
      </style>
    </div>
  );
};

export default GetInTouch;
