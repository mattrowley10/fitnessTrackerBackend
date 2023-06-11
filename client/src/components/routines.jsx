import { useState, useEffect } from "react";
import { getAllRoutines } from "../api/helpers";

export default function Routines() {
  const [routines, setRoutines] = useState([]);
  useEffect(() => {
    async function allRoutines() {
      try {
        const allRoutines = await getAllRoutines();
        setRoutines(allRoutines);
      } catch (error) {
        console.error(error);
      }
    }
    allRoutines();
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
