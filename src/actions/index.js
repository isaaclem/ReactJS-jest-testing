import { SAVE_COMMENT } from 'actions/types';
import comments from '../reducers/comments';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comments
  }
}