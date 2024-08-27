import { baseApi } from "../../api/baseApi";

const UserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserMe: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
      providesTags: ["userMe"],
    }),
    updateUserMe: builder.mutation({
      query: (updateInfo) => ({
        url: "/users/me",
        method: "PUT",
        body: updateInfo,
      }),
      invalidatesTags: ["userMe"],
    }),
  }),
});

export const { useGetUserMeQuery, useUpdateUserMeMutation } = UserApi;
