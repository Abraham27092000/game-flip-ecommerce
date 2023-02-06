import { Link } from "react-router-dom";
const Categorias = () => {
    return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <button className="btn btn-info">Todas las Categorías</button>
                </a>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-light" to="/category/Consolas" >Consolas</Link></li>
                    <li><Link className="dropdown-item text-light" to="/category/Videojuegos" >Videojuegos</Link></li>
                    <li><Link className="dropdown-item text-light" to="/category/Periféricos">Periféricos</Link></li>
                </ul>
            </li>
    );
}

export default Categorias;
