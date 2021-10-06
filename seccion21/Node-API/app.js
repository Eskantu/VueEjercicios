const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const { Collection } = require("mongodb");
const DATABASE_NAME = "api_Node"
const CONNECTION_URL = "mongodb+srv://node:bhu4TqCBwnW5tHjP@cluster0.ltn1g.mongodb.net/api_Node?retryWrites=true&w=majority";
var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.listen(5001, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            console.log(CONNECTION_URL)
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("persona");
        console.log("Connected to " + DATABASE_NAME + " !");
    })
});

app.post("/person", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    })
})

app.put("/person/:id", (request, response) => {
    collection.replaceOne({ "_id": new ObjectId(request.params.id) }, request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    })
})

app.get("/person", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    })
})

app.get("/", (request, response) => {
    response.send('API With Node + Express + Mongo')
})

app.get("/person/:id", (request, response) => {
    collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.delete("/person/:id", (request, response) => {
    collection.remove({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});