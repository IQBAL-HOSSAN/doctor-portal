const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// MiddleWare
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.n5s4a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const treatmentCollection = client
      .db("doctors-portal")
      .collection("treatment");

    app.get("/treatment", async (req, res) => {
      const query = {};
      const cursor = treatmentCollection.find(query);
      const treatments = await cursor.toArray();
      res.send(treatments);
    });
  } finally {
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  console.log("server connected");
  res.send("server connected");
});

app.listen(port, () => {
  console.log("port:", port);
});
