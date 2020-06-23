import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light">
      <Link href="/">
        <img src="logo.png" />
      </Link>
      <div className={styles.dropdown}>
        <Link href="/about">
          <button className={styles.dropbtn}>About</button>
        </Link>
        <div className={styles.dropdown_content}>
          <Link href="/qwe">
            <a>Link 1</a>
          </Link>
          <a>Link 2</a>
          <a>Link 3</a>
        </div>
      </div>
      <Link href="/services">
        <a>SERVICES</a>
      </Link>
      <Link href="/projects">
        <a>PROJECTS</a>
      </Link>
      <Link href="/locations">
        <a>LOCATIONS</a>
      </Link>
      <Link href="/contact">
        <a>CONTACT</a>
      </Link>
    </nav>
  );
};

export default Navbar;
