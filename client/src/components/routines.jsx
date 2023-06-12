import { useState, useEffect } from "react";
import { getAllRoutines } from "../api/helpers";
import useAuth from "../hooks/useAuth";

export default function Routines() {
  const [routines, setRoutines] = useState([]);
  const { user } = useAuth();
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
          <div className="one-routine" key={user.id}>
            <h2 className="routine-name">{routine.name}</h2>
            <ul className="routine-info">
              <li>{routine.goal}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
