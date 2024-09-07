import { FlipWords } from "@/components/FlipWords";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import FloristIcon from "@/icons/FloristIcon";
import HairDresserIcon from "@/icons/HairDresserIcon";
import PhotographIcon from "@/icons/PhotographIcon";
import ContainerLayout from "@/layouts/ContainerLayout";
import React from "react";
import ania from "../../public/ania.png";
import karolina from "../../public/karolina.png";
import anita from "../../public/anita.png";

const OurTeamSection = () => {
  const teamMembers = [
    {
      icon: <PhotographIcon />,
      name: "ANITA",
      photo: anita,
      description:
        " Uchwyci najpiękniejsze chwile Waszego dnia, tworząc niezapomniane wspomnienia w wyjątkowych kadrach.",
    },
    {
      icon: <FloristIcon />,
      name: "ANIA",
      photo: ania,
      description:
        "Skomponuje kwiatowe aranżacje, które dodadzą uroku i magii każdej ceremonii.",
    },
    {
      icon: <HairDresserIcon />,
      name: "KAROLINA",
      photo: karolina,
      description:
        " Stworzy elegancką fryzurę, która podkreśli Waszą urodę i wyjątkowość tego dnia.",
    }
  ];

  return (
    <section>
      <ContainerLayout>
        <FlipWords
          className="text-4xl px-4 lg:text-5xl w-full text-center mb-32 text-primary"
          words={["Nasz zespół"]}
        />
        <div className="flex justify-center gap-20 flex-wrap">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={index}
              icon={member.icon}
              name={member.name}
              photo={member.photo}
              description={member.description}
            />
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default OurTeamSection;
