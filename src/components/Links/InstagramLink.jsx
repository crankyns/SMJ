import { Link } from "react-router-dom";

export const InstagramLink = (className, link) => {
  return (
    <li className={className}>
      <Link to={link}>
        <i class="fab fa-instagram"></i>
      </Link>
    </li>
  );
};
