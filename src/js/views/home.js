import React, { useState, useEffect } from "react";

export const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container text-center mt-5">
      <h1>Star Wars Databank</h1>
      <p className="lead">Explore the Star Wars universe. Browse characters, vehicles, and planets.</p>

    </div>
  );
};

