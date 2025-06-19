const loadComponent = async (id, file) => {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
};

window.onload = () => {
    // Hide loader after 2s or when content is ready
setTimeout(() => {
  const loader = document.getElementById("loader-wrapper");
  if (loader) loader.style.display = "none";
}, 1500);

  loadComponent("navbar", "components/navbar.html");
  loadComponent("loader", "components/loader.html");
  loadComponent("brand-kits", "components/brand-kits.html");
  loadComponent("graph", "components/graph-section.html");
  loadComponent("testimonials", "components/testimonials.html");
};
