import NavBarOption from './NavBarOption';


/**
 * Displays a Bootstrap Navbar
 * @param navBarOptions
 * @returns {JSX.Element}
 * @constructor
 */
export default function NavBar({ navBarOptions }) {
  return (

    <>
    

    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container ">
        
        <span className="navbar-brand barra">July's Bakery</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto d-flex flex-wrap barra">
            {navBarOptions.main.map((navBarOption, index) => (
              <NavBarOption key={index} navBarOption={navBarOption} />
            ))}
          </ul>
          <ul className="navbar-nav barra">
            {navBarOptions.right.map((navBarOption, index) => (
              <NavBarOption key={index} navBarOption={navBarOption} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}
