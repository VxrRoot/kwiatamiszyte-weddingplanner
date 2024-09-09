"use client";
import { FlipWords } from "@/components/FlipWords";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import FloristIcon from "@/icons/FloristIcon";
import HairDresserIcon from "@/icons/HairDresserIcon";
import PhotographIcon from "@/icons/PhotographIcon";
import ContainerLayout from "@/layouts/ContainerLayout";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import ania from "../../public/ania.png";
import karolina from "../../public/karolina.png";
import anita from "../../public/anita.png";
import Lines from "@/components/Lines";

const OurTeamSection = () => {
  const teamMembers = [
    {
      icon: <PhotographIcon />,
      name: "ANITA",
      photo: anita,
      description:
        "Uchwyci najpiękniejsze chwile Waszego dnia, tworząc niezapomniane wspomnienia w wyjątkowych kadrach.",
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
        "Stworzy elegancką fryzurę, która podkreśli Waszą urodę i wyjątkowość tego dnia.",
    },
  ];

  // Animation variants for the fade-in effect
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.6, // Delays each card by 0.2 seconds
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative" id="nasz-zespol">
      <Lines />
      <ContainerLayout>
        <h2 className="text-center text-primary pb-32 text-5xl">Nasz zespół</h2>
        <div className="flex justify-center gap-20 flex-wrap">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              custom={index} // Pass index as custom value for delay
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger animation when in view
              variants={fadeInVariants}
              className="motion-card" // Optional class for additional styling
            >
              <ProfileCard
                icon={member.icon}
                name={member.name}
                photo={member.photo}
                description={member.description}
              />
            </motion.div>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default OurTeamSection;
