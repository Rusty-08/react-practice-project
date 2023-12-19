import Button from "../components/Button";
import profile from "../assets/luffy.jpg";
import { Bell, Settings } from "lucide-react";
import useClickOutside from "../components/ClickOutside";
import Image from "../components/Image";

function Profile() {
  const [profileRef, showProfile, setShowProfile] = useClickOutside(false);

  return (
    <div ref={profileRef} className="md:relative">
      <a
        href="/"
        className="flex ml-2.5 h-10 items-center"
        onClick={(e) => {
          e.preventDefault();
          setShowProfile(!showProfile);
        }}
      >
        <Image variant="profile" src={profile} />
      </a>
      {showProfile && (
        <div className="absolute overflow-hidden transition-all duration-300 right-0 z-10 mt-2 w-[20rem] origin-top-right sm:right-0 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex items-center gap-4 border-b ps-5 h-[6.5rem] pe-3">
            <div className="h-full pt-4">
              <Image className="w-10 h-10" variant="profile" src={profile} />
            </div>
            <div className="">
              <p className="text-secondary-dark">Rusty G. Gunao</p>
              <p className="text-secondary-dark mb-1">@RustyGGunao</p>
              <a className="text-blue-600 text-sm" href="">
                View your channel
              </a>
            </div>
          </div>
          <div
            style={{
              height: "calc(100vh - 10rem)",
            }}
            className="hover-scroll overflow-y-scroll md:scrollbar-thin"
          ></div>
        </div>
      )}
    </div>
  );
}

export default Profile;
