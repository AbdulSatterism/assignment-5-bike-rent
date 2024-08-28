import { baseApi } from "../../api/baseApi";

const UserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allUser: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["userMe"],
    }),

    getUserMe: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
    }),

    updateUserMe: builder.mutation({
      query: (updateInfo) => ({
        url: "/users/me",
        method: "PUT",
        body: updateInfo,
      }),
      invalidatesTags: ["userMe"],
    }),

    userUpdateByAdmin: builder.mutation({
      query: (args) => ({
        url: `/users/user-update-admin/${args.id}`,
        method: "PUT",
        body: args.info,
      }),
      invalidatesTags: ["userMe"],
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/delete-user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["userMe"],
    }),

    toggleRole: builder.mutation({
      query: (id) => ({
        url: `/users/toggle-role/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["userMe"],
    }),
  }),
});

export const {
  useGetUserMeQuery,
  useToggleRoleMutation,
  useAllUserQuery,
  useUpdateUserMeMutation,
  useDeleteUserMutation,
  useUserUpdateByAdminMutation,
} = UserApi;
