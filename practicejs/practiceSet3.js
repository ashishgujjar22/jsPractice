//all topic combine test
async function user() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    const {
      name,
      email,
      phone,
      address: { city },
      company: { name: companyName = "Google" },
    } = await response.json();

    const user = { name, email, phone, city, companyName };

    // console.log(user);

    const extraInfo = { role: "admin", verified: true };

    const nProfile = { ...user, ...extraInfo };

    console.log(`Name: ${nProfile.name}`);
    console.log(`Email: ${nProfile.email}`);
    console.log(`City: ${nProfile.city}`);
    console.log(`Company: ${nProfile.companyName}`);
    console.log(`Role: ${nProfile.role}`);
    console.log(`Verified: ${nProfile.verified}`);
    updateProfile(user, { role: "superadmin" }, { city: "Mumbai" });
  } catch (error) {
    console.log("Data not fetch", error.message);
  }
  function updateProfile(...updates) {
    const uProfile = updates.reduce((acc, update) => {
      return { ...acc, ...update };
    }, {});
    console.log(uProfile);
    
  }
}
user();
