const fs = required('fs');
const trips = JSON.parse (fs.readfileSync('./data/trips.json', 'utf8'));

/* GET travel view */
const travel = (req, res) => {
res.render('travel',  { title: pageTitle, trips});
};

module.exports = {
    travel
};