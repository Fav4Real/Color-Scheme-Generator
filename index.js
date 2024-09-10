const colorBtn = document.getElementById("color-btn");
const colorDrawdown = document.getElementById("select-color");
const colorSelector = document.getElementById("color-selector");
const colorSpace = document.getElementById("color-display");
const colorCodeText = document.getElementById("color-code-container");

colorBtn.addEventListener("click", function () {
  let selectedColor = colorSelector.value.slice(1);
  let colorTweek = colorDrawdown.value;
  let url = `https://www.thecolorapi.com/scheme?hex=${selectedColor}`;

  console.log(url);

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${colorTweek}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      let colorDisplay = "";
      const colorCode = data.colors;
      let colorText = "";

      for (let bgColor of colorCode) {
        colorDisplay += `
        <div class="color" style="background-color: ${bgColor.hex.value}; display: inline-block;"></div>
        `;
        colorText += `
        <div class="color-code"><p>${bgColor.hex.value}</p></div>
        `;
      }
      colorSpace.innerHTML = colorDisplay;
      colorCodeText.innerHTML = colorText;
    });

  // Create an empty string to hold the combined html of all the color blocks

  // Create a for loop to go over every response.colors
  // For each loop, access the hex code, store in a variable
  // Create a div, using template strings,
  // Add this to the empty string emptyStr += `<div style="background-color: ${variable}">
  // Use innerHtml to display the container div to be equal the empty that would have been populated with divs
});

