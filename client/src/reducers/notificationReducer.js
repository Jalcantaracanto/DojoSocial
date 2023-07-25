// reducers/notificationReducer.js

const initialState = {
    notificationCount: 0,
  };
  
  const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_NOTIFICATION_COUNT":
        return {
          ...state,
          notificationCount: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default notificationReducer;
  