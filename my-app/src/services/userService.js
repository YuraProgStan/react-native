import {axiosInstance} from "../api/API";

export const userService = {

    getUsers: async () => {
        let {data} = await axiosInstance('/users');
        return data
    },
    getUser: async (id) => {
        let {data} = await axiosInstance(`/users/${id}`);
        return data
    },
}