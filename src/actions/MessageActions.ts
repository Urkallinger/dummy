import { POLL_MESSAGE, SHOW_MESSAGE } from "../constants/Constants";

export interface IMessageAction {
  type: string;
  payload?: string;
}

export function showMessage(message: string): IMessageAction {
  return { type: SHOW_MESSAGE, payload: message };
}

export function pollMessage(): IMessageAction {
  return { type: POLL_MESSAGE };
}
