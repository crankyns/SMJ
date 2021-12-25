import { Link } from "react-router-dom";

export const FacebookLink = (className, link) => {
  return (
    <li className={className}>
      <Link to={link}>
        <i class="fab fa-facebook-f"></i>
      </Link>
    </li>
  );
};
