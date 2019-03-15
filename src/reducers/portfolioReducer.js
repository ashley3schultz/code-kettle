export default function portfolioReducer(
    state = {
        blogs: [],
        blog: {},
        projects: []
    }, action) {
    switch (action.type) {

        case "UPDATE_BLOGS":
            return {...state, blogs: action.blogs}

        case "UPDATE_BLOG":
            return {...state, blog: action.blog }

        case "UPDATE_ANIMATION":
            const projects = state.projects.map(proj => {
                let ani = proj.title === action.title ? action.animation : "standby"
                proj.animation = ani
                return proj
            })
            return {...state, project: projects}

        case "UPDATE_PROJECTS":
            return {...state, projects: action.projects }
            
        default:
            return state;
    } 
  }