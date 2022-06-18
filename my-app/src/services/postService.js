import {axiosInstance} from "../api/API";

export const postService = {

    getPosts: async () => {
        let {data} = await axiosInstance('/posts');
        return data
    },
    getPost: async (id) => {
        let {data} = await axiosInstance(`/posts/${id}`);
        return data
    },
}