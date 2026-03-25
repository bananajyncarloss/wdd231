const params = new URLSearchParams(window.location.search);

["fname", "lname", "email", "phone", "business", "timestamp"].forEach(id => {
  document.getElementById(id).textContent = params.get(id);
});

// Format timestamp
const rawDate = params.get("timestamp");
if (rawDate) {
  const formatted = new Date(rawDate).toLocaleString();
  document.getElementById("timestamp").textContent = formatted;
}