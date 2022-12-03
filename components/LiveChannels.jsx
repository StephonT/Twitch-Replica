import React from "react";
import LiveChannelItem from "./LiveChannelItem";
import Live1 from "../public/assets/live/live1.jpeg";
import Live2 from "../public/assets/live/live2.jpeg";
import Live3 from "../public/assets/live/live3.jpeg";
import Live4 from "../public/assets/live/live4.jpeg";
import Live5 from "../public/assets/live/live5.jpeg";
import Live6 from "../public/assets/live/live6.jpeg";
import Live7 from "../public/assets/live/live7.jpeg";
import Live8 from "../public/assets/live/live8.jpeg";
import Live9 from "../public/assets/live/live9.jpeg";
import Live10 from "../public/assets/live/live10.jpeg";


const LiveChannels = () => {
  return (
    <div id="live" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text-[#9147ff]">Live Channels</span> we think you will
        like
      </h2>
      {/* container */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2">
        <LiveChannelItem img={Live1} profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/4f208a45-0e61-41fd-a696-a298b267fc71-profile_image-70x70.png" title="Last Days in Verdansk" user="Treadliglty" game="Modern Warfare: Warzone" />
        <LiveChannelItem img={Live2} profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/a9127e1a-9f32-49b9-beb2-289feb243a0a-profile_image-70x70.png" title="Eating the hottest chip in the world" user="XxJamalxX" game="Just Chatting" />
        <LiveChannelItem img={Live3} profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/467f84c7-1cb5-4c4e-a6db-b9b2f8347f1f-profile_image-70x70.png" title="Ninja Style Through The Ark" user="KrocStandsAlone" game="Lost Ark" />
        <LiveChannelItem img={Live4} profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/f62d850f-db95-4ff7-8700-c9e478955517-profile_image-70x70.png" title="Memes and Things" user="BirdmanFTG" game="Just Chatting" />
        <LiveChannelItem img={Live5} profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/a520132d-6638-4ea0-9e9a-13a15d7e675a-profile_image-70x70.png" title="Grinding w/Treadlightly" user="IshGrizz" game="Wodern Warfare: Warzone" />
        <LiveChannelItem img={Live6} profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/swagg-profile_image-a0898c1b75f6094d-70x70.png" title="Last Day On Twitch" user="Swagg" game="Modern Warfare: Warzone" />
        <LiveChannelItem img={Live7} profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/591d578e-9903-49f8-87a4-20fb0f41c793-profile_image-70x70.jpeg" title="Nuke Squad On Top" user="JSmoothHD" game="GTA" />
        <LiveChannelItem img={Live8} profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/1d8cd548-04fa-49fb-bfcd-f222f73482b6-profile_image-70x70.png" title="Greatest Twitch Entertainer" user="KaiCenat" game="Just Chatting" />
        <LiveChannelItem img={Live9} profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/4170045c-f7f3-4dde-ad0b-346a39cbbe92-profile_image-70x70.png" title="Movement King Doing His Thing" user="JoeWoe" game="Modern Warfare: Rebirth" />
        <LiveChannelItem img={Live10} profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/58b3444c-f6f8-4d06-9146-dc505b752cda-profile_image-70x70.png" title="Grind to the top!" user="DonDueces" game="Valorant" />
      </div>
    </div>
  );
};

export default LiveChannels;
