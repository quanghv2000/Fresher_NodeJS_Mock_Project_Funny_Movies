import React from 'react'
import { UserLayout } from '../../../../components/user-layout'
import { VideoList } from '../../../../components/video-list'

export const WatchLater = () => {
  const videos = [
    {
      id: 1,
      title: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      description: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      numOfView: 46837234,
      createdDate: new Date(),
      url: "https://www.youtube.com/watch?v=b7DxNXHmxmY",
      sharedBy: {
        id: 1,
        name: "Barca Studio",
      },
    },
    {
      id: 2,
      title: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      description: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      numOfView: 468374,
      createdDate: new Date(),
      url: "https://www.youtube.com/watch?v=L0_hPoL0yM0",
      sharedBy: {
        id: 1,
        name: "Barca Studio",
      },
    },
    {
      id: 3,
      title: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      description: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      numOfView: 4683374,
      createdDate: new Date(),
      url: "https://www.youtube.com/watch?v=sH_tyFTpvUI",
      sharedBy: {
        id: 1,
        name: "Barca Studio",
      },
    },
    {
      id: 4,
      title: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      description: "A Barcelona 2008-09 Tiki-Taka Masterclass",
      numOfView: 468323744,
      createdDate: new Date(),
      url: "https://www.youtube.com/watch?v=KePu2GTZlCE",
      sharedBy: {
        id: 1,
        name: "Barca Studio",
      },
    },
  ];
  return (
    <div>
      <UserLayout content={<VideoList videos={videos}/>} />
    </div>
  )
}
