import React from "react";
import Heading from "../../components/heading";
import styles from "../../styles/portfolio.module.scss";
import gitarrkungen from "../../images/gitarrkungen.jpg";
import vardeokning from "../../images/vardeokning.jpg";
import liatracker from "../../images/liatracker.jpg";
import code from "../../images/code.jpg";
import htmlcss from "../../images/htmlcss.jpg";

const PortfolioItem = ({title, url, img, children}) => (
  <div className={styles.item}>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={title} className={styles.img} />
      <h3>{title}</h3>
    </a>
    <p>
      {children}
    </p>
  </div>
);

export default() => (
  <div className={styles.content}>
    <Heading>Portfolio</Heading>
    <div className={styles.items}>
      <PortfolioItem title="Gitarrkungen" url="https://awkes.github.io/Gitarrkungen/" img={gitarrkungen}>
        Examinerande projektarbete i kursen JavaScript 2 på Nackademin. 
        Vår uppgift var att skapa en webbshop med minst 10 produkter som ska kunna läggas till i varukorg och sedan "skickas" som en beställning.
        I arbetet använder vi oss av Bootstrap, jQuery och Web Storage API.
        Projektarbetet gjordes ihop med en klasskamrat.
      </PortfolioItem>
      <PortfolioItem title="Värdeökning" url="https://awkes.github.io/Frontendprojekt-Projekt-2/" img={vardeokning}>
        Projekt som gjordes i kursen Frontendprojekt på Nackademin.
        Uppdraget var att skapa en webbapplikation till det fiktiva företaget Bostadskollen.
        Applikationen skulle räkna ut uppskattad värdeökning på bostäder för de kommande 5 år baserat på nuvarande pris och senaste årens värdeökningar.
        Appen är begränsad till tre områden och uträkningarna ska tas med en nypa salt då dem inte speglar verkligheten :) 
      </PortfolioItem>
      <PortfolioItem title="Lia-Tracker" url="https://www.akerlof.se/lia-tracker" img={liatracker}>
        Den här webbappen snickrade jag ihop för att hålla reda på sökta LIA-platser och samtidigt öva lite på JavaScript.
        Lösningen är helt databaslös och bygger på objekt som sparas i en array, som sedan sparas i localStorage.
        Det går även att spara listan för att sedan importera den i en annan webbläsare eller på en annan dator, samt exportera listan till CSV-format. 
      </PortfolioItem>
      <PortfolioItem title="[Code]" url="https://lidmyr93.github.io/Projekt-1/Webbsida" img={code}>
        Grupprojekt som gjordes i kursen Frontendprojekt på Nackademin, tillsammans med tre klasskamrater.
        Uppdraget var att bygga en hemsida för ett konsultföretag som erbjuder frontend-tjänster. 
      </PortfolioItem>
      <PortfolioItem title="HTML & CSS Historik" url="https://awkes.github.io/HTML-och-CSS-historik" img={htmlcss}>
        Examinationsuppgift i kursen HTML och CSS på Nackademin.
        Sidan har jag gjort ihop med två klasskamrater från utbildningen Frontend-utvecklare på Nackademin. 
      </PortfolioItem>

    </div>
  </div>
);