// components/ProfileCard.tsx
"use client";

import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import { CardBody, CardContainer, CardItem } from "../3dCard";

// Define the props type for the ProfileCard component
interface ProfileCardProps {
  icon: ReactNode; // Accept any React node, usually an icon component
  name: string;
  photo: StaticImageData;
  description: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  icon,
  name,
  photo,
  description,
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#E0CDBE] h-auto relative group/card w-auto sm:w-[20rem]  rounded-xl  border border-rouned-top ">
        <CardItem translateZ="30" className="w-full flex justify-center mt-4">
          <Image
            src={photo}
            className="-mt-48 h-[30rem] w-[15rem] object-cover rounded-xl drop-shadow-xl "
            alt={`${name}'s photo`}
          />
        </CardItem>
        <CardItem as="div" translateZ="30" className="bg-[#F9F5F4] h-[13.5rem]">
          <CardItem
            as="div"
            translateZ="30"
            className="text-primary text-sm max-w-sm -mt-4 flex justify-center w-full"
          >
            <div className="-mt-[2.5rem]">{icon}</div>
          </CardItem>
          <CardItem
            as="h3"
            translateZ="30"
            className="text-primary flex justify-center w-full max-w-sm mt-2 text-2xl"
          >
            <div className="border-b-2 border-primary">{name}</div>
          </CardItem>
          <CardItem
            as="p"
            translateZ="30"
            className="text-primary text-center max-w-sm mt-2 pb-10 px-8 text-md"
          >
            {description}
          </CardItem>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};
