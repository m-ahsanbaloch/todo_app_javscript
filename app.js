var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("list-container");
// ========== Add Task Function =========
function addTask(event) {
  // ========== If Empty ===============
  if (inputBox.value == "") {
    swal("Please Add Text To Proceed", {
      buttons: false,
      timer: 1800,
    });
  }
  // ========== If Empty ===============

  // ================= if value entered ==========
  else {
    var li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    var span = document.createElement("span");
    span.innerHTML = "X";
    li.appendChild(span);
  }
  inputBox.value = "";
  // ================= if value entered ==========
}
// ========== Add Task Function =========

// ======================== Delete Task Function ===============
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName == "SPAN") {
      swal("Are you sure?", {
        dangerMode: true,
        buttons: true,
      });
      e.target.parentElement.remove();
    }
  },
  false
);
// ======================== Delete Task Function ===============
