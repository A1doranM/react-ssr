import React, {Fragment} from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import DataBase from "../../data-access/DB-Connection";
import {ObjectId} from "mongodb";

function MeetupDetails({
                           id,
                           img,
                           title,
                           address,
                           description
                       }) {
    return (
        <Fragment>
            <MeetupDetail img={img}
                          address={address}
                          description={description}
                          title={title}
            />
        </Fragment>
    );
}

export async function getStaticPaths() {
    const dbClient = await DataBase.connectToDB();
    const meetupsCollection = dbClient.collection("meetups");
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
    DataBase.disconnectFromDB();

    return {
        fallback: "blocking",
        paths: meetups.map(meetup => ({params: {meetupId: meetup._id.toString()}}))
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const dbClient = await DataBase.connectToDB();
    const meetupsCollection = dbClient.collection("meetups");
    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});
    DataBase.disconnectFromDB();

    return {
        props: {
            id: selectedMeetup._id.toString(),
            title: selectedMeetup.title,
            img: selectedMeetup.image,
            description: selectedMeetup.description
        }
    };
}

export default MeetupDetails;