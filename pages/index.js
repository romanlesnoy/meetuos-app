import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A first meetups ",
        image: "https://images.unsplash.com/photo-1536663815808-535e2280d2c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlzYm9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        address: "Some address, Lisbon",
        description: "A first meetup",
    },
    {
        id: "m2",
        title: "A second meetups ",
        image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        address: "Some address, Berlin",
        description: "A second meetup",
    },
];

function HomePage(props) {
    return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
        revalidate: 10,
    };
}

export default HomePage;
