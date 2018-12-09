import React, { PureComponent } from 'react';
import { ItemsControls, ItemsList } from './components';
import uniqid from 'uniqid';
import styles from './ItemsBlock.module.css';

class ItemsBlock extends PureComponent {
    state = {
        placeholder: 'Type name here...',
        editedItem: {
            comments: [],
            title: ''
        }
    };
    onKeyHandle = (e) => {
        const { editedItem: { title } } = this.state;
        if (e.key === 'Enter' && title.trim()) {
            this.onAddItem();
        }
    }
    onChangeTitle = (e) => {
        const { value } = e.target;
        const updItem = {...this.state.editedItem};
        updItem.title = value;
        this.setState({ editedItem: updItem });
    };
    onAddItem = () => {
        const { addNewItem } = this.props;
        const { editedItem } = this.state;
        editedItem.id = uniqid();
        addNewItem(editedItem);
        this.setState({ editedItem: {
            comments: [],
            title: ''
            }});
    };
    render() {
        const { items, setActiveItem, activeIndex, deleteItem } = this.props;
        const { editedItem, placeholder } = this.state;
        const { title } = editedItem;
        return (
            <div className={styles.itemsBlock}>
                <h2>Items</h2>
                <ItemsControls
                    addItem={this.onAddItem}
                    changeTitle={this.onChangeTitle}
                    title={title}
                    placeholder={placeholder}
                    keyHandler={this.onKeyHandle}
                />
                <ItemsList
                    deleteItem={deleteItem}
                    setActiveItem={setActiveItem}
                    itemsList={items}
                    activeIndex={activeIndex}
                />
            </div>
        );
    }
}

export default ItemsBlock;
