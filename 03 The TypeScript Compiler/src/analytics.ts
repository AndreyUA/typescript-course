let logged;

function sendAnalytics(data: string) {
  console.log(data);

  logged = true;
  console.log(logged);

  logged = "Test";
  console.log(logged);
}

sendAnalytics("The data");
