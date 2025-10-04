document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const alertBox = document.getElementById("alertBox");

  if (!name || !email || !message || !email.includes("@")) {
    alertBox.className = "alert alert-danger";
    alertBox.textContent = "يرجى ملء جميع الحقول بشكل صحيح.";
  } else {
    alertBox.className = "alert alert-success";
    alertBox.textContent = "تم إرسال الرسالة بنجاح!";
  }
  alertBox.classList.remove("d-none");
})