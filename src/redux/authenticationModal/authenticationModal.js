const initialState = {
  showModal: null,
};

const authenticationModal = (state = initialState, action) => {
  switch(action.type) {
    case 'LOG_IN_SUCCESSFUL': 
      return {
        ...state,
        showModal: null,
      }
    
    default:
      return state;
  }
};

export default authenticationModal;
