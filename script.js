// Sidebar toggle logic
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggle-btn");

  // Check if sidebar is open
  const isOpen = sidebar.style.left === "0px";

  if (isOpen) {
    // Close sidebar
    sidebar.style.left = "-220px";
    sidebar.style.opacity = "0";
    toggleBtn.textContent = "☰"; // back to hamburger
  } else {
    // Open sidebar
    sidebar.style.left = "0";
    sidebar.style.opacity = "1";
    toggleBtn.textContent = "X"; // switch to text-style X
  }
}
