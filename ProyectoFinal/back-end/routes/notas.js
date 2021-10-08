import express from 'express'
import Nota from '../Models/Nota'
const router = express.Router();

router.post("/nota", async (request, response) => {
    const body = request.body
    console.log(body)
    try {
        const notaDB = await Nota.create(body)
        return response.status(200).json(notaDB)
    } catch (error) {
        return response.status(500).json({
            mensaje: 'Ocurrio un error', error
        })
    }
})

router.get("/nota/:id", async (request, response) => {
    const _id = request.params.id
    console.log(_id)
    try {
        const notaDB = await Nota.findOne({ _id })
        return response.json(notaDB)
    } catch (error) {
        return response.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
})

router.get("/nota", async (request, response) => {
    try {
        const notaDB = await Nota.find()
        return response.json(notaDB)
    } catch (error) {
        return response.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
})
router.delete("/nota/:id", async (request, response) => {
    const _id = request.params.id
    try {
        const notaDB = await Nota.findByIdAndDelete({ _id })
        return response.json(notaDB)
    } catch (error) {
        return response.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
})


router.put("/nota/:id", async (request, response) => {
    const _id = request.params.id
    const body = request.body
    try {
        const notaDB = await Nota.findByIdAndUpdate(_id, body, { new: true })
        return response.json(notaDB)
    } catch (error) {
        return response.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
})

module.exports = router

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
