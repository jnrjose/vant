import React from "react";
import { useWindowSize } from "react-use";

const insightData = [
  {
    image: "/insightJobSecurity.png",
    header: "Job Hunting tips",
    text: `Dear Jobseeker,

        Here's our today's top tip.
        
        When it comes to job hunting, your CV is paramount that even the smallest details count. Get it right, and you’ll have an interview in no time, but get it wrong, and you may face rejection after rejection.
        
        One thing oftentimes overlook and counted as irrelevant by jobseekers is the CV "TITLE"
        
        Recruiters receive lots of applications with CV titled "MY CV"
        
        In applying for a job what is the title of your CV?
        
        "MY CV" is any body's CV until it is opened.
        
        So to what use is having a well-written CV only to have it discarded and unopened because it wasn't tilted properly?
        
        Don't let your application be lost with the junks, therefore, to distinguish yourself and not get lost in the crowd of job seekers, give proper titles your documents before sending in an application.
        
        This could be the hindering factor between you and your dream job.
        
        Find this useful? Do your bit and share with a friend`,
  },
  {
    image: "/insightGraduateAdvice.png",
    header: "Job Advice for New graduates",
    text: `Dear Young professionals and fresh graduates,

        Being a new graduate can be exciting, as one chapter of life is closing and another is just beginning. in many ways finding post-grad work is a job in itself
        
        Taking into account the peculiarities of today's job market, as a fresh graduate seeking job opportunities It's not enough to just understand how to identify opportunities, it is imperative to also know how to maximize them.
        
        Here are some tips from a top Talent Acquisition Specialist
        
        ◉Understand who you are - self-awareness
        ◉Put yourself out there, let people know what your interests are.
        ◉Do not underestimate the power of networking.
        ◉Let your CV be powerful enough to introduce you.
        ◉Be prepared to defend your CV at the interview.`,
  },
  {
    image: "/insightDigitals.png",
    header: "Impact of Digital technology",
    text: `Digital technologies have risen to prominence as a critical determinant of economic growth, national security, and international competitiveness. It affects everything from resource allocation to income distribution and growth.

        Hence, Tech professionals have become one of the most in-demand professionals of today’s labor force.
        
        According to estimated numbers, 60% of organizations today prefer to hire professionals with cloud expertise.
        
        Technology keeps evolving, and so should you. Never stop developing yourself.`,
  },
  {
    image: "/insightSuccesss.png",
    header: "Test of Success",
    text: `The true test of success comes when you run up against challenges or roadblocks in your path.

        Every successful person did not attain their success without first overcoming one challenge or the other
        
        In this new week don't let your setbacks get you down. When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.
        
        Have a blessed week.
        
        Stay Safe!`,
  },
  {
    image: "/insightWorkplace.png",
    header: "Changes in Workplace",
    text: `Companies are having to work differently during these times, with the health and wellbeing of colleagues and employees a high priority for many.

        To monitor the health of Oil and Gas workers before they begin their shift offshore, British oil company BP partnered with a software company to create an online hub for workers to input their own temperature readings and symptoms twice a day to make sure they’re fit to work. Now, with the software a success, they have made the code freely available for other companies to build similar systems.
        
        Whilst the online hub relies on the continued input of the workers, it is hoped that software like this will not only help reduce the risk of outbreaks of coronavirus but also will be able to identify those displaying symptoms and get them treatment quicker.
        
        Source: Orion Group`,
  },
  {
    image: "/insightPatience.png",
    header: "Benefit of waiting",
    text: `Waiting is one of the prevalent parts of human psychology.

        As humans, many of us think to wait until our "favorable situation" happen. And for that reason, we always prefer for the right time to come.
        
        While this might seem like a logical argument, it's actually the biggest ally of procrastination.
        
        Its a new week - Do not wait to put those dreams to actions, for there is no such thing as the right time, so start where you are, and work with whatever tools you may have at your command, and you'll find better tools as you go along.
        
        Happy New Week!
        
        Stay Safe & Healthy!`,
  },
];

const featuredData = [
  {
    date: "May 18, 2020",
    title: "Job Hunting tips",
  },
  {
    date: "May 25, 2020",
    title: "Job Advice for New graduates",
  },
  {
    date: "June 3, 2020",
    title: "Impact of Digital technology",
  },
  {
    date: "June 17, 2020",
    title: "Test of Success",
  },
  {
    date: "June 24, 2020",
    title: "Changes in Workplace",
  },
  {
    date: "July 1, 2020",
    title: "Benefit of waiting",
  },
];

const Insight = () => {
  const { width } = useWindowSize();
  return (
    <div className="insight-container">
      {width >= "1024" ? (
        <img src={"/desktopInsightHero.png"} alt="insight pics" />
      ) : (
        <img src={"/mobileInsight.png"} alt="insight pics" />
      )}
      <div className="insight-header-container">
        <h5 className="insight-header">Insights</h5>
        <p className="insight-text">
          We give you tips and advice on how to standout in the workplace.
        </p>
      </div>
      <section className="grid-section">
        <div className="insight-featured-container">
          <p className="insight-featured-header">Featured</p>
          {featuredData.map((item, index) => (
            <div className="insight-article-container" key={index}>
              <p className="insight-article-number">{`0${index + 1}`}</p>
              <div className="insight-article-snippet">
                <p className="insight-article-date">{item.date}</p>
                <p className="insight-article-text">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="insightpics-big">
          <div className="insight-pics-containers">
            <img src="/desktopinsightpics.png" alt="desktopinsightpics" />
            <p className="insightpics-header">Job Security</p>
            <p className="insightpics-text">
              Tips on Improving your job security post - COVID from a top Talent
              Acquisition Specialist.
              <br />
              <br />
              Many organizations continue to grapple with revenue challenges due
              to the growing pandemic, Most people have experienced job losses,
              pay cuts, and delay in salary payment.
              <br />
              Now is not the right time to give up, the best gift to give to
              yourself right now is the gift of self-discovery and
              self-improvement.
              <br />
              Here are some tips which could be helpful in increasing your worth
              and enhancing job security during this era;
              <ul style={{ color: "var(--primary-grey)" }} type="1">
                <li>Be passionate about adding value</li>
                <li>
                  Show resilience and the capacity to keep pushing to do more
                </li>
                <li>Improve your networking skills</li>
                <li>
                  Demonstrate innovative thinking, every employer appreciates
                  problem solvers
                </li>
                <li>Reflect on skills that can help you be the best</li>
              </ul>
            </p>
          </div>
        </div>

        {insightData.map((data, index) => (
          <div className="insight-pics-container" key={index}>
            <div className="pics-insight">
              <img src={data.image} alt="insightpics" />
            </div>
            <p className="insightpics-header">{data.header}</p>
            <p className="insightpics-text">{data.text}</p>
          </div>
        ))}
      </section>
      <style jsx>{`
        .insight-container {
          margin: 4.6rem 1.9rem 4rem;
        }
        .insight-container img {
          object-fit: contain;
        }
        .insight-header-container {
          margin: 2.9rem 0 4rem;
          border-bottom: 0.5px solid #2e2e38;
          padding-bottom: 4rem;
        }
        .pics-insight {
          width: 31rem;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.6rem;
        }
        .insight-header {
          font-size: 1.8rem;
          color: var(--primary-color);
          line-height: 18px;
          margin-bottom: 2.1rem;
        }
        .insight-text {
          color: var(--primary-grey);
          font-size: 1.8rem;
          font-weight: 300;
          line-height: 150%;
        }
        .insight-featured-header {
          color: #c3c3c3;
          font-size: 2.4rem;
          margin-bottom: 1.1rem;
        }
        .insight-article-container {
          padding-top: 2rem;
          padding-bottom: 2.7rem;
          display: flex;
          color: #c3c3c3;
          border-bottom: 1px solid #2e2e38;
        }
        .insight-article-snippet {
          margin-left: 2rem;
        }
        .insight-article-number {
          color: #adaaaa;
          font-size: 2.4rem;
          line-height: 150%;
          margin-left: 1rem;
          align-self: center;
        }

        .insight-article-date {
          font-size: 1.6rem;
          line-height: 150%;
          margin-bottom: 0.5rem;
        }
        .insight-article-text {
          color: var(--primary-grey);
          font-size: 1.6rem;
        }

        .insight-pics-containers,
        .insight-pics-container {
          margin-top: 4.7rem;
        }
        .insightpics-big {
          display: none;
        }
        .insightpics-header {
          margin-top: 2.9rem;
          margin-bottom: 2.1rem;
          color: var(--primary-color);
          font-size: 1.8rem;
        }
        .insightpics-text {
          color: var(--primary-grey);
          font-size: 1.8rem;
          line-height: 150%;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 700px) {
          .insight-container {
            margin: 4.6rem 3rem 4rem;
          }
          .insight-article-snippet {
            width: 70%;
            text-align: left;
          }
          .insight-featured-container {
            margin-left: 2rem;
            margin-right: 2rem;
          }
        }
        @media (min-width: 1024px) {
          .insight-container {
            margin: 7.6rem 5rem 13.8rem;
          }
          .insight-container img {
            width: 100%;
          }

          .insight-header-container {
            margin: 3.8rem 0 2.3rem;
            padding-bottom: 7.4rem;
          }
          .insight-header {
            font-size: 2rem;
            margin-bottom: 3.1rem;
          }

          .grid-section {
            display: grid;
            grid-template-columns: repeat(3, 30%);
            grid-template-rows: repeat(3, auto);
            grid-column-gap: 5rem;
          }
          .insight-featured-container {
            grid-column: 1;
            grid-row: 1 / 2;
            margin-left: 0rem;
            margin-right: 0rem;
            margin-bottom: 2rem;
          }
          .insightpics-big {
            display: block;
            grid-column: 2 / 4;
            grid-row: 1;
            margin-bottom: 2rem;
          }
          .insight-article-snippet {
            width: 80%;
          }
          .insight-pics-container {
            margin-top: 0rem;
          }
          .insight-pics-container img {
            height: 50%;
          }
          .grid-section .insight-pics-container:nth-of-type(1) {
            grid-column: 1;
            grid-row: 2;
          }
          .grid-section .insight-pics-container:nth-of-type(2) {
            grid-column: 2;
            grid-row: 2;
          }
          .grid-section .insight-pics-container:nth-of-type(3) {
            grid-column: 3;
            grid-row: 2;
          }
          .grid-section .insight-pics-container:nth-of-type(4) {
            grid-column: 1;
            grid-row: 2;
            height: 40%;
            margin-top: 5rem;
          }
          .grid-section .insight-pics-container:nth-of-type(5) {
            grid-column: 2;
            grid-row: 3;
          }
          .grid-section .insight-pics-container:nth-of-type(6) {
            grid-column: 3;
            grid-row: 3;
          }
        }
        @media (min-width: 1200px) {
          .insight-pics-container {
            margin-top: 5.5rem;
          }
          .insight-article-snippet {
            width: initial;
          }
          .grid-section .insight-pics-container:nth-of-type(4) {
            height: 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Insight;
