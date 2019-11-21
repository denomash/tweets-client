export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'TEST':
      console.log(action.message);

      return {
        message: action.message
      };

    default:
      return state;
  }
};
