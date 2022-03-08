
import "./App.css";
import "./font-awesome-4.7.0/css/font-awesome.min.css";

function App() {
  return (
    <div className="">
      <nav className="menu">
        <label className="logo">JorgePlasencia</label>
        <ul className="menu_items">
          <li className="active">
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Acerca</a>
          </li>
          <li>
            <a href="#">Portafolio</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
        <span className="btn_menu">
          <i className="fa fa-bars"></i>
        </span>
      </nav>
    </div>
  );
}

export default App;
