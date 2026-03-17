const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('/Users/shashankshetty/Downloads/Pan-India_Bus_Routes.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    fs.writeFileSync('bus_routes.json', JSON.stringify(results, null, 2));
    console.log('Done ✅');
  });
