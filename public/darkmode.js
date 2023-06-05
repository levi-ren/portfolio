const toggle = document.getElementById("darkmode-switch");

const isDark =
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

document.documentElement.classList.add("!scroll-smooth");
document.documentElement.classList.toggle("dark", isDark);
toggle.checked = isDark;

toggle.addEventListener("change", (e) => {
  document.documentElement.classList.toggle("dark", e.target.checked);
  localStorage.setItem("theme", e.target.checked ? "dark" : "light");
});
