import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Welcome to the About page!</p>

      <nav>
        <ul>
          <li>
           
            <Link to="/anidado1">
                Anidado1
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default About;
