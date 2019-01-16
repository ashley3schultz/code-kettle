const API_URL = "https://api.github.com/repos/ashley3schultz/ashley3schultz.github.io/contents/_posts/?per_page=100&token=c7ca424320830b2b3729a149beb05feca5b7e56"

export const fetchBlogs = () => {
    return dispatch => {
        return fetch(API_URL)
        .then(response => response.json())
        .then(blogs => dispatch(updateBlogs(blogs)))
        .catch(error => console.log(error));
    }
}

export const updateBlogs = (blogs) => {
    return { type: "UPDATE_BLOGS", blogs: blogs }
}