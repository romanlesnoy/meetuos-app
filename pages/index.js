import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Nextjs demo react meetups" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    );
}

export async function getStaticProps() {
    const { DB_URL } = process.env;
    const client = await MongoClient.connect(DB_URL);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 10,
    };
}

export default HomePage;
