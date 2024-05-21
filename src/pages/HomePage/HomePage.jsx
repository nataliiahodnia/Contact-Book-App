import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import css from "./HomePage.module.css";
import AnimatedCursor from "react-animated-cursor";

const HomePage = () => {
  return (
    <div className={css.containerHomePage}>
      <AnimatedCursor />
      <BackgroundImage />
      <div className={css.container}>
        <h1 className={css.mainTitle}>Welcome! This is the Contact Book App.</h1>
        <p className={css.text}>
        Here, you can manage your contacts with the utmost safety and efficiency.
        </p>
      </div>
      <div>
        <p className={css.textCreate}>
          © 2024 Created by{" "}
          <span>
            <a
              href="https://github.com/nataliiahodnia"
              target="_blank"
              rel="noopener noreferrer"
              title="Github profile"
              aria-label="Link to Github profile"
              className={css.link}
            >
              <span>Hodnia</span>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
