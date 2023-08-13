function printObjectProperties(obj) {
  if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
  } else {
    for (let prop in obj) {
      console.log(`${prop}: ${obj[prop]}`);
    }
  }
}

// Example usage
const myObject = {
  name: "John",
  age: 30,
  occupation: "Developer"
};

printObjectProperties(myObject);
