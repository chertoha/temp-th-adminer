import authSlice, { persistedAuthReducer } from "./auth/slice";
import { configureStore } from "@reduxjs/toolkit";
import { publicationsApi } from "./publications/publicationsApi";
import { imagesApi } from "./images/imagesApi";
import { authApi } from "./auth/authApi";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { authorsApi } from "./authors/authorsApi";
import { employeesApi } from "./employees/employeesApi";
import { magazinesApi } from "./magazines/magazinesApi";
import { usersApi } from "./users/usersApi";
import { editorsApi } from "./editors/editorsApi";
import { subscribersApi } from "./subscribers/subscribersApi";
import { contactsApi } from "./contacts/contactsApi";
import { rootAdminApi } from "./rootAdmin/rootAdminApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [authSlice.reducerPath]: persistedAuthReducer,
    [publicationsApi.reducerPath]: publicationsApi.reducer,
    [magazinesApi.reducerPath]: magazinesApi.reducer,
    [imagesApi.reducerPath]: imagesApi.reducer,
    [authorsApi.reducerPath]: authorsApi.reducer,
    [employeesApi.reducerPath]: employeesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [editorsApi.reducerPath]: editorsApi.reducer,
    [subscribersApi.reducerPath]: subscribersApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [rootAdminApi.reducerPath]: rootAdminApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(authApi.middleware)
      .concat(publicationsApi.middleware)
      .concat(magazinesApi.middleware)
      .concat(imagesApi.middleware)
      .concat(authorsApi.middleware)
      .concat(employeesApi.middleware)
      .concat(usersApi.middleware)
      .concat(editorsApi.middleware)
      .concat(subscribersApi.middleware)
      .concat(contactsApi.middleware)
      .concat(rootAdminApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
