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

    const categories = ["a", "b", "c", "d", "e", "f"];
    const names = ["I", "J", "K", "L", "M", "N"];

    categories.forEach((category) => {
      categoryTotals[category] = 0;
    });

    names.forEach((name) => {
      nameTotals[name] = 0;
    });

    jsonData.forEach((item) => {
      const key = Object.keys(item)[0];
      const { nm, amt } = item[key];

      categoryTotals[key] += Number(amt);
      nameTotals[nm] += Number(amt);
      totals += Number(amt);
    });

    // Convert categoryTotals and nameTotals into arrays
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


          // Calculate the sum of all categories and names
    console.log("Totals by categories (sorted):");
    console.log(sortedCategoryTotals);
    console.log("Totals by names (sorted):");
    console.log(sortedNameTotals);
    console.log("Totals:", Number(totals.toFixed(2)));
  } catch (Error) {
    console.error("Error occurred while parsing JSON data:", Error);
  }
});
