import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, odit.
      </p>
      <p>
        Go to the <Link to="/">Home.</Link>
      </p>
    </div>
  );
}
