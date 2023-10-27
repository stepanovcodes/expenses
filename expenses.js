const fs = require("fs");

fs.readFile("data.dat", "utf8", (err, data) => {
  if (err) {
    console.error("Error occurred while reading the data file:", err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    let totals = 0;
    const categoryTotals = {};
    const nameTotals = {};

    const categories = new Set();
    const names = new Set();

    jsonData.forEach((item) => {
      const key = Object.keys(item)[0];
      const { nm, amt } = item[key];

      categories.add(key);
      names.add(nm);

      categoryTotals[key] = (categoryTotals[key] || 0) + Number(amt);
      nameTotals[nm] = (nameTotals[nm] || 0) + Number(amt);
      totals = (totals || 0) + Number(amt);
    });

    const sortedCategoryTotals = Object.entries(categoryTotals)
      .sort((a, b) => a[1] - b[1])
      .reduce((obj, [key, value]) => {
        obj[key] = Number(value.toFixed(2));
        return obj;
      }, {});

    const sortedNameTotals = Object.entries(nameTotals)
      .sort((a, b) => a[1] - b[1])
      .reduce((obj, [key, value]) => {
        obj[key] = Number(value.toFixed(2));
        return obj;
      }, {});

    console.log("Totals by categories (sorted):");
    console.log(sortedCategoryTotals);
    console.log("Totals by names (sorted):");
    console.log(sortedNameTotals);
    console.log("Totals:", Number(totals.toFixed(2)));
  } catch (Error) {
    console.error("Error occurred while parsing JSON data:", Error);
  }
});
