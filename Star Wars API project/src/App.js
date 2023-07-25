import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './styles.css';
import People from './People';
import Vehicles from './Vehicles';

export default function App() {
  const [people, setPeople] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/");
      let data = await res.json();
      setPeople(data.results);
    }

    async function fetchVehicles() {
      let res = await fetch("https://swapi.dev/api/vehicles/");
      let data = await res.json();
      setVehicles(data.results);
    }

    fetchPeople();
    fetchVehicles();
  }, []);

  console.log("people", people);
  console.log("vehicles", vehicles);

  return (
    <div className="App">
      <h1>Star Wars API Homework</h1>
      <Router>
        <Navigation />
        <Container>
          <Routes>
            <Route path="/people" element={<People data={people} />} />
            <Route path="/vehicles" element={<Vehicles data={vehicles} />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}