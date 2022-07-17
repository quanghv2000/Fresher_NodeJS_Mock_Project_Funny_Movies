import React from 'react'
import { UserLayout } from '../../../../components/user-layout'
import { VideoList } from '../../../../components/video-list'

export const YourVideo = () => {
  return (
    <div>
      <UserLayout content={<VideoList />} />
    </div>
  )
}
