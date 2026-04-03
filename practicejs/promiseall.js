async function userData() {
  try {
    const user1 = fetch("https://jsonplaceholder.typicode.com/users/1");
    const user2 = fetch("https://jsonplaceholder.typicode.com/users/3");
    const responses = await Promise.all([user1, user2]);
    // console.log(responses);
    
    responses.map((res) => {
      if (!res.ok) {
        throw new Error("data not found");
      }
    });
    const [data1, data2] = await Promise.all(
      responses.map((res) => res.json()),
    );
    console.log(data1.name);
    console.log(data2.name);

    return [data1, data2];
  } catch (error) {
    console.log(error.message);
  }
}
userData();
