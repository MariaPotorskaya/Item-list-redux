import { createStore} from 'redux';
import { items } from '../reducers/items';
import { initialState } from '../data/initialState';

const store = createStore(items, initialState);

export default store;