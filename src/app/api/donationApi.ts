import { baseApi } from "./baseApi";


interface InitPaymentResponse {
  paymentUrl: string;
}

export const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    initDonation: builder.mutation<InitPaymentResponse, void>({
      query: () => ({
        url: "/donation/init",
        method: "POST",
        body: {
          amount: 50, // fixed monthly donation
        },
      }),
    }),
  }),
});

export const { useInitDonationMutation } = donationApi;
