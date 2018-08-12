import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a textarea and minimum one button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).not.toBeLessThanOrEqual(0);
});

describe('the textarea', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', { //simulate provided by Enzyme to simulate events
      target: { value: 'new comment' }
    });
    wrapped.update(); //Hard force for re-rendering
  });

  it('has a textarea that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('clears all text after form submit', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});