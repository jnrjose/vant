import { useRouter } from "next/router";

function ActiveLink({ children, href, color, hovercolor, padding, fontsize }) {
  const router = useRouter();
  const fontColor = color ? color : "#fafafa";
  const fontHoverColor = hovercolor ? hovercolor : "#fffa46";

  const handleClick = (e) => {
    e.preventDefault();
    if (href) {
      router.push(href);
    }
    return;
  };

  return (
    <a href={href} onClick={handleClick} className="nav-menu-link">
      {children}
      <style jsx>{`
        .nav-menu-link {
          display: flex;

          text-decoration: none;
          color: ${fontColor};
          justify-content: space-between;
          align-items: center;
          font-size: ${fontsize ? fontsize : "1.8rem"};
        }

        .nav-menu-link :hover,
        .nav-menu-link :focus {
          color: ${fontHoverColor ? fontHoverColor : "#fffa46"};
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 900px) {
          .nav-menu-link {
            padding: ${padding ? padding : "10px 0"};
            margin-right: 0;
            position: relative;
          }
        }
      `}</style>
    </a>
  );
}

export default ActiveLink;
// color: ${router.pathname === href ?  "#fffa46": fontColor};
