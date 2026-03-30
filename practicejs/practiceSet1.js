async function users() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    const fUser = data.slice(0, 10).filter((user) => user.name[0] === "M");
    // console.log(fUser);

    const name = fUser.map((user) => {
      const name = user.name;

     const properName= name
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");

      console.log(`Name:${properName} | Email:${user.email}`);
    });

    console.log(`Total Filtered Users:${fUser.length}`);
  } catch (error) {
    console.log("Data not found", error.message);
  }
}
users();
