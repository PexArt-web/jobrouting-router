import { Link } from "react-router-dom";

const NotFound = () => {
  return <div>
    <h2>Page not found!</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est rerum, cum officia ad iure expedita, id explicabo minus quos accusamus nisi nemo dignissimos, corrupti natus totam magni? Commodi, sequi!</p>

    <p>Go to the Homepage <Link to={'/'}>Homepage</Link></p>
  </div>;
};

export default NotFound;
