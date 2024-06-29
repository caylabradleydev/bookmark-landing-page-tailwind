const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

// Tab Menu Event Listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  // Deactivate All Tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });

  // Hide All Panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  // Activate Targeted Panel
  e.target.classList.add("border-softRed", "border-b-4");
  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}
