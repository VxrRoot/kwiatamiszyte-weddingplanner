import React from "react";
import styles from "./StepList.module.scss"; // Import stylów SCSS
import ContractIcon from "@/icons/ContractIcon";
import CakeIcon from "@/icons/CakeIcon";
import AggrementIcon from "@/icons/AggrementIcon";
import WomanIcon from "@/icons/WomanIcon";
import ContactIcon from "@/icons/ContactIcon";

const StepList: React.FC = () => {
  return (
    <ol className={styles.stepList}>
      <li className={styles.stepListItem}>
        <div className={styles.stepListItemInner}>
          <div className={styles.content}>
            <div className={styles.body}>
              <h2>Pierwsze Spotkanie</h2>
              <p>
                Na początku najważniejsze jest, abyśmy się poznali. Czy spotkamy
                się osobiście, czy online, to Wasz wybór. Podczas rozmowy
                omówimy Wasze marzenia i wizję ślubu oraz wesela. Dzięki temu
                możemy idealnie dopasować ofertę do Waszych potrzeb i oczekiwań.
              </p>
            </div>
            <div className={styles.icon}>
              <ContactIcon />
            </div>
          </div>
        </div>
      </li>
      <li className={styles.stepListItem}>
        <div className={styles.stepListItemInner}>
          <div className={styles.content}>
            <div className={styles.body}>
              <h2>Personalizowana Oferta</h2>
              <p>
                Po wstępnym spotkaniu przygotujemy dla Was spersonalizowaną
                propozycję – taką, która uwzględni każdy szczegół Waszego
                wyjątkowego dnia. Skupimy się na tym, aby wszystko było idealnie
                dopasowane do Waszych preferencji.
              </p>
            </div>
            <div className={styles.icon}>
              <ContractIcon />
            </div>
          </div>
        </div>
      </li>
      <li className={styles.stepListItem}>
        <div className={styles.stepListItemInner}>
          <div className={styles.content}>
            <div className={styles.body}>
              <h2>Podpisanie Umowy</h2>
              <p>
                Kiedy wszystko będzie gotowe, przystąpimy do podpisania umowy.
                Od tej chwili zaczynamy działać razem, organizując Wasze
                wyjątkowe wydarzenie krok po kroku. Dbamy o ustalenie
                harmonogramu i dopracowanie każdego detalu przyjęcia.
              </p>
            </div>
            <div className={styles.icon}>
              <AggrementIcon />
            </div>
          </div>
        </div>
      </li>
      <li className={styles.stepListItem}>
        <div className={styles.stepListItemInner}>
          <div className={styles.content}>
            <div className={styles.body}>
              <h2>Organizacja Przyjęcia</h2>
              <p>
                Na etapie organizacji proponujemy sprawdzone rozwiązania i
                rekomendujemy zaufanych usługodawców. Naszym celem jest
                zapewnienie, że każdy element uroczystości będzie spełniał Wasze
                oczekiwania.
              </p>
            </div>
            <div className={styles.icon}>
              <CakeIcon />
            </div>
          </div>
        </div>
      </li>
      <li className={styles.stepListItem}>
        <div className={styles.stepListItemInner}>
          <div className={styles.content}>
            <div className={styles.body}>
              <h2>Koordynacja Dnia Ślubu</h2>
              <p>
                W dniu ślubu zajmujemy się pełną koordynacją – od poranka do
                późnej nocy. Pilnujemy, aby wszystko przebiegło zgodnie z
                planem, bez stresu i niespodzianek, dzięki czemu Wy możecie
                skupić się na cieszeniu się każdą chwilą.
              </p>
            </div>
            <div className={styles.icon}>
              <WomanIcon />
            </div>
          </div>
        </div>
      </li>
    </ol>
  );
};

export default StepList;
