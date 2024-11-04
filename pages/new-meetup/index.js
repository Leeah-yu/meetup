import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const NewMeetUp = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title> 모임 생성하기 </title>
      </Head>
      <NewMeetupForm router={router} />
    </>

  )
}

export default NewMeetUp