// import React from "react";
// import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getAllPublicRoutines } from "../api/helpers";

export default function Home() {
  // const nav = useNavigate();
  const [routines, setRoutines] = useState([]);
  useEffect(() => {
    async function allPublicRoutines() {
      try {
        const publicRoutines = await getAllPublicRoutines();
        setRoutines(publicRoutines);
      } catch (error) {
        console.error(error);
      }
    }
    allPublicRoutines();
  }, []);

  return (
    <div className="home-page">
      {routines.map((routine) => {
        return (
          <div className="one-routine" key={routine.id}>
            <h2 className="routine-name">{routine.name}</h2>
            <ul className="routine-info">
              <li>{routine.description}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
