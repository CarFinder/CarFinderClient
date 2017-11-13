import { Message } from '../models/messageModel';
import * as actionTypes from './actionTypes';

export interface SubmitMessage {
  type: actionTypes.SUBMIT_MESSAGE;
  payload: Message;
}

export interface SubmitMessageSuccess {
  type: actionTypes.SUBMIT_MESSAGE_SUCCESS;
}

export type SubmitMessageAction = SubmitMessage | SubmitMessageSuccess;

export function submitMessage(payload: Message): SubmitMessage {
  return {
    type: actionTypes.SUBMIT_MESSAGE,
    payload
  };
}

export function submitMessageSuccess(): SubmitMessageSuccess {
  return {
    type: actionTypes.SUBMIT_MESSAGE_SUCCESS
  };
}
