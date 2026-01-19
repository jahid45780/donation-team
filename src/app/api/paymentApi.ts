

import { baseApi } from "./baseApi";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    initPayment: builder.mutation<
      { data: { paymentUrl: string } },
      void
    >({
      query: () => ({
        url: "/payment/init",
        method: "POST",
      }),
    }),
  }),
});

export const { useInitPaymentMutation } = paymentApi;
