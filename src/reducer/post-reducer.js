const postReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_POST':
      return {
        ...state,
        userPost: action.post,
      };
    case 'ADD_POST':
      return {
        ...state,
        userPost: [...state.userPost, action.payload],
      };
    case 'EDIT_POST':
      return {
        // ...state,
        userPost: state.userPost.map((u) =>
          u.id === action.payload.id ? action.payload : u
        ),
      };
    case 'DELETE_POST':
      return {
        ...state,
        userPost: state.userPost.filter((u) => u.id !== action.payload && u),
      };
    default:
      return state;
  }
};
export default postReducer;
