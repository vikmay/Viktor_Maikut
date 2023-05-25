document.addEventListener("DOMContentLoaded", function() {
  const textDiv = document.getElementById("textDiv");
  const textarea = document.getElementById("textarea");

  function enableEditMode() {
    textDiv.style.display = "none";
    textarea.style.display = "block";
    textarea.value = textDiv.innerText;
    textarea.focus();
  }

  function disableEditMode() {
    textDiv.style.display = "block";
    textarea.style.display = "none";
    textDiv.innerText = textarea.value;
  }

  document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "e") {
      event.preventDefault();
      enableEditMode();
    } else if (event.ctrlKey && event.key === "s") {
      event.preventDefault();
      disableEditMode();
    }
  });
});