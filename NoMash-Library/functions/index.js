/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
// const {doc} = require("firebase/firestore");
// const {error} = require("firebase-functions/logger");
const cors = require("cors")({origin: true});
// const logger=require("firebase-functions/logger");

admin.initializeApp();


exports.countBooks = onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;
      response.status(200).send({count});
    } catch (error) {
      console.error("Error counting books:", error.message);
      response.status(500).send("Error counting books");
    }
  });
});

exports.getAllBooks = onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const booklist = [];
      snapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        booklist.push(doc.data());
      });
      response.status(200).send({booklist});
    } catch (error) {
      console.error("Error counting books:", error.message);
      response.status(500).send("Error counting books");
    }
  });
});

exports.addBook = onRequest(async (request, response) => {
  cors(request, response, async () => {
    try {
      const {isbn, name} = request.body || {};
      if (!isbn || !name) {
        return response
            .status(400)
            .json({error: "'isbn' and 'name' are required fields."});
      }
      const docRef = await admin.firestore().collection("books").add({
        isbn,
        name,
      });
      return response.status(201)
          .json({id: docRef.id, message: "Book added succuseefully!"});
    } catch (error) {
      console.error("Error add books:", error.message);
      response.status(500).send("Error add book");
    }
  });
});
// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({maxInstances: 10});

// Create and deploy your first functions

// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
