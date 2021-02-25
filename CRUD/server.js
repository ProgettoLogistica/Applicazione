const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = /*process.env.PORT || */ 5000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send("Hello World");
});

const userRoutes = require('./src/routes/user.routes')
const parcelRoutes = require('./src/routes/parcel.routes')
const credentialRoutes = require('./src/routes/credential.routes')

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/parcels', parcelRoutes)
app.use('/api/v1/credentials', credentialRoutes)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});