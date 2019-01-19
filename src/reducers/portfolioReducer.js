export default function portfolioReducer(
    state = {
        blogs: [],
        blog: []
    }, action) {
    switch (action.type) {

        case "UPDATE_BLOGS":
            return {...state, blogs: action.blogs}

        default:
            return state;
    } 
  }