import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DairyAppSideBar, CommentsBlock, ItemsBlock } from '../../components';
import { addNewItem, deleteItem, addComment, setActiveItem } from "../../actions/items";

import styles from './DairyAppPage.module.css';

const mapStateToProps = ({ itemsList, activeIndex }) => ({
    itemsList,
    activeIndex
});

const mapDispatchToProps = dispatch => ({
    addNewItem: item => dispatch(addNewItem(item)),
    deleteItem: itemId => dispatch(deleteItem(itemId)),
    addComment: item => dispatch(addComment(item)),
    setActiveItem: index => dispatch(setActiveItem(index))
});

class DairyAppPage extends Component {
render() {
    const {
        itemsList,
        activeIndex,
        addNewItem,
        setActiveItem,
        deleteItem,
        addComment
    } = this.props;
    const comments = itemsList[activeIndex] ? itemsList[activeIndex].comments : [];
    return (
        <div className={styles.dairyPage}>
            <DairyAppSideBar/>
            <div className={styles.dynamicContent}>
                <div className={styles.leftSide}>
                    <ItemsBlock
                        deleteItem={deleteItem}
                        setActiveItem={setActiveItem}
                        addNewItem={addNewItem}
                        items={itemsList}
                        activeIndex={activeIndex}
                    />
                </div>
                <div className={styles.rightSide}>
                    <CommentsBlock
                        selectedItem={itemsList[activeIndex]}
                        addComment={addComment}
                        comments={comments}/>
                </div>
            </div>
        </div>
    );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DairyAppPage);
