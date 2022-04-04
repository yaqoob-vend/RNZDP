import _ from 'lodash';

var users = [
  {user: 'barney', active: false},
  {user: 'fred', active: false},
  {user: 'pebbles', active: true},
  ,
];

test('Sum Array', () => {
  const sum: number = 20;
  const mArray = [4, 2, 8, 6];
  expect(sum).toEqual(_.sum(mArray));
});

test('Drop array item', () => {
  const mArray = [4, 2, 8, 6];
  const droppedArray = _.drop(mArray);
  expect(mArray.length - 1).toEqual(droppedArray.length);
});

test('Find index in array', () => {
  let index = _.findIndex(users, function (o) {
    return o.user == 'barney';
  });
  expect(index).toEqual(0);
});
