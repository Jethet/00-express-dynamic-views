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
    res.render('student');
});



app.listen(port, () => {
    console.log('Server running');
});