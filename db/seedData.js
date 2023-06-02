const users = [
  { username: "Lindsay", password: 12345678 },
  { username: "Matthew", password: 12345678 },
  { username: "Fred", password: 12345678 },
  { username: "Ted", password: 12345678 },
  { username: "Marmolade", password: 12345678 },
  { username: "What?", password: 12345678 },
];

const routines = [
  {
    creator_id: 1,
    is_public: true,
    name: "Leg Day",
    goal: "Huge Legs",
  },
  {
    creator_id: 2,
    is_public: false,
    name: "Arm Day",
    goal: "Huge Arms",
  },
  {
    creator_id: 2,
    is_public: true,
    name: "Back Day",
    goal: "Strong Back",
  },
  {
    creator_id: 2,
    is_public: true,
    name: "Back Day",
    goal: "Strong Back",
  },
  {
    creator_id: 2,
    is_public: true,
    name: "Back Day",
    goal: "Strong Back",
  },
];

const activities = [
  { name: "Bike Ride", description: "10 miles" },
  { name: "Pushups", description: "x100" },
  { name: "Squats", description: "x50" },
  { name: "Bench Press", description: "x25" },
  { name: "Running", description: "5 miles" },
  { name: "Row", description: "3 miles" },
];

const routine_activities = [
  { routine_id: 1, activity_id: 1, count: 10, duration: 10 },
  { routine_id: 2, activity_id: 2, count: 5, duration: 15 },
  { routine_id: 3, activity_id: 3, count: 15, duration: 5 },
  { routine_id: 4, activity_id: 4, count: 15, duration: 5 },
  { routine_id: 5, activity_id: 5, count: 15, duration: 5 },
];

module.exports = { users, routines, activities, routine_activities };
