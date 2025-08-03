import React from "react";
import { User } from "@supabase/supabase-js";
import ProfileCard from "./ProfileCard";

interface ProfilePageProps {
  friends: number;
  debts: number;
  credits: number;
  user: User;
}
const ProfilePage = ({ friends, debts, credits, user }: ProfilePageProps) => {
  return (
    <main className="p-7">
      <div className="glass blur-[1px] w-fit h-18 text-5xl font-medium flex items-center rounded-[1.75rem] px-5">
        <span className="text-center">Profile</span>
      </div>
      <div className="flex">
    <ProfileCard
    
      friends={friends}
      debts={debts}
      credits={credits}
      user={user}
    />
      </div>
    </main>
  );
};

export default ProfilePage;
