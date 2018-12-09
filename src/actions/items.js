import { SET_ACTIVE_ITEM, ADD_NEW_ITEM, DELETE_ITEM, ADD_COMMENT } from './actionTypes';

export const addNewItem = (item) => {
 return {
     type: ADD_NEW_ITEM,
     item
 }
};

export const deleteItem = (itemId) => ({
    type: DELETE_ITEM,
    itemId
});

export const setActiveItem = (activeIndex) => ({
    type: SET_ACTIVE_ITEM,
    activeIndex
});

export const addComment = (currentItem) => ({
    type: ADD_COMMENT,
    currentItem
});
