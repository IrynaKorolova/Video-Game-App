import "./Logo.css";
import { Link } from 'react-router-dom';


export default function Logo() {
  return (
    <div>
      <Link className="header-link" to="/">
        <span className="logo">RAWG</span>
      </Link>
    </div>
  );
}
