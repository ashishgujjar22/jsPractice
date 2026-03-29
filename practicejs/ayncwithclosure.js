function createLimiter(value) {
  let count = value;

  return async function () {
    try {
      if (count === 0) {
        throw new Error("Limit reached");
      }
      count--;
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
      );
      const data = await response.json();
      console.log(data.name);
    } catch (error) {
      console.log(error.message);
    }
  };
}

const limitedFetch = createLimiter(2);

await limitedFetch(); // fetches
await limitedFetch(); // fetches
await limitedFetch(); // fetches
await limitedFetch(); // "Limit reached"
