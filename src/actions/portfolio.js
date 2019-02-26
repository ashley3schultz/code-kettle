const API_URL = process.env.REACT_APP_BLOG_API
const TOKEN = process.env.REACT_APP_TOKEN

export const fetchBlogs = () => {
    return dispatch => {
        return fetch(API_URL + TOKEN)
        .then(response => response.json())
        .then(blogs => dispatch(updateBlogs(blogs)))
        .catch(error => console.log(error));
    }
}

export const updateBlogs = (blogs) => {
    return { type: "UPDATE_BLOGS", blogs: blogs.reverse() }
}

export const fetchBlog = (name) => {
    return dispatch => {
        return fetch(API_URL + name)
        .then(response => response.json())
        .then(blog => dispatch(updateBlog(blog)))
        .catch(error => console.log(error));
    }
}

export const updateBlog = (blog) => {
    return { type: "UPDATE_BLOG", blog: window.atob(blog.content) }
}