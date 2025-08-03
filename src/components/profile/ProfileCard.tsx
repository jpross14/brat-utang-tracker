import { User } from "@supabase/supabase-js";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

interface ProfileCardProps {
  friends: number;
  debts: number;
  credits: number;
  user: User;
}
const ProfileCard = ({ friends, debts, credits, user }: ProfileCardProps) => {
  return (
    <Card>
      <CardContent>
        <div className="">
          {/* Profile Picture */}
          {user.user_metadata.avatar_url && (
            <Image src={user.user_metadata.avatar_url} alt="Profile Picture" />
          )}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {/* Top part */}
            <div>
              <h2>{user.user_metadata.displayName}</h2>
              <p>{user.email}</p>
            </div>
            <div className="flex justify-between">
              {[
                {
                  label: "Friends",
                  value: friends,
                },
                {
                  label: "Debts",
                  value: debts,
                },
                {
                  label: "Credits",
                  value: credits,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center">
                  <span className="font-semibold">{item.label}:</span>
                  <span className="ml-2">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* Buttons */}
            <Button>edit profile</Button>
            <Button>logout</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
