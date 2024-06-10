import { Link } from "react-router-dom";

function NoPage() {
  return (

  <div className="divSpace">
    <h1>Your not supposed to be here...</h1>
    <Link to="/">Go Home</Link>
  </div>

  );
}

export default NoPage
