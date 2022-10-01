import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/signup">Sign up</NavLink></li>
      <li><NavLink to="/contactus">Contact</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
