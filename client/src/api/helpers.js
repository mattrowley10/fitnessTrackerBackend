const baseUrl = "/api";

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
