import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "./request";


export const Login = createAsyncThunk('Login', async ({ phone, password }) => {
    const payload = {
        "phone": phone,
        "password": password
    };
    const res = await request.post("/auth", payload).then(response => response.data);

    return res;
})