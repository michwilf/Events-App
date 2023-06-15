import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div className="header_content">
        <div className="topNav">
          <Image
            src={"/images/logo_black.png"}
            alt="logo"
            width={50}
            height={50}
          />
          <nav className="navbar">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title">Events in a city near you!</p>
      </div>
    </header>
  );
};

export default Header;
