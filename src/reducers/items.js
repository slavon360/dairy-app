import { SET_ACTIVE_ITEM, ADD_NEW_ITEM, DELETE_ITEM, ADD_COMMENT } from '../actions/actionTypes';
import data from '../mocks/data';
import randomcolor from 'randomcolor';

const { items, activeIndex } = data;

const initialState = {
    itemsList: items,
    activeIndex
};

function setActiveItem(state, activeIndex) {
    return {
        ...state,
        activeIndex
    }
}
function addNewItem(state, item) {
    return {
        ...state,
        itemsList: [...state.itemsList, item]
    }
}
function deleteItem(state, itemId) {
    const { activeIndex, itemsList } = state;
    let updItems = [...itemsList];
    updItems = updItems.filter(item => item.id !== itemId);
    const newActiveIndex = updItems && updItems.length && activeIndex >= updItems.length ? activeIndex - 1 : activeIndex;
    return {
        ...state,
        itemsList: updItems,
        activeIndex: newActiveIndex
    }
}
function addComment(state, currentItem) {
    const { id, comment } = currentItem;
    let updItems = [...state.itemsList];
    updItems = updItems.map((item) => {
        if (item.id === id) {
           item.comments.push({ text: comment, background: randomcolor() });
        }
        return item;
    });
    return {
        ...state,
        itemsList: updItems
    }
}

export default function itemsReducer (state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_ITEM:
            const { activeIndex } = action;
            return setActiveItem(state, activeIndex);
        case ADD_NEW_ITEM:
            const { item } = action;
            return addNewItem(state, item);
        case DELETE_ITEM:
            const { itemId } = action;
            return deleteItem(state, itemId);
        case ADD_COMMENT:
            const { currentItem } = action;
            return addComment(state, currentItem);
        default:
            return state
    }
}
