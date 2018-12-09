import React, { PureComponent } from 'react';
import cx from 'classnames';
import styles from './Item.module.css';

class Item extends PureComponent {
    render() {
        const { title, commentsQty, checked, setActiveItem, deleteItem } = this.props;
        return (
            <div
                className={styles.itemContainer}
            >
               <div
                   className={cx(styles.leftSide, { [styles.active]: checked})}
                   onClick={setActiveItem}
               >
                   <span className={styles.title}>{title}</span>
                   <span className={styles.commentsNumber}>{commentsQty}</span>
               </div>
                <div className={styles.rightSide}>
                    <button onClick={deleteItem}>Delete</button>
                </div>
            </div>
        );
    }
}

export default Item;
