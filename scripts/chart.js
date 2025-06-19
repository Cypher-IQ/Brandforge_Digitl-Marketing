const ctx = document.getElementById("barChart");

if (ctx) {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Revenue (in ₹k)",
          data: [120, 190, 300, 250, 180],
          backgroundColor: [
            "#00d084",
            "#fcb900",
            "#0693e3",
            "#eb144c",
            "#ab68ff"
          ],
          borderRadius: 8,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: { color: "#000" },
        },
      },
      scales: {
        x: {
          ticks: { color: "#000" },
        },
        y: {
          ticks: { color: "#000" },
        },
      },
    },
  });
}
