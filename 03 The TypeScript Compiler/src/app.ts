let appId = "test";

const button = document.querySelector("button");

const add = (n1: number, n2: number) => {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }

  return;
};

// Test comment

const clickHandler = (message: string) => {
  // let userName = "Andrey";

  console.log("clicked!!! " + message);
};

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "Hello!"));
}
