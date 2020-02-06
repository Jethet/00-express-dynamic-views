const express = (require('express'));
const app = express();

const port = 3000


// MIDDLEWARE
app.use(express.static(__dirname + '/public'));
// set handlebars:
app.set('views', __dirname + '/views');

app.set('view engine', 'hbs');


// ROUTES
app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/student', (req, res, next) => {

    const data = {      // This can be used as parameter in the render function
        name: "Ironhacker",
        bootcamp: "<h3>WebDev - Barcelona</h3>",
        message: "Rocking it!",
        address: "Carrer de Lull",
        cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlin"],
        countries: [
        "Spain",
        "France",
        "Germany",
        "Portugal",
        "United States",
        "Brazil"
        ],
        info: { name: "Ironhacker", campus: "Barcelona", year: 2019 },
        addressObj: {
        street: "Sardenya",
        number: 100
        }
  };
        // address: ""
        // address: 0
        // address: undefined
        // address: false
        // address: null
        // address: []
        // address: NaN
        
        res.render('student', data);
    });


app.listen(port, () => {
    console.log('Server running');
});