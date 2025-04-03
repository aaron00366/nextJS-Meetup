import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

export default function HomePage(props){
    return <>
    <Head>
        <title>React Meeting</title>
        <meta name='description' content='Browse a huge list highly active React meetups!'></meta>
    </Head>
    <MeetupList meetups={props.meetups} />
    </>
}
export async function getStaticProps() {
    const client = await MongoClient.connect(process.env.MONGODB_URI)
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    return {
        props: {
            meetups: meetups.map(meetup=>{
                return {
                    title: meetup.title,
                    image: meetup.image,
                    address: meetup.address,
                    description: meetup.description,
                    id: meetup._id.toString()
                }
            })
        },
        revalidate: 10 // In seconds
    }
}
// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;
//     return {
//         props:{
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }