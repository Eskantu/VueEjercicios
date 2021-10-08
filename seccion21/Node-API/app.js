//#region Imports
import Express from "express";
// import MongoClient from "mongodb";
// import ObjectId from "mongodb";
// import { Collection } from "mongodb";
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import history from 'connect-history-api-fallback'
//#endregion

//#region Configurations
const DATABASE_NAME = "api_Node"
const CONNECTION_URL = "mongodb+srv://node:bhu4TqCBwnW5tHjP@cluster0.ltn1g.mongodb.net/api_Node?retryWrites=true&w=majority";
var app = Express();
app.use(morgan('tiny'))
app.use(cors())
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(history())
app.use(Express.static(path.join(__dirname, 'public')))

app.set('puerto', process.env.PORT || 5001)
app.listen(app.get('puerto'), () => {
    // MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    //     if (error) {
    //         console.log(CONNECTION_URL)
    //         throw error;
    //     }
    //     database = client.db(DATABASE_NAME);
    //     collection = database.collection("persona");
    // })
    console.log("Connected to " + DATABASE_NAME + " ! since port:", app.get('puerto'));
});
//#endregion

// app.post("/person", (request, response) => {
//     collection.insert(request.body, (error, result) => {
//         if (error) {
//             return response.status(500).send(error);
//         }
//         response.send(result.result);
//     })
// })

// app.put("/person/:id", (request, response) => {
//     collection.replaceOne({ "_id": new ObjectId(request.params.id) }, request.body, (error, result) => {
//         if (error) {
//             return response.status(500).send(error);
//         }
//         response.send(result.result);
//     })
// })

// app.get("/person", (request, response) => {
//     collection.find({}).toArray((error, result) => {
//         if (error) {
//             return response.status(500).send(error);
//         }
//         response.send(result);
//     })
// })

// app.get("/", (request, response) => {
//     response.send('API With Node + Express + Mongo +  nodemon')
// })

// app.get("/person/:id", (request, response) => {
//     collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
//         if (error) {
//             return response.status(500).send(error);
//         }
//         response.send(result);
//     });
// });

// app.delete("/person/:id", (request, response) => {
//     collection.remove({ "_id": new ObjectId(request.params.id) }, (error, result) => {
//         if (error) {
//             return response.status(500).send(error);
//         }
//         response.send(result);
//     });
// });