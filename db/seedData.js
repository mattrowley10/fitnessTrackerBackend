const users = [
  { username: "Lindsay", password: 12345678 },
  { username: "Matthew", password: 12345678 },
];

const routines = [
  {
    creator_id: 1,
    is_public: true,
    name: "Matthew",
    goal: "to be the best",
  },
  {
    creator_id: 2,
    is_public: false,
    name: "Lindsay",
    goal: "to win!",
  },
];

// const activities = [
//   { id: { id }, name: "Matthew", description: "leg day" },
//   { id: { id }, name: "Lindsay", description: "push-ups" },
// ];

module.exports = { users, routines };