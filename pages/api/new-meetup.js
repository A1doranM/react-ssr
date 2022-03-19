import DataBase from "../../data-access/DB-Connection";

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const dbClient = await DataBase.connectToDB();
        const meetupsCollection = dbClient.collection("meetups");
        const result = await meetupsCollection.insertOne(data);
        DataBase.disconnectFromDB();

        console.log("Result of inserting: ", result);

        res.status(201).json({
            message: "Meetup inserted!"
        });
    }
}

export default handler;