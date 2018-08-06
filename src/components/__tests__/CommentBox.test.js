import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a textarea that users can type in', () => {
  wrapped.find('textarea').simulate('change', { //simulate provided by Enzyme to simulate events
    target: { value: 'new comment' }
  });
  wrapped.update(); //Hard force for re-rendering

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});
