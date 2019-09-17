import React from "react";
import Heading from "../../components/heading";
import styles from "../../styles/portfolio.module.scss";
import gnr from "../../images/portfolio/gnr.jpg";
import gitarrkungen from "../../images/portfolio/gitarrkungen.jpg";
import vardeokning from "../../images/portfolio/vardeokning.jpg";
import liatracker from "../../images/portfolio/liatracker.jpg";
import code from "../../images/portfolio/code.jpg";
import htmlcss from "../../images/portfolio/htmlcss.jpg";

const portfolioItems = [
  {
    title : 'Guns N\' Roses',
    url   : 'https://jekyll-gnr.netlify.com',
    img   : gnr,
    text  : 'Projektarbete gjort tillsammans med en klasskompis i kursen JavaScript 3 på Nackademin. Uppdraget var att skapa en band eller spelsida med hjälp av ramverket Jekyll.'
  },
  {
    title : 'Gitarrkungen',
    url   : 'https://awkes.github.io/Gitarrkungen',
    img   : gitarrkungen,
    text  : 'Examinerande projektarbete i kursen JavaScript 2 på Nackademin. Vår uppgift var att skapa en webbshop med minst 10 produkter som ska kunna läggas till i varukorg och sedan "skickas" som en beställning. I arbetet använder vi oss av Bootstrap, jQuery och Web Storage API. Projektarbetet gjordes ihop med en klasskamrat.'
  },
  {
    title : 'Värdeökning',
    url   : 'https://awkes.github.io/Frontendprojekt-Projekt-2/',
    img   : vardeokning,
    text  : 'Projekt som gjordes i kursen Frontendprojekt på Nackademin. Uppdraget var att skapa en webbapplikation till det fiktiva företaget Bostadskollen. Applikationen skulle räkna ut uppskattad värdeökning på bostäder för de kommande 5 år baserat på nuvarande pris och senaste årens värdeökningar. Appen är begränsad till tre områden och uträkningarna ska tas med en nypa salt då dem inte speglar verkligheten :)'
  },
  {
    title : 'LIA-tracker',
    url   : 'https://www.akerlof.se/lia-tracker',
    img   : liatracker,
    text  : 'Den här webbappen snickrade jag ihop för att hålla reda på sökta LIA-platser och samtidigt öva lite på JavaScript. Lösningen är helt databaslös och bygger på objekt som sparas i en array, som sedan sparas i localStorage. Det går även att spara listan för att sedan importera den i en annan webbläsare eller på en annan dator, samt exportera listan till CSV-format.'
  },
  {
    title : '[Code]',
    url   : 'https://lidmyr93.github.io/Projekt-1/Webbsida',
    img   : code,
    text  : 'Grupprojekt som gjordes i kursen Frontendprojekt på Nackademin, tillsammans med tre klasskamrater. Uppdraget var att bygga en hemsida för ett konsultföretag som erbjuder frontend-tjänster.'
  },
  {
    title : 'HTML & CSS Historik',
    url   : 'https://awkes.github.io/HTML-och-CSS-historik',
    img   : htmlcss,
    text  : 'Examinationsuppgift i kursen HTML och CSS på Nackademin. Sidan har jag gjort ihop med två klasskamrater från utbildningen Frontend-utvecklare på Nackademin.'
  }
];

const PortfolioItem = ({title, url, img, children, className}) => (
  <div className={styles.item+' '+(className || '')}>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={title} className={styles.img} />
    </a>
    <p>
      <h2><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h2>
      {children}
    </p>
  </div>
);

class PortfolioCarousel extends React.Component {
  state = { 
    totalItems: portfolioItems.length,
    prevItem: portfolioItems.length-1,
    activeItem: 0,
    nextItem: 1,
  };
  renderPortfolioItems() {
    // Get items, create item components and set CSS-classes
    let items = portfolioItems;
    items = items.map((item, i) => {
      let status = '';
      if (i === this.state.activeItem) status = styles.itemActive;
      else if (i === this.state.nextItem) status = styles.itemNext;
      else if (i === this.state.prevItem) status = styles.itemPrev;
      return <PortfolioItem 
        title={item.title} 
        url={item.url} 
        img={item.img} 
        children={item.text} 
        className={status} 
      />;
    });
    return items;
  }
  renderDots() {
    // Create a dot for every item and select the active one.  
    let dots = [];
    for (let i = 0; i < this.state.totalItems; i++) {
      dots.push(i === this.state.activeItem
        ? <div className={styles.dot +' '+ styles.dotActive} />
        : <div className={styles.dot} />
      );
    }
    return <>{dots}</>;
  }
  changeItem(dir='next') {
    const total = this.state.totalItems;
    let active = dir === 'prev'
      ? this.state.activeItem === 0  ? total-1 : this.state.activeItem-1 
      : this.state.activeItem === total-1 ? 0 : this.state.activeItem+1 
    ;  
    const prev = active === 0 ? total-1 : active-1;
    const next = active === total-1 ? 0 : active+1;
    this.setState({
      prevItem: prev,
      activeItem: active,
      nextItem: next
    });
  }
  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.items} ref={this.items}>
            {this.renderPortfolioItems()}
          </div>
        </div>
        <div className={styles.controls}>
          <div className={styles.prev} onClick={() => this.changeItem('prev')}>⏴</div>
          <div className={styles.indicator} ref={this.dots}>
            {this.renderDots()}
          </div>
          <div className={styles.next} onClick={() => this.changeItem('next')}>⏵</div>
        </div>
      </>
    );
  }
}

export default() => (
  <div className={styles.content}>
      <Heading>Portfolio</Heading>
      <PortfolioCarousel />
  </div>
);