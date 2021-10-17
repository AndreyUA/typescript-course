const button = document.querySelector("button");

// Test comment

const clickHandler = (message: string) => {
  console.log("clicked!!! " + message);
};

if (button) {
  button.addEventListener("click", clickHandler.bind(null, 'Hello!'));
}
