import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://static.independent.co.uk/2025/01/03/14/newFile-12.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://static.independent.co.uk/2025/01/03/14/newFile-12.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!'
    },
    
]
export default function HomePage(){
    return <MeetupList meetups={DUMMY_MEETUPS} />
}