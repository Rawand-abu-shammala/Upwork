import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUser from '@/types/user';
import { AppDispatch } from '@/redux/store';
// api
import { loginApi, signupApi } from '@/pages/api/auth';
import { addToSearchHistoryApi } from '@/pages/api/user';

const LOCAL_STORAGE_KEY = "GSG_TT_9_UP_WORK_CLONE_USER";


interface IUserSlice {
    isLoggedIn: boolean;
    isFetching: boolean;
    user: IUser
}

const defaultUser = {
    id: '',
    username: '',
    photo: '',
    token: '',
    location: "",
    job_title: "",
    hourly_rate: 0,
    overview: "",
    portfolio: [],
    skills: [],
    searchHistory: [],
    savedJobs: []
}

const initialState: IUserSlice = {
    isLoggedIn: Boolean(localStorage.getItem(LOCAL_STORAGE_KEY)),
    isFetching: false,
    user: localStorage.getItem(LOCAL_STORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "") : defaultUser
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        startFetching: (state) => { state.isFetching = true },
        endFetching: (state) => { state.isFetching = true },
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
        setUser: (state, action: PayloadAction<IUser>) => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(action.payload))
            state.user = action.payload;
        },
        saveJob: (state, action: PayloadAction<string>) => {
            state.user.savedJobs = [...state.user.savedJobs, action.payload];
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.user))
        },
        unSaveJob: (state, action: PayloadAction<string>) => {
            state.user.savedJobs = state.user.savedJobs.filter(id => id !== action.payload);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.user))
        },
        addToSearchHistoryAction: (state, action: PayloadAction<string>) => {
            state.user.searchHistory = [...state.user.searchHistory, action.payload];
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.user))
        },
        resetUser: (state) => {
            state.user = {
                id: '',
                username: '',
                photo: '',
                token: '',
                location: "",
                job_title: "",
                hourly_rate: 0,
                overview: "",
                portfolio: [],
                skills: [],
                searchHistory: [],
                savedJobs: [],
            }
        },
        logout: (state) => {
            state.isFetching = false;
            state.isLoggedIn = false;
            state.user = defaultUser;
            localStorage.removeItem(LOCAL_STORAGE_KEY)
        }
    },
});

export const {
    setIsLoggedIn,
    endFetching,
    startFetching,
    saveJob,
    unSaveJob,
    resetUser,
    setUser,
    logout,
    addToSearchHistoryAction } = userSlice.actions;


export const login = (username: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(startFetching());
    const { data, status } = await loginApi(username, password);
    if (status === "SUCCESS") {
        dispatch(setIsLoggedIn(true));
        dispatch(setUser(data as IUser));
        dispatch(endFetching());
        return true;
    } else {
        dispatch(resetUser());
        dispatch(setIsLoggedIn(false));
        dispatch(endFetching());
        return false;
    }
}

export const signup = (username: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(startFetching());
    const { data, status } = await signupApi(username, password);
    if (status === 'SUCCESS') {
        dispatch(setIsLoggedIn(true));
        dispatch(setUser(data as IUser));
        dispatch(endFetching());
        return true;
    } else {
        dispatch(resetUser());
        dispatch(setIsLoggedIn(false));
        dispatch(endFetching());
        return false;
    }
}

export const addToSearchHistory = (query: string, id: string) => async (dispatch: AppDispatch) => {
    try {
        await addToSearchHistoryApi(query, id);
        console.log("addToSearchHistoryAVTION RUN NOWWWWWWWWWWWWWWWW")
        dispatch(addToSearchHistoryAction(query))
    } catch (error) {
        console.log(error)
    }
}
export default userSlice.reducer;
