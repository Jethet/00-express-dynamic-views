const express = (require('express'));
const app = express();

const port = 3000


app.listen(port, () => {
    console.log('Server running');
});

// MIDDLEWARE
app.use(express.static(__dirname + '/public'));
// set handlebars:
app.set('views', __dirname + '/views');

app.set('view engine', 'hbs');