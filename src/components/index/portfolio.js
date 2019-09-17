import React from "react";
import Heading from "../../components/heading";
import styles from "../../styles/portfolio.module.scss";
import {StaticQuery,graphql} from "gatsby";

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
        title={item.node.title} 
        url={item.node.url} 
        img={item.node.img} 
        children={item.node.text} 
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

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allPortfolioYaml {
          edges {
            node {
              title
              url
              text
              img
            }
          }
        }
      }`
    }
    render={data => (
      <div className={styles.content}>
        <Heading>Portfolio</Heading>
        <PortfolioCarousel items={data.allPortfolioYaml.edges} />
      </div>
    )}
  />
);