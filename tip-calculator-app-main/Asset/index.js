// DOM elements
var bill = document.getElementById("bill-amount");
var people = document.getElementById("people-count");
var custom = document.querySelector(".custom-pCent");
var btn5 = document.querySelector(".btn5");
var btn10 = document.querySelector(".btn10");
var btn15 = document.querySelector(".btn15");
var btn25 = document.querySelector(".btn25");
var btn50 = document.querySelector(".btn50");
var reset = document.querySelector(".reset");
var tip = document.querySelector(".fig-amount");
var total = document.querySelector(".total-amount");
var warning = document.querySelector("label span");
let billAmt, peopleNo, customPcent, totalTip, personTip, totalPerson;

reset.removeAttribute("enabled");

// Validate Number of People (non zero) ---->
people.addEventListener("change", function () {
    peopleNo = Number(people.value);


      if (peopleNo !== 0) {
        ningning.style.display ="none";
        people.style.border ="none";

      } else if (peopleNo === 0) {
        warning.style.display ="inline";
        people.style.border ="1px solid red";
      }
    
  });


// Activate Reset button ---->
bill.addEventListener("change", function () {
    billAmt = Number(bill.value);
    peopleNo = Number(people.value);
  
    if (billAmt !== 0) {
        reset.removeAttribute("disabled");
      }
    
      if ( peopleNo === 0 ) {
        warning.style.display ="inline";
        people.style.border ="1px solid red";

      }
  
  });


// Reset form --->
reset.addEventListener("click", resetBtn);

// Calculate tip and total ---->
document.querySelectorAll("input").forEach(function (inpt) {
  inpt.addEventListener("change", function () {
    billAmt = Number(bill.value);
    peopleNo = Number(people.value);
    customPcent = Number(custom.value);

    if (customPcent > 100) {
      alert("percentage cannot be greater than 100!");
      resetBtn();
    }

    if (pCent === 0) pCent = customPcent;

    if (billAmt !== 0 && peopleNo !== 0 && pCent !== 0) {
      totalTip = billAmt * (pCent / 100);
      personTip = totalTip / peopleNo;
      totalPerson = (billAmt + totalTip) / peopleNo;

     tip.textContent = "$" + personTip.toFixed(2);
      total.textContent = "$" + totalPerson.toFixed(2);
    }
  });
});

const btnPcent = new Array (btn5, btn10, btn15, btn25, btn50, custom);
let pCent = 0;

// Select tip ---->

btnPcent.forEach(function (btn) {
    btn.addEventListener("pointerdown", function (e) {
    btn.classList.add("onActive"); 
    btnPcent.forEach(function (innerBtn) {
      if (innerBtn !== btn) {innerBtn.classList.remove("onActive")};
    });
    if (btn.id !== "custom") {pCent = Number(btn.innerHTML)};
  });
});

// Functions
function resetBtn() {
    bill.value = "";
    people.value = "";
    people.style.border ="none";
    custom.value = "";
    btnPcent.forEach(function (btn) {
      btn.classList.remove("onActive");
    });
    tip.textContent = "$0.00";
    total.textContent = "$0.00";
    warning.style.display("none");
  }


