
import middleware from './middleware';
import reducers from './reducers';
import { createStore } from '@reduxjs/toolkit';
export const store = createStore(
 reducers,
middleware
);
