import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import AnimatedCursor from "react-animated-cursor";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

const NotFoundPage = () => (
  <div className={css.notFoundPage}>
    <AnimatedCursor />
    <BackgroundImage />
    <h1>404 - Page not found</h1>
    <p>{`Sorry, the page you are looking for does not exist.`}</p>
    <Link to="/">Turn to the front side</Link>
  </div>
);

export default NotFoundPage;
