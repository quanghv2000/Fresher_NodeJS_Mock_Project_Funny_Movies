import React from "react";
import { UserLayout } from "../../../components/user-layout";
import { HomeContent } from "../base/content";

export const Home = () => {
  return (
    <div>
      <UserLayout
        content={
          <HomeContent />
        }
      />
    </div>
  );
};
