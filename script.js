function toggle(id) {
  const element = document.getElementById(id);

  if (element.innerHTML === "Absent") {
    element.innerHTML = "Present";
  } else {
    element.innerHTML = "Absent";
  }
}
