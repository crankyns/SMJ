import { Link } from "react-router-dom";

export const TwitterLink = (className, link) => {
  return (
    <li className={className}>
      <Link to={link}>
        <i class="fab fa-twitter"></i>
      </Link>
    </li>
  );
};
