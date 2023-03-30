import ContactModule from "../ContactModule";
import { Title, Text } from "@mantine/core";
import gg from "/public/experimental-young-people-working.png";
const ContactUs = () => {
  return (
    <div className="w-full flex justify-between pt-28 pb-24 max-lg:flex-col">
      <div className=" flex-auto p-12 flex flex-col items-end justify-start max-lg:items-center gap-5">
        <Title className="font-Poppins">Lets Get In Touch</Title>
        <Text className="font-Poppins max-w-md text-right max-lg:text-center">
          Consectetur mollit labore eu labore. Minim excepteur duis et fugiat.
          Est eu ea anim labore minim eiusmod enim aliquip cupidatat duis nisi.
          Velit laboris fugiat duis cupidatat fugiat qui irure exercitation
          magna labore enim.
        </Text>
        <img src={gg} className="w-2/4 h-auto" />
      </div>
      {/* <div className="flex-auto w-1/3 h-full">
        <img className="w-full h-auto" src={gg} />
      </div> */}
      <div className="flex-auto m-12">
        <ContactModule />;
      </div>
    </div>
  );
};

export default ContactUs;
