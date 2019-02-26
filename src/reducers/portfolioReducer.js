export default function portfolioReducer(
    state = {
        blogs: [],
        blog: {output: ''}
    }, action) {
    switch (action.type) {

        case "UPDATE_BLOGS":
            return {...state, blogs: action.blogs}

        case "UPDATE_BLOG":
            return {...state, blog: {output: `${action.blog}`}}
            
        default:
            return state;
    } 
  }