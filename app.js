const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const User = require('./models/user');
const app = express();

const userRoutes = require('./routes/user');

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use('/user',userRoutes);


// app.get('/user/get-user',)

// app.post('/user/',)

// app.delete('/user/',)


//User.sync({force: true})
User.sync()
.then((result) => {console.log(result ,'result in app.js')
    app.listen(3000,() => {
    console.log('server is listening on 3000')
});
})
.catch(error => console.log(error,'error in app.js'))

