import React from "react";

const InsightHero = () => {
  return (
    <div  className="insight-image-wrapper card">
      <div className="insighthero-image">
      
      <div className="insighthero-details-wrapper card">
        <h5 className="insighthero-details-header">Changes in Workplace</h5>
  {/*<p className="insighthero-details-date">May 20, 2020</p>*/}
        <p className="insighthero-details-text">
        Companies are having to work differently during these times, with the health and wellbeing of colleagues and employees a high priority for many.
        To monitor the health of Oil and Gas workers before they begin their shift offshore, British oil company BP partnered with a software company to create an online hub for workers to input their own temperature readings and symptoms twice a day to make sure they’re fit to work. Now, with the software a success, they have made the code freely available for other companies to build similar systems.
        Whilst the online hub relies on the continued input of the workers, it is hoped that software like this will not only help reduce the risk of outbreaks of coronavirus but also will be able to identify those displaying symptoms and get them treatment quicker.
        Source: Orion Group
        </p>
      </div>
      
      
      
      </div>
      

      <style jsx>{`
      .insight-image-wrapper{
        height: 90vh;
      }
        .insighthero-image {
          width: 100%;
          height: 100%;
          min-width: 100%;
          min-height: 100%;
          position: relative;
          
        }
        .insighthero-image::before{
          background: url("/InsightHero.png") no-repeat;
          background-size: cover;
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
        }
        .insighthero-details-wrapper {
          background-color: #2e2e38;
          padding: 2rem 1.3rem 1rem;
          display: flex;
          flex-direction: column;
          border-radius: 0.2rem;
          width: 90%;
          height: auto;
          position: absolute;
          bottom: 10%;
          transform: translate(10px, 10px);
          border-radius: .5rem;
          
        }
        .insighthero-details-header {
          color: #fffa46;
          font-size: 1.8rem;
          margin-bottom: 0.7rem;
        }
        .insighthero-details-date {
          color: #c0c0c0;
          font-size: 1rem;
          margin-bottom: 3rem;
        }
        .insighthero-details-text {
          font-size: 1.4rem;
          color: #c3c3c3;
          line-height: 150%;
        }
      `}</style>
      <style jsx>{`
      @media(min-width: 620px){
        .insighthero-details-wrapper {
          margin-top: 3rem;
          padding: 2.7rem 1.3rem 1rem;
          border-radius: 0.2rem;
          width: 50%;
          height: auto;
          
        }
      }
      @media(min-width:960px){

        .insight-image-wrapper{
          height: initial;
          width: 40%;
        }
  
        .insighthero-details-wrapper{
          width: 70%;
          height: auto;
          min-height: 36rem;
          
        }
        .insighthero-image::before{
          z-index: 10;
        }
        .insighthero-details-wrapper {
          z-index: 15;
        }
      }
      
      `}</style>
    </div>
  );
};

export default InsightHero;
