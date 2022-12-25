import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from "@reduxjs/toolkit";
import { Login } from "../services/auth-service";
import { saveItem } from '../utils';

export const appSlice = createSlice({
    name: "app",
    initialState: {
        splashLoading: false,
        isLoading: false,
        signIn: false,
        errorMessage: null,
        userData: {}
    },
    reducers: {
        clearErrorMessage: (state, action) => {
            state.errorMessage = null
        },
        Logout: (state) => {
            state.signIn = false;
            state.userData = {};
            AsyncStorage.removeItem("userData");
        },
        LoggedIn: (state, action) => {
            state.signIn = true;
            state.userData = action.payload
        },
        changeSplashState: (state, action) => {
            state.splashLoading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(Login.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(Login.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload && action.payload.apiResponse) {
                if (action.payload.apiResponse.status === 1) {
                    state.errorMessage = action.payload.apiResponse.message;
                } else if (action.payload.apiResponse.status === 0) {
                    let newPayload = action?.payload?.payload;
                    newPayload.bio = JSON.parse(newPayload.bio);
                    newPayload.bio_illness = JSON.parse(newPayload.bio_illness);
                    newPayload.bio_medicine = JSON.parse(newPayload.bio_medicine);
                    newPayload.user_address = JSON.parse(newPayload.user_address);
                    saveItem("userData", newPayload);
                    state.userData = newPayload;
                    state.signIn = true

                }
            }
        });
        builder.addCase(Login.rejected, (state, action) => {
            state.isLoading = false;
        });
    }
});



export const { clearErrorMessage, Logout, LoggedIn, changeSplashState } = appSlice.actions;
export default appSlice.reducer;