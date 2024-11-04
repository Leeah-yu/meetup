import React from 'react'
import Card from '../ui/Card'
import Image from 'next/image';
import classes from './MeetupItem.module.css'
import { useRouter } from 'next/router';

const MeetupItem = ({ id, image, title, address}) => {

  const router = useRouter();

  const handleClick = () => {
    router.push('/meetup/' + id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <image 
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto'}}
            src={Image}
            alt={title}

            />
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button 
            onClick={handleClick}>
            자세히 보기 
          </button>
        </div>
        </div>
      </Card>
    </li> 

  )
}

export default MeetupItem