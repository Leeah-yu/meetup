import React from 'react'
import { HostAddress, MongoClient, ObjectId } from 'mongodb'
import MeetupDetail from '@/components/meetups/MeetupDetail'
import Head from 'next/head'

const DetailPage = ({ meetupData }) => {

  

  return (

    <>

      <Head> 
        <title>{meetupData.title}</title>
      
      </Head>
      <MeetupDetail
        image={meetupData.image}
        title={meetupData.title}
        address={meetupData.address}
        description={meetupData.description}
        />

    </>

  )
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_URI)
  const db = client.db('meetupDB');
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { projection: { _id: 1 } }).toArray();
  client.close();


  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString()

      }
    }))
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId

  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = client.db('meetupDB');
  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
  _id: new ObjectId(meetupId)
});


    client.close();


  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      }
    }
  }

}

export default DetailPage