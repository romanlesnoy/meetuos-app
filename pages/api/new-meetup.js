import { MongoClient } from "mongodb";

async function handler(req, res) {
    const { DB_URL } = process.env;

    if (req.method === "POST") {
        const data = req.body;

        const client = await MongoClient.connect(DB_URL);

        const db = client.db();

        const meetupsCollection = db.collection("meetups");

        const result = await meetupsCollection.insertOne(data);

        client.close();

        res.status(201).json({ message: "Meetup add to db!" });
    }
}

export default handler;
