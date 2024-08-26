import { baseApi } from "../../api/baseApi";

const UserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserMe: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserMeQuery } = UserApi;
