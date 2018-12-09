import React from 'react';
import Item from './Item';
import styles from './ItemsList.module.css';

const ItemsList = ({ itemsList, setActiveItem, activeIndex, deleteItem }) => (
    <div className={styles.itemsList}>
        {itemsList.map((item, index) => {
            const { title, comments, id } = item;
            const commentsQty = comments.length;
            return (
                <Item
                    key={`item-${index}`}
                    deleteItem={() => deleteItem(id)}
                    setActiveItem={() => setActiveItem(index)}
                    checked={activeIndex === index}
                    title={title}
                    commentsQty={commentsQty}
                />
            )
        })}
    </div>
);

export default ItemsList;
