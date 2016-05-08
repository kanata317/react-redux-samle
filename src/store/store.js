import { createStore, applyMiddleware } from 'redux';
import countup from '../reducers/countup';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';


export default function store() {
  const logger = createLogger();
  const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
  const store = createStoreWithMiddleware(countup);
  return store;
}
