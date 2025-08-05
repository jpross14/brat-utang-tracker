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
  console.log(user.user_metadata.avatar_url);
  return (
    <Card className="flex h-full flex-col">
      <CardContent className="flex gap-4 px-5 py-10">
        <div className="flex items-center">
          <div className="relative flex h-60 w-60 rounded-full">
            {/* Profile Picture */}
            <Image
              src={
                user.user_metadata.avatar_url
                  ? user.user_metadata.avatar_url
                  : "/charli-login.png"
              }
              alt="Profile Picture"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 px-20">
            <div className="flex flex-col gap-2">
              {/* Top part */}
              <div>
                <p className="text-4xl">{user.user_metadata.displayName}</p>
                <p className="font-normal text-xl">{user.email}</p>
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
                  <div
                    key={item.label}
                    className="flex w-full flex-col items-center text-center px-10"
                  >
                    <span className="ml-2">{item.value}</span>
                    <span className="text-lg">{item.label}:</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-around gap-2">
              <Button className="glass" variant="ghost">
                edit profile
              </Button>
              <Button className="glass" variant="ghost">
                logout
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
