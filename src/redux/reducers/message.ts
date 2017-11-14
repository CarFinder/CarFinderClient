import { SUBMIT_MESSAGE } from '../actions/actionTypes';
import { SubmitMessageAction } from '../actions/messageActions';
import { InitialState } from '../models/messageModel';

const initialState: InitialState = {
  name: '',
  email: '',
  message: ''
};

export default function submitMessageReducer(
  state: InitialState = initialState,
  action: any
): InitialState {
  switch (action.type) {
    case SUBMIT_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}
