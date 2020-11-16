import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 
};

// defining a persistor that can be passed to the store later on
const myPersistReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(myPersistReducer);

// store is passed to the persistStore function to store 
// the persisted state of the redux in local storage
export const persistor = persistStore(store);