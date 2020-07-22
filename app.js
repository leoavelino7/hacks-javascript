function myFunction({username, password}){
    console.log("Username:", username); // Username: @ehash
    console.log("Password:", password); // Password: ilovejs
};

const myData = {
    username: "@ehash",
    password: "ilovejs"
};

myFunction(myData);