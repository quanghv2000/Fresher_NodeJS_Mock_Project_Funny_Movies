import React from "react";
import { useSelector } from "react-redux";
import { UserLayout } from "../../../components/user-layout";
import { VideoList } from "../../../components/video-list/index";

export const Home = () => {
  const state = useSelector(
    (state) => state?.HomePageReducer
  );
  const videos = state?.dataResponse;
  console.log(state);
  return (
    <div>
      <UserLayout content={<VideoList videos={videos} />} />
    </div>
  );
};
