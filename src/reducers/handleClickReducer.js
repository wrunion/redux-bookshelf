export default(state={}, action) => {

  switch(action.type) {
    case 'SELECT_ITEM_TO_EDIT':
      return Object.assign({}, state, {itemToEdit: action.data} );
  
  default:
    return state;
}}