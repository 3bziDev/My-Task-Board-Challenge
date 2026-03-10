import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import ejs from 'ejs';
import methodOverride from "method-override"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan('dev'));
app.use(express.static('public'));
app.set("view engine", ejs);
app.use(methodOverride('_method'));

let tasks = [];

let currentId = 0;

app.get('/', (req, res) => {
    res.render('main.ejs', {data : tasks});
})

app.post('/add', (req, res) => {
    const add = req.body.add;
    res.render('taskDetails.ejs', {add});
})

app.post("/save", (req, res) => {
    const { name, description, icon, status } = req.body;
    tasks.push({
        id : currentId++,
        title: name,
        content: description,
        icon,
        status
    });
    currentId++;
    res.redirect("/");
});

app.get('/tasks/:id/edit', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    res.render('edite.ejs', {task});
})

app.put('/tasks/:id', (req, res) => {
const task = tasks.find(t => t.id === parseInt(req.params.id));
const { name, description, icon, status } = req.body;
task.title = name;
task.content = description;
task.icon = icon;
task.status = status;
res.redirect('/');
});

app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id)
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`localhost:${port}`)
})


