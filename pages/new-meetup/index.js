import { useRouter } from 'next/router';
import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
export default function NewMeetupPage() {
    const router = useRouter();
    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
        router.push('/');
    }
    return <>
    <Head>
        <title>Add a New Meetup</title>
        <meta name='description' content='Add your own meetups and create amazing networking oppertunities.'></meta>
    </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </>
};