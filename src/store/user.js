import { createSlice} from '@reduxjs/toolkit'
import { apiCallBegan} from './api'

const slice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        loading: false
    },
    reducers: {
        postsRequested: (users, action) => {
            users.loading = true
        },
        postsReceived: (users, action) => {
            users.list = action.payload
            users.loading = false
        },
        postsRequestFailed: (users, action) => {
            users.loading = false
        }
    }
})

export default slice.reducer;

const {
    postsRequested,
    postsReceived,
    postsRequestFailed,
} = slice.actions;

const url = "/users";

export const loadPosts = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            onStart: postsRequested.type,
            onSuccess: postsReceived.type,
            onError: postsRequestFailed
        })
    )
}