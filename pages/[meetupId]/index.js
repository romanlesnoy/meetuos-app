import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage() {
    return (
        <MeetupDetails
            image="https://images.unsplash.com/photo-1536663815808-535e2280d2c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlzYm9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            title="A first meetup"
            address="Some address, Lisbon"
            descpirtion="A first meetup"
        />
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: "m1",
                },
            },
            {
                params: {
                    meetupId: "m2",
                },
            },
        ],
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    console.log(meetupId);
    return {
        props: {
            meetupData: {
                id: "m1",
                image: "httpcls://images.unsplash.com/photo-1536663815808-535e2280d2c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlzYm9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                title: "A first meetup",
                address: "Some address, Lisbon",
                descpirtion: "A first meetup",
            },
        },
    };
}

export default MeetupDetailsPage;
