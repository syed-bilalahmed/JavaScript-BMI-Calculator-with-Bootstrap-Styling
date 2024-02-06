const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const results = document.querySelector("#results");

//   let hasErrors = false;

  if (height === "" || isNaN(height) || height < 0) {
    results.innerHTML = `<div class="alert alert-danger" role="alert"> Please enter a valid height </div>`;
    // hasErrors = true;
  } else if (weight === "" || isNaN(weight) || weight < 0) {
    results.innerHTML = `<div class="alert alert-danger" role="alert">Please enter a valid weight </div>`;
    // hasErrors = true;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

    console.log(`Your BMI is ${BMI}`);
    // show result
    results.innerHTML = `<div class="alert alert-primary" role="alert"> <b>Your BMI is ${BMI} </b> </div>`;

    if (BMI < 18.5) {
        results.innerHTML += `<div class="alert alert-warning" role="alert"> Your BMI indicates Underweight </div>`;
      } else if (BMI >= 18.5 && BMI <= 24.9) {
        results.innerHTML += `<div class="alert alert-success" role="alert"> Your BMI is Normal </div>`;
      } else {
        results.innerHTML += `<div class="alert alert-danger" role="alert"> Your BMI indicates Overweight </div>`;
      }


  }
});
