import React from "react";
import { Card, Grid } from "semantic-ui-react";
import "./styles.css"

export default function People({ data }) {
  const firstRow = data.slice(0, 5);
  const secondRow = data.slice(5, 10);

  return (
    <>
      <h1>People</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {firstRow.map((person, i) => (
            <div key={i} style={{ flex: "0 0 200px", margin: "10px" }}>
              <Card
                style={{
                  border: "1px solid yellow",
                  width: "200px",
                  height: "540px",
                  borderRadius: "10px",
                }}
              >
                <Card.Content>
                  <p>
                    <b><Card.Header>{person.name}</Card.Header></b>
                  </p>
                  <Card.Description>
                    <strong>Birth year</strong>
                    <p>{person.birth_year}</p>
                    <strong>Eye color</strong>
                    <p>{person.eye_color}</p>
                    <strong>Gender</strong>
                    <p>{person.gender}</p>
                    <strong>Height</strong>
                    <p>{person.height}</p>
                    <strong>Mass</strong>
                    <p>{person.mass}</p>
                    <strong>Hair Color</strong>
                    <p>{person.hair_color}</p>
                    <strong>Skin Color</strong>
                    <p>{person.skin_color}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {secondRow.map((person, i) => (
            <div key={i} style={{ flex: "0 0 200px", margin: "10px" }}>
              <Card
                style={{
                  border: "1px solid yellow",
                  width: "200px",
                  height: "540px",
                  borderRadius: "10px",
                }}
              >
                <Card.Content>
                  <p>
                    <b><Card.Header>{person.name}</Card.Header></b>
                  </p>
                  <Card.Description>
                    <strong>Birth year</strong>
                    <p>{person.birth_year}</p>
                    <strong>Eye color</strong>
                    <p>{person.eye_color}</p>
                    <strong>Gender</strong>
                    <p>{person.gender}</p>
                    <strong>Height</strong>
                    <p>{person.height}</p>
                    <strong>Mass</strong>
                    <p>{person.mass}</p>
                    <strong>Hair Color</strong>
                    <p>{person.hair_color}</p>
                    <strong>Skin Color</strong>
                    <p>{person.skin_color}</p>
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