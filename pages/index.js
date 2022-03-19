import React, {Fragment} from "react";
import MeetupList from "../components/meetups/MeetupList";
import DataBase from "../data-access/DB-Connection";

function HomePage(props) {
    return (
        <Fragment>
            <MeetupList meetups={props.meetups}/>
        </Fragment>
    );
}

// This function executing before page render and allows us to prepare some
// data, or execute server side code. All code inside it executes on server side
// and never rich client. Function must return object with props field, this object
// will be pass to component. This method works only in page components inside pages
// folder.
export async function getStaticProps() {
    const dbClient = await DataBase.connectToDB();
    const meetupsCollection = dbClient.collection("meetups");
    const meetups = await meetupsCollection.find().toArray();
    DataBase.disconnectFromDB();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                id: meetup._id.toString(),
                title: meetup.title,
                address: meetup.address,
                img: meetup.image,
                description: meetup.description
            }))
        }
    }
}

// Do same job as getStaticProps, but it runs on each request from client.
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//
//     return loadMeetups()
//         .then(data => {
//             return {
//                 props: {
//                     meetups: data
//                 },
//             };
//         })
//         .catch(err => {
//             console.log("Error in pages/index.js: ", err);
//             return err;
//         });
// }

export default HomePage;