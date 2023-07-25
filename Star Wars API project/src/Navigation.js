import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Menu inverted>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to='/people' style={{ margin: '5px' }}>
          <Menu.Item name="People" style={{ color: 'yellow', borderRadius: '10px', border: '1px solid yellow', borderColor: 'yellow' }} />
        </Link>
        <Link to='/vehicles' style={{ margin: '5px' }}>
          <Menu.Item name="Vehicles" style={{ color: 'yellow', borderRadius: '10px', border: '1px solid yellow', borderColor: 'yellow' }} />
        </Link>
      </Container>
    </Menu>
  );
}