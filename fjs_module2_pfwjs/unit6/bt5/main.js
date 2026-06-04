async function getUser() {
  let names = [];
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Không tìm thấy !");
    }

    const data = await response.json();
    names = data.map((user) => {
      return user.name;
    });
    for (let i = 0; i < names.length; i++) {
      console.log(names[i]);
    }
  } catch (error) {
    console.log("Lỗi: ", error.message);
  }
}
getUser();
