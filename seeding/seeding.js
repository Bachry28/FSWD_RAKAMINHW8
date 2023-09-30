var pool = require('../query.js');
var fs = require('fs');

const seedQuery = fs.readFileSync('seeding/seeding.sql', { encoding: 'utf8' });
pool.query(seedQuery, (err, res)=> {
    console.log(err);
    console.log('seeding complete');
    pool.end();
})