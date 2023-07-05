const contactForm = document.querySelector(".contact_form");
const nameEl = document.getElementById("gname");
const email = document.getElementById("gmail");
const childName = document.getElementById("cname");
const childAge = document.getElementById("cage");
const message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    name: nameEl.value,
    email: email.value,
    childName: childName.value,
    childAge: childAge.value,
    message: message.value,
  };

  fetch("http://localhost:8080/post/quote", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
