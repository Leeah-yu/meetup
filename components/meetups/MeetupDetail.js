import React from 'react'
import classes from './MeetupDetail.module.css'
import Image from 'next/image'

const MeetupDetail = ({ image, title, address, description }) => {
  return (
    <section className={classes.detail}>
      <Image 
      width={0}
      height={0}
      sizes='100vw'
      style={{ width: '100%', height: 'auto'}}
      src={image}
      alt={title}/>

      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>


  )
}

export default MeetupDetail