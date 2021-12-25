import React from "react";
import { UserPersonalInfo } from "./UserPersonalInfo/UserPersonalInfo";
import { UserRecommendations } from "./UserRecommendations/UserRecommendations";

export const UserProfile = () => {
  return (
    <section className="user-profile-section">
      <div className="container user-profile-container">
        <UserPersonalInfo />
        <UserRecommendations />
      </div>
    </section>
  );
};
