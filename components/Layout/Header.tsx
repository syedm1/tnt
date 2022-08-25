import { LinkCard } from "components/LinkCard/LinkCard";

const Header = () => {
  return (
    <div>
      {/* <LinkCard URL="/" Heading="Home" SubHeading="Home" /> */}
      {LinkCard("/", "Home", "")}
    </div>
  );
};
export default Header;
