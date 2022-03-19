import React from "react";
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A First Meetup",
        image: "https://cdn.motor1.com/images/mgl/0x6J3/s1/4x3/ferrari-sf90-stradale.webp",
        address: "Some address ",
        description: "First meetup"
    },
    {
        id: "m2",
        title: "A Second Meetup",
        image: "https://cdn.motor1.com/images/mgl/0x6J3/s1/4x3/ferrari-sf90-stradale.webp",
        address: "Some address ",
        description: "Second meetup"
    }
];

function HomePage() {
    return (
        <MeetupList meetups={DUMMY_MEETUPS}/>
    );
}

export default HomePage;