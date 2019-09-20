import React from "react";
import Heading from "../../components/heading";
import styles from "../../styles/portfolio.module.scss";
import {useStaticQuery,graphql} from "gatsby";
import {Swipeable} from "react-swipeable";
import arrowLeft from "../../images/arrow-left.svg";
import arrowRight from "../../images/arrow-right.svg";

const PortfolioItem = ({title, url, img, children, className}) => (
  <div className={styles.item+' '+(className || '')}>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={title} className={styles.img} />
    </a>
    <div>
      <h2><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h2>
      {children}
    </div>
  </div>
);

class PortfolioCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      totalItems: this.props.items.length,
      prevItem: this.props.items.length-1,
      activeItem: 0,
      nextItem: 1,
    };
  }
  renderPortfolioItems() {
    // Get items, create item components and set CSS-classes
    const items = this.props.items.map((item, i) => {
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
        key={i}
      />;
    });
    return items;
  }
  renderDots() {
    // Create a dot for every item and select the active one.  
    let dots = [];
    for (let i = 0; i < this.state.totalItems; i++) {
      dots.push(i === this.state.activeItem
        ? <div className={styles.dot +' '+ styles.dotActive} key={i} />
        : <div className={styles.dot} key={i} />
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
          <Swipeable onSwipedLeft={() => this.changeItem('next')} onSwipedRight={() => this.changeItem('prev')}>
            <div className={styles.items} ref={this.items}>
              {this.renderPortfolioItems()}
            </div>
          </Swipeable>
        </div>
        <div className={styles.controls}>
          <img src={arrowLeft} alt="&lt;" className={styles.prev} onClick={() => this.changeItem('prev')} />
          <div className={styles.indicator} ref={this.dots}>
            {this.renderDots()}
          </div>
          <img src={arrowRight} alt="&gt;" className={styles.next} onClick={() => this.changeItem('next')} />
        </div>
      </>
    );
  }
}

export default() => {
  const data = useStaticQuery(
    graphql`
      query {
        allPortfolioYaml {
          nodes {
            title
            url
            text
            img
          }
        }
      }`
  );
  return (
    <div className={styles.content}>
      <Heading>Portfolio</Heading>
      <PortfolioCarousel items={data.allPortfolioYaml.nodes} />
    </div>
  );
}