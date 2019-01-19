import {SHOW_MESSAGE} from "../components/Constants";

export interface IMessageAction {
    type: string,
    payload: string
}

export function showMessage(message: string): IMessageAction {
  return {type: SHOW_MESSAGE, payload: message};
}
