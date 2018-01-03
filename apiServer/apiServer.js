const express = require("express");
const bodyParser = require("body-parser");
const open = require("open");

const cors = require("cors");
const app = express();
const port = process.env.port || 3001;
const router = express.Router();

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin:"*"}));

//Routing
app.use("/", router);

//GET Requests

router.get("/api/ship/", (req, res) => {
    res.json(ships);
});


router.get("/api/ship/:id", (req, res) => {
    const shipID = req.params.id;
    const currentShip = ships.find((ship) => ship.id == shipID);
    if (currentShip) { res.json(currentShip); }
    else { res.sendStatus(404); }
});

//POST Requests
router.post("/api/ship/", (req, res) => {
    const postShip = req.body;
    console.log(postShip);
    console.log(isValidShip(postShip) +""+ !ships.find((a) => a.id == postShip.id))
    const isValid = isValidShip(postShip) && !ships.find((a) => a.id == postShip.id);
    console.log(isValid);
    if (isValid) {
        ships.push(postShip);
        res.send(postShip);
    }
    else { res.sendStatus(500) }
});

//PUT Requests
router.put("/api/ship/:id", (req, res) => {
    const shipID = req.params.id;
    const currentShip = ships.find((ship) => ship.id == shipID);
    if (currentShip) {
        const putShip = req.body;
        const isValid = isValidShip(putShip);
        if (isValid) {
            currentShip.name = putShip.name;
            currentShip.speed = putShip.speed;
            currentShip.minCrew = putShip.minCrew;
            currentShip.length = putShip.length;
            currentShip.passengers = putShip.passengers;
            res.sendStatus(204);
        }
        else { res.sendStatus(404); }
    }
});

//DELETE Request
router.delete("/api/ship/:id", (req, res) => {
    const shipID = req.params.id;
    const currentShip = ships.findIndex((ship) => ship.id == shipID);
    if (currentShip !== -1) {
        ships.splice(currentShip, 1);
        res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }
});

//mock data
const ships = [
    {
        id: 0,
        name: "Millennium Falcon",
        speed: 1050,
        minCrew: 1,
        length: 34.37,
        passengers: 6
    },
    {
        id: 1,
        name: "Ghost",
        speed: 1025,
        minCrew: 1,
        length: 43.9,
        passengers: 8
    },
    {
        id: 2,
        name: "X-Wing",
        speed: 1050,
        minCrew: 1,
        length: 12,
        passengers: 1
    }
]

function isValidShip(ship) {
    return "id" in ship && "name" in ship && "speed" in ship && "minCrew" in ship && "length" in ship && "passengers" in ship;
}

app.listen(port, (err) => {
    if (err) { console.log(err); }
    else { open(`http://localhost:${port}`) }
});