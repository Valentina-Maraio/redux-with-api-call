import {configureStore } from '@reduxjs/toolkit'
import reducer from './post'
import api from './middleware/api'

export default function store() {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api],
    });
}