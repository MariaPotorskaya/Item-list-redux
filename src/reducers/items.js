import ItemModel from '../data/item';

const items = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            const newItem = new ItemModel(action.text, action.count);
            return [...state, newItem];
        case 'UP_NUMBER':
            return state.map(item => {
                if (item.id !== action.id) {
                    return item;
                }
                return {...item, status: ++item.status};
            });
        case 'REMOVE_ITEM':
            const index = state.findIndex(item => item.id === action.id);
            return index >= 0
                ? [...state.slice(0,index), ...state.slice(index + 1)]
                : state;
        default:
            return state;
    }
}

export { items };