import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection URI
const uri = "mongodb://0.0.0.0";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
async function connectToDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if we cannot connect
  }
}

connectToDB();

// Add a user record
async function addUserRecord(req, res) {
  try {
    const db = client.db("mydb");
    const userCollection = db.collection("user");

    const { username, password, email, mobile } = req.body;

    if (!username || !password || !email) {
      return res.status(400).send("Required fields are missing");
    }

    const inputDoc = { username, password, email, mobile };

    await userCollection.insertOne(inputDoc);
    res.json({ operation: "success" });
  } catch (err) {
    console.error("Error in addUserRecord:", err);
    res.status(500).send("Error: " + err.message);
  }
}

// Handle login by POST request
async function loginByPost(req, res) {
  try {
    const db = client.db("mydb");
    const userCollection = db.collection("user");

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Required fields are missing");
    }

    const query = { email, password };
    const userRef = await userCollection.findOne(query);

    if (!userRef) {
      return res.status(401).send("Invalid email or password");
    }

    res.json(userRef);
  } catch (err) {
    console.error("Error in loginByPost:", err);
    res.status(500).send("Error: " + err.message);
  }
}

// Add a contact us record
app.post('/addtodo', async (req, res) => {
  try {
    const db = client.db("mydb");
    const contactUsCollection = db.collection("contactus");

    const { name, email, description } = req.body;

    if (!name || !email || !description) {
      return res.status(400).send("Required fields are missing");
    }

    const contactData = { name, email, description };

    await contactUsCollection.insertOne(contactData);
    res.status(200).json({ operation: "success" });
  } catch (error) {
    console.error("Error in addtodo:", error);
    res.status(500).json({ error: error.message });
  }
});

// Routes
app.post("/addUser", addUserRecord);
app.post("/login-by-post", loginByPost);

// Start the server
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
