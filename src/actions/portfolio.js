const API_URL = process.env.REACT_APP_BLOG_API
const TOKEN = process.env.REACT_APP_TOKEN

const title = (data) => (
    data.substr(11).replace(/(.markdown)|_/gi," ").replace(/^(.)|\s(.)/gi, ($1) => $1.toUpperCase())
)

const date = (data) => (
    new Date(data.substr(0,10)).toString().substr(4,11)
)

const content = (data) => (
    data.replace(/(â)|(â)|(â)/gi,"'").replace('---','').replace('---','&&&&&').split('&&&&&')[1]
)

export const fetchBlogs = () => {
    return dispatch => {
        return fetch(API_URL + TOKEN)
        .then(response => response.json())
        .then(blogs => dispatch(updateBlogs(blogs)))
        .catch(error => console.log(error));
    }
}

export const updateBlogs = (blogs) => {
    const list = []
    blogs.map((blog) => {
        const item = {
            title: title(blog.name), 
            date: date(blog.name),
            path: '/blog/' + blog.name.replace('.markdown','')
        }
        return (list.push(item))
    })
    return { type: "UPDATE_BLOGS", blogs: list.reverse() }
}

export const fetchBlog = (name) => {
    return dispatch => {
        return fetch(API_URL + name)
        .then(response => response.json())
        .then(blog => dispatch(updateBlog(blog)))
        .catch(error => console.log(error));
    }
}

export const updateBlog = (data) => {
    const blog = {
        title: title(data.name),
        date: date(data.name),
        content: content(window.atob(data.content))
    }
    return { type: "UPDATE_BLOG", blog: blog }
}

export const fetchProjects = () => {
    console.log("hit action")
    // return dispatch => {
    //     return fetch(API_URL + TOKEN)
    //     .then(response => response.json())
    //     .then(blogs => dispatch(updateBlogs(blogs)))
    //     .catch(error => console.log(error));
    // }
}

export const updateStatus = (title) => {
    return { type: "UPDATE_STATUS", title: title, status: "featured" }
}

export const updateProjects = (projects) => {
    return { type: "UPDATE_PROJECTS", projects: projects }
}

export const updateProject = (project) => {
    return { type: "UPDATE_PROJECT", project: project }
}

export const updateAnimation = (animation) => {
    return { type: "UPDATE_ANIMATION", animation: animation }
}