import React from "react";
import { Card, Grid } from "semantic-ui-react";
import "./styles.css";

export default function Vehicles({ data }) {
  const firstRow = data.slice(0, 5);
  const secondRow = data.slice(5, 10);

  return (
    <>
      <h1>Vehicles</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {firstRow.map((vehicle, i) => (
            <div key={i} style={{ flex: "0 0 200px", margin: "10px" }}>
              <Card
                style={{
                  border: "1px solid yellow",
                  width: "200px",
                  height: "850px",
                  borderRadius: "10px",
                }}
              >
                <Card.Content>
                  <p>
                    <b><Card.Header>{vehicle.name}</Card.Header></b>
                  </p>
                  <Card.Description>
                    <strong>Cargo capacity</strong>
                    <p>{vehicle.cargo_capacity}</p>
                    <strong>Consumables</strong>
                    <p>{vehicle.consumables}</p>
                    <strong>Cost in credits</strong>
                    <p>{vehicle.cost_in_credits}</p>
                    <strong>Created</strong>
                    <p>{vehicle.created}</p>
                    <strong>Crew</strong>
                    <p>{vehicle.crew}</p>
                    <strong>Manufacturer</strong>
                    <p>{vehicle.manufacturer}</p>
                    <strong>Length</strong>
                    <p>{vehicle.length}</p>
                    <strong>Max Atmosphering Speed</strong>
                    <p>{vehicle.max_atmosphering_speed}</p>
                    <strong>Model</strong>
                    <p>{vehicle.model}</p>
                    <strong>Passengers</strong>
                    <p>{vehicle.passengers}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {secondRow.map((vehicle, i) => (
            <div key={i} style={{ flex: "0 0 200px", margin: "10px" }}>
              <Card
                style={{
                  border: "1px solid yellow",
                  width: "200px",
                  height: "850px",
                  borderRadius: "10px",
                }}
              >
                <Card.Content>
                  <p>
                    <b><Card.Header>{vehicle.name}</Card.Header></b>
                  </p>
                  <Card.Description>
                    <strong>Cargo capacity</strong>
                    <p>{vehicle.cargo_capacity}</p>
                    <strong>Consumables</strong>
                    <p>{vehicle.consumables}</p>
                    <strong>Cost in credits</strong>
                    <p>{vehicle.cost_in_credits}</p>
                    <strong>Created</strong>
                    <p>{vehicle.created}</p>
                    <strong>Crew</strong>
                    <p>{vehicle.crew}</p>
                    <strong>Manufacturer</strong>
                    <p>{vehicle.manufacturer}</p>
                    <strong>Length</strong>
                    <p>{vehicle.length}</p>
                    <strong>Max Atmosphering Speed</strong>
                    <p>{vehicle.max_atmosphering_speed}</p>
                    <strong>Model</strong>
                    <p>{vehicle.model}</p>
                    <strong>Passengers</strong>
                    <p>{vehicle.passengers}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
