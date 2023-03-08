const myForm = document.getElementById("input");

myForm.addEventListener("submit", function(event) {
  
  event.preventDefault();

 const buyPrice = parseFloat(document.getElementById("buyPrice").value);
 const currentPrice = parseFloat(document.getElementById("currentPrice").value);

 
  const total = (currentPrice - buyPrice) / buyPrice * 100;

  
  const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `The percentage increase is: ${total}%`;
  });