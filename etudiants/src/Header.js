import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Recherche soumise :', searchQuery);
    history.push(`/recherche/${searchQuery}`);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Mon Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ajouter">Ajouter</Nav.Link>
            <Nav.Link as={Link} to="/supprimer">Supprimer</Nav.Link>
            <Nav.Link as={Link} to="/recherchea">RechercheA</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Liens vers Editer et Supprimer2 à l'extérieur du formulaire */}
        <Nav>
        <Nav.Link as={Link} to="/editer">Editer</Nav.Link>

{/* Ajoutez un ID spécifique pour Supprimer2 */}
<Nav.Link as={Link} to="/supprimer2">Supprimer2</Nav.Link>        </Nav>

        <Form className="d-flex" onSubmit={handleSearchSubmit}>
          <FormControl
            type="search"
            placeholder="Rechercher"
            className="mr-2"
            aria-label="Rechercher"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="outline-success" type="submit">Rechercher</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
