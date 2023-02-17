const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const {getFortune} = require('./controller')
const {addListItem} = require('./controller')
const {removeListItem} = require('./controller')
const {updateListItem} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/listItems", addListItem)
app.delete("/api/listItems:id", removeListItem)
app.put("/api/listItems:id", updateListItem)

app.listen(4000, () => console.log("Server running on 4000"));
