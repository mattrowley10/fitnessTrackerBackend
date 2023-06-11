const baseUrl = "/api";

// export const getToken = async (token) => {
//   try {
//     const response = await fetch(`${baseUrl}/users/me`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };
export const getMe = async () => {
  try {
    const response = await fetch(`${baseUrl}/users/me`);
    const { success, message, data } = await response.json();
    if (!success) {
      throw {
        success,
        message,
      };
    }
    return { success, message, data };
  } catch (error) {
    console.error(error);
  }
};
export const registerUser = async ({ username, password }) => {
  try {
    const response = await fetch(`${baseUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const { success, message, data } = await response.json();
    if (!success) {
      throw {
        message,
      };
    }
    return { success, message, data };
  } catch (error) {
    console.error(error);
  }
};
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${baseUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const { success, message, user } = await response.json();
    console.log(user);
    return { success, message, user };
  } catch (error) {
    console.error(error);
  }
};
export const getAllPublicRoutines = async () => {
  try {
    const response = await fetch(`${baseUrl}/routines/public-routines`);
    const result = await response.json();
    console.log("Result from public routines", result);
    return result;
  } catch (error) {
    console.error("ERROR");
  }
};
export const getAllRoutines = async () => {
  try {
    const response = await fetch(`${baseUrl}/routines`);
    const result = await response.json();
    console.log("Result from routines", result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
