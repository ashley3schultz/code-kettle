const UN = "ashley3schultz"
const GH = `https://api.github.com/repos/${UN}/${UN}`
const BLOG_URL = `${GH}.github.io/contents/_posts/`
const PROJ_URL = `${GH}/contents/projects/`
const ABOUT_URL = `${GH}/contents/about.md`

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
        return fetch(BLOG_URL)
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
        return fetch(BLOG_URL + name + '.markdown')
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
    return dispatch => {
        return fetch(PROJ_URL)
        .then(response => response.json())
        .then(projects => dispatch(updateProjects(projects)))
        .catch(error => console.log(error));
    }
}

export const updateProjects = (projects) => {
    const list = []
    projects.map((proj) => {
        const item = {
            title: proj.name.replace('.md',''),
            url: 'https://' + proj.name.replace('.md','').toLowerCase() + '.herokuapp.com/',
            status: "standby",
        }
        return (list.push(item))
    })
    return { type: "UPDATE_PROJECTS", projects: list }
}

export const fetchProject = (name) => {
    return dispatch => {
        return fetch(PROJ_URL + name + '.md')
        .then(response => response.json())
        .then(project => dispatch(updateProject(project)))
        .catch(error => console.log(error));
    }
}

export const updateProject = (data) => {
    const project = {
        title: data.name.replace('.md',''),
        url: 'https://' + data.name.replace('.md','').toLowerCase() + '.herokuapp.com/',
        info: window.atob(data.content),
        status: "standby",
    }
    return { type: "UPDATE_PROJECT", project: project }
}

export const fetchAbout = () => {
    console.log(ABOUT_URL)
    return dispatch => {
        return fetch(ABOUT_URL)
        .then(response => response.json())
        .then(about => dispatch(updateAbout(about)))
        .catch(error => console.log(error));
    }
}

export const updateAbout = (data) => {
    const about = window.atob(data.content).replace(/(â)/gi,"'")
    return { type: "UPDATE_ABOUT", about: about }
}

export const updateStatus = (title) => {
    return { type: "UPDATE_STATUS", title: title, status: "featured" }
}

export const updateAnimation = (animation) => {
    return { type: "UPDATE_ANIMATION", animation: animation }
}