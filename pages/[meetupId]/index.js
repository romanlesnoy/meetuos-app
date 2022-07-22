import { Fragment } from "react";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";

import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta
                    name="description"
                    content={props.meetupData.descpirtion}
                />
            </Head>
            <MeetupDetails
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                descpirtion={props.meetupData.descpirtion}
            />
        </Fragment>
    );
}

export async function getStaticPaths() {
    const { DB_URL } = process.env;
    const client = await MongoClient.connect(DB_URL);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        })),
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const { DB_URL } = process.env;
    const client = await MongoClient.connect(DB_URL);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId),
    });

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        },
    };
}

export default MeetupDetailsPage;
