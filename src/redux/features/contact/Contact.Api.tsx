import { baseApi } from "../../api/baseApi";

const ContactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sentMail: builder.mutation({
      query: (mailInfo) => ({
        url: "/contact",
        method: "POST",
        body: mailInfo,
      }),
    }),
  }),
});

export const { useSentMailMutation } = ContactApi;
