import "./Navbar.css";
import img from "./LogotipoSF.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge, IconButton, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
//import { link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Header = () => {
  return (
    <div className="HeaderNav">
      <img src={img} alt="logo" />
      <nav className="navbar navbar-expand-lg bg-body-">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link to="/">Home</Link> </li>
              <li className="nav-item"><Link to="/Productos">Productos</Link> </li>
              <li className="nav-item"><Link to="/Contactanos">Contactacto</Link> </li>
              <li>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
