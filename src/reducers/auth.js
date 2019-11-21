export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        id: action.id
      };
    case 'TEST':
      return {
        message: action.message
      };

    default:
      return state;
  }
};
