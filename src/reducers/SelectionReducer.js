export default (state, action) => {

  switch(action.type) {
    case 'select_article':
      return action.payload;
    default:
      return state || null;
  }
}
