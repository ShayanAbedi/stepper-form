// select forms
const formContainer = document.querySelector(".form-container");
const form1 = document.querySelector(".step1");
const form2 = document.querySelector(".step2");
const form3 = document.querySelector(".step3");

// select Back buttons
const backBtn2 = document.querySelector(".back-btn-2");
const backBtn3 = document.querySelector(".back-btn-3");
const newForm = document.querySelector(".new-form");

// select check mark icons
const check1 = document.querySelector(".check-1");
const uncheck1 = document.querySelector(".uncheck-1");
const check2 = document.querySelector(".check-2");
const uncheck2 = document.querySelector(".uncheck-2");
const check3 = document.querySelector(".check-3");
const uncheck3 = document.querySelector(".uncheck-3");

const submittedContainer = document.querySelector(".submitted-container");
const submittedMsg = document.querySelector(".submitted-msg");
const submittedData = document.querySelector(".submitted-data");

form2.style.display = "none";
form3.style.display = "none";
check1.style.display = "none";
check2.style.display = "none";
check3.style.display = "none";

submittedContainer.style.display = "none";

const data = {};

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  const form1Data = new FormData(form1);
  data.name = form1Data.get("username");
  form1.style.display = "none";
  form2.style.display = "";
  check1.style.display = "";
  uncheck1.style.display = "none";
});

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  const form2Data = new FormData(form2);
  data.password = form2Data.get("password");
  form2.style.display = "none";
  form3.style.display = "";
  check2.style.display = "";
  uncheck2.style.display = "none";
});

form3.addEventListener("submit", (e) => {
  e.preventDefault();
  const form3Data = new FormData(form3);
  data.email = form3Data.get("email");
  check3.style.display = "";
  uncheck3.style.display = "none";
  formContainer.style.display = "none";
  submittedContainer.style.display = "";
  submittedData.textContent = `Submitted data {
  username: ${data.name},
  password: ${data.password},
  email: ${data.email}
  }`;
});

backBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  form2.style.display = "none";
  form1.style.display = "";
});

backBtn3.addEventListener("click", (e) => {
  e.preventDefault();
  form3.style.display = "none";
  form2.style.display = "";
});

newForm.addEventListener("click", (e) => {
  e.preventDefault();
  form1.reset();
  form2.reset();
  form3.reset();
  formContainer.style.display = "";
  submittedContainer.style.display = "none";
  form1.style.display = "";
  form2.style.display = "none";
  form3.style.display = "none";
});
