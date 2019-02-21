const API_URL = process.env.REACT_APP_BLOG_API
const TOKEN = process.env.REACT_APP_TOKEN

export const fetchBlogs = () => {
    console.log(TOKEN)
    return dispatch => {
        return fetch(API_URL + TOKEN)
        .then(response => response.json())
        .then(blogs => dispatch(updateBlogs(blogs)))
        .catch(error => console.log(error));
    }
}

export const updateBlogs = (blogs) => {
    console.log("updateBlogS")
    return { type: "UPDATE_BLOGS", blogs: blogs }
}

export const fetchBlog = (name) => {
    console.log("fetchBlog")
    return dispatch => {
        return fetch(API_URL + name + TOKEN)
        .then(response => response.json())
        .then(blog => dispatch(updateBlog(blog)))
        .catch(error => console.log(error));
    }
}

export const updateBlog = (blog) => {
    console.log("updateBlog")
    return { type: "UPDATE_BLOG", blog: blog}
}