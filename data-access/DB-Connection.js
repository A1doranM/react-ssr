import {MongoClient} from "mongodb";

class DataBase{
    static #DB_CONNECTION = null;

    static connectToDB() {
        return MongoClient.connect("mongodb+srv://Aldoran:1q2w3e3e2w1q4r@clusternextjs.l54n6.mongodb.net/meetupsApp?retryWrites=true&w=majority")
            .then((connection) => {
                this.#DB_CONNECTION = connection;
                return connection.db();
            })
            .catch((err) => {
                console.log("Can not connected to DB: ", err);
                return err;
            });
    };

    static disconnectFromDB() {
        if(this.#DB_CONNECTION) {
            this.#DB_CONNECTION.close();
        }
    };
}

export default DataBase;

