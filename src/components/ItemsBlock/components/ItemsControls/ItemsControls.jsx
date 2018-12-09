import React from 'react';
import styles from './ItemsControls.module.css';

const ItemsControls = ({ title, placeholder, changeTitle, addItem, keyHandler}) => (
        <div className={styles.itemsControls}>
            <input
                type='text'
                placeholder={placeholder}
                value={title}
                onChange={changeTitle}
                onKeyPress={keyHandler}
            />
            <button onClick={addItem}>Add new</button>
        </div>
    );

export default ItemsControls;
