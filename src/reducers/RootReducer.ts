import { IMessageAction } from "../actions/MessageActions";
import { POLL_MESSAGE, SHOW_MESSAGE } from "../constants/Constants";

export interface IAppState {
  messageQueue: string[];
}

const initialState: IAppState = {
  messageQueue: []
};

function rootReducer(state = initialState, action: IMessageAction) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return action.payload
        ? { ...state, messageQueue: state.messageQueue.concat(action.payload) }
        : state;
    case POLL_MESSAGE:
      return { ...state, messageQueue: state.messageQueue.slice(1) };
    default:
      return state;
  }
}

export default rootReducer;
