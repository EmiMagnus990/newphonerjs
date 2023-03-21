import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget";

const navegacion = () => {
    return (
        <div collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">NEWphone</Navbar.Brand>
                <a href="#" className="link1">Tienda</a>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <a href="#" className="numeroCarritoNav"><CartWidget /></a>
            </Container>
        </div>
    );
}

export default navegacion