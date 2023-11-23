const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();

//Cors permitindo acesso ao consumo das APIS...
app.use(cors({
    credentials: true,
    optionsSuccessStatus: 200,
    //Trocar origin de acordo com a url do FRONT-END...
    origin: 'https://destino-verde.vercel.app'
}));

const cookieParser = require('cookie-parser');
const { getUser, newUser, verifyUser, loginUser, getToken } = require('./api/userAPI');
const { getImageInfo } = require('./api/imageAPI');
require('dotenv').config();

app.use(express.json({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// --> ROTAS <-- //
getUser(app);
newUser(app);
verifyUser(app);
loginUser(app);
getToken(app);
getImageInfo(app);
// --> ROTAS <-- //

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`))

