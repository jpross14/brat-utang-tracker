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
    <main className="h-full p-7 space-y-5">
      <div className="glass flex h-18 w-fit items-center rounded-[1.75rem] px-5 text-5xl font-medium blur-[1px]">
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
