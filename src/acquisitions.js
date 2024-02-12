import Chart from "chart.js/auto";

(async function () {
  const dataAlpha = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  const dataBeta = [
    { year: 2010, count: 21 },
    // NaNを用意した．
    { year: 2011, count: NaN },
    { year: 2012, count: 14 },
    { year: 2013, count: 26 },
    { year: 2014, count: 23 },
    { year: 2015, count: 38 },
    { year: 2016, count: 9 },
  ];

  new Chart(document.getElementById("acquisitions"), {
    type: "bar",
    data: {
      // labelにNaNならそう出せるといいんだが、二系あると難しいかもしれない．
      labels: dataAlpha.map((row) => row.year),
      datasets: [
        {
          label: "Acquisitions by year(alpha)",
          data: dataAlpha.map((row) => row.count),
          backgroundColor: "rgba(0, 123, 255, 0.5)",
        },
        {
          label: "Acquisitions by year(beta)",
          data: dataBeta.map((row) => row.count),
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    },
    // ここがポイント
    options: {
      scales: {
        x: {
          stacked: true,
        },
      },
    },
  });
})();
