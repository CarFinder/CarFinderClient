import { SUBMIT_MESSAGE, SUBMIT_MESSAGE_SUCCESS } from '../actions/actionTypes';
import { SubmitMessageAction } from '../actions/messageActions';
import { InitialState } from '../models/messageModel';

const initialState: InitialState = {
  name: '',
  email: '',
  message: ''
};

export default function submitMessageReducer(
  state: InitialState = initialState,
  action: SubmitMessageAction
): InitialState {
  switch (action.type) {
    case SUBMIT_MESSAGE:
      return action.payload;
    case SUBMIT_MESSAGE_SUCCESS:
      return state;
    default:
      return state;
  }
}
