export default function portfolioReducer(
    state = {
        blogs: [],
        blog: {},
        projects: [],
        project: {},
        animation: ""
    }, action) {
    switch (action.type) {

        case "UPDATE_BLOGS":
            return {...state, blogs: action.blogs}

        case "UPDATE_BLOG":
            return {...state, blog: action.blog }

        case "UPDATE_STATUS":
            const projects = state.projects.map(project => {
                let status = project.title === action.title ? "featured" : "standby"
                project.status = status
                return project
            })
            return {...state, project: projects}

        case "UPDATE_PROJECTS":
            return {...state, projects: action.projects }

        case "UPDATE_PROJECT":
            return {...state, project: action.project }
        
        case "UPDATE_ANIMATION":
            return {...state, animation: action.animation }

        default:
            return state;
    } 
  }