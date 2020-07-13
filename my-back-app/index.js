const express = require('express') ;
const mongoose  = require('mongoose') ;
const bodyParser =require('body-parser') ;
const routes =require('./src/routes/userRoutes') ;

const app = express();
const PORT = 4050;

// mongoose connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://roort:root@cluster0.wlor8.mongodb.net/devopsdb?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() => {
  console.log("mongo connecte ");
}).catch(err => {
    console.log('Erreur mongo non connecte', err);
    process.exit();
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);