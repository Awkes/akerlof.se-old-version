import React from "react";
import styles from "../styles/paginate.module.scss"
import arrowLeft from "../images/arrow-left.svg";
import arrowRight from "../images/arrow-right.svg";

class Paginate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      totalPages: Math.ceil(this.props.children.length / this.props.itemsPerPage),
      prevPage: Math.ceil(this.props.children.length / this.props.itemsPerPage),
      activePage: 1,
      nextPage: this.props.children.length > 1 ? 2 : 1,
    };
  }
  changePage(e, page=0) {
    e.preventDefault();
    const total = this.state.totalPages;
    const prev = page === 1 ? total : page-1;
    const next = page === total ? 1 : page+1;
    this.setState({
      prevPage: prev,
      activePage: page,
      nextPage: next
    });
  }
  renderChildren() {
    const items = this.props.itemsPerPage;
    const page = this.state.activePage;
    const offset = (page * items) - items;
    let children = [];
    for (let i = offset; i < offset+items; i++) {
      children.push(this.props.children[i]);
    }
    return <>{children}</>;
  }
  renderPageNumbers() {
    let numbers = [];
    for(let i=1; i <= this.state.totalPages; i++) {
       numbers.push(
         i === this.state.activePage
          ? <span key={i} className={styles.number}>{i}</span>
          : <a href="#" onClick={e => this.changePage(e, i)} key={i} className={styles.number}>{i}</a>
       );
    }
    return <>{numbers}</>;
  }
  render() {
    return (
      <>
        <div>
          {this.renderChildren()}
        </div>
        {
          this.state.totalPages > 1 
          ? <div className={styles.controls}>
              <img src={arrowLeft} alt="&lt;" className={styles.prev} onClick={e => this.changePage(e, this.state.prevPage)} />
              <div className={styles.numbers}>{this.renderPageNumbers()}</div>
              <img src={arrowRight} alt="&lt;" className={styles.next} onClick={e => this.changePage(e, this.state.nextPage)} />
            </div>
          : ''
        }
      </>
    );
  }
}

Paginate.defaultProps = { itemsPerPage: 5 }

export default Paginate;