/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/app/api/baseApi";


interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, LoginPayload>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    register: builder.mutation<{ message: string }, RegisterPayload>({
      query: (data: any) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
