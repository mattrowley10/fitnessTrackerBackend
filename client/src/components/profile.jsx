// import React from "react";
import useAuth from "../hooks/useAuth";
import "../App.css";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { getMe } from "../api/helpers";

export default function Profile() {
  const { user } = useAuth();
  const nav = useNavigate();
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    async function getMyRoutines() {
      const fetchMe = await getMe();
      setRoutines(routines);
      setActivities(activities);
      console.log(fetchMe);
    }
    getMyRoutines();
  });
  return (
    <div className="profile">
      <h2 className="profile-header">Welcome {user.username}!</h2>
      <div className="yourMessages">
        <h2>Your Routines: </h2>
        {routines.length === 0 && (
          <p className="no-messages">
            You have no new routines
            <button
              className="create-button"
              onClick={() => {
                // nav("/Reply", { state: routine });
                // console.log(routine);
              }}
            >
              Create Routine
            </button>
          </p>
        )}
        {routines.map((routine) => {
          if (routine.id !== user.id)
            return (
              <div className="one-message" key={routine.id}>
                <p>{routine.name}</p>
                <br></br>
                <p className="one-message-content">{routine.is_public}</p>
                <br></br>
                <p>{routine.goal}</p>
                <br></br>
                <button
                  className="create-button"
                  onClick={() => {
                    // nav("/", { state: routine });
                    console.log(routine);
                  }}
                >
                  Create Routine
                </button>
              </div>
            );
        })}
      </div>
      <div className="yourPosts">
        <h2>Your Activities:</h2>
        {activities.length === 0 && (
          <p className="no-posts">You have no new activities</p>
        )}
        {activities.map((activity) => {
          if (activity.active === true) {
            return (
              <div className="profile-one-post" key={activity._id}>
                <h1 className="post-title">{activity.title}</h1>
                <ul className="post-info">
                  <li>
                    <p className="post-body">{activity.description}</p>
                  </li>
                </ul>
                <button
                  className="details-button"
                  onClick={() => {
                    console.log(activity);
                    nav("/id", { state: activity });
                  }}
                >
                  Details
                </button>
                <button
                  className="delete-button"
                  onClick={async () => {
                    // await deletePost();
                  }}
                >
                  Delete
                </button>
                <button
                  className="edit-button"
                  onClick={async () => {
                    // await editPost();
                    nav("/Edit", { state: activity });
                  }}
                >
                  Edit
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
