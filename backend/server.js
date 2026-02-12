const express = require("express");
const cors = require("cors");
const Connected = require("./connection");
const AddCartAction = require("./controllers/addtocart_controller");
const GetllCardsAction = require("./controllers/allcards_controller");
const DeleteCardAction = require("./controllers/deletecard_controller");
const RegisterAction = require("./controllers/register_controller");
const LoginAction = require("./controllers/login_controller");

const app = express();
app.use(express.json());
app.use(cors());

Connected();

app.post('/login', LoginAction);

app.post('/register', RegisterAction);

app.post("/addcards", AddCartAction);

app.post('/allcards', GetllCardsAction);

app.post('/deletecard', DeleteCardAction);

app.listen(5000, '0.0.0.0', () => {
    console.log("Server is listening on 5000");
    
});
