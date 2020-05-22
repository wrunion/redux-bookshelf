import handleClickReducer from './../reducers/handleClickReducer';

describe ('handleClickReducer', () => {
  test('Should return default state if no action type is specified', () => {
    expect(handleClickReducer({}, {type: null})).toEqual({});
  });
});

describe('handleClickReducer', () => {
  test('Should return a property called "itemToEdit whose value is an object, if action type is selectItemToEdit', () => {
    expect(handleClickReducer({}, { type: 'SELECT_ITEM_TO_EDIT', data: {title: 'Harry Potter', author: 'JK Rowling'}})).toEqual({itemToEdit: {title: 'Harry Potter', author: 'JK Rowling'}})
  });
});