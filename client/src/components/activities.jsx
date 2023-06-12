// import React from 'react'
// import { useNavigate } from "react-router"
import { useState, useEffect } from "react";
import { getAllActivities } from "../api/helpers";
// import useAuth from "../hooks/useAuth";

export default function Activities() {
  const [activities, setActivities] = useState([]);
  // const { user } = useAuth();
  useEffect(() => {
    async function allActivities() {
      try {
        const allActivities = await getAllActivities();
        setActivities(allActivities);
      } catch (error) {
        console.error(error);
      }
    }
    allActivities();
  }, []);
  return (
    <div className="activities">
      {activities.map((activity) => {
        return (
          <div className="one-activity" key={activity.id}>
            <h2 className="routine-name">{activity.name}</h2>
            <ul className="activity-info">
              <li>{activity.description}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
