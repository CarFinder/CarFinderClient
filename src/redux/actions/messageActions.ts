import { Message } from '../models/messageModel';
import * as actionTypes from './actionTypes';

export interface SubmitMessage {
  type: actionTypes.SUBMIT_MESSAGE;
  payload: Message;
}

export type SubmitMessageAction = SubmitMessage;

export function submitMessage(payload: Message): SubmitMessage {
  return {
    type: actionTypes.SUBMIT_MESSAGE,
    payload
  };
}
