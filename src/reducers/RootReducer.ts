import {IMessageAction} from "../actions/MessageActions";
import {SHOW_MESSAGE} from "../components/Constants";

interface IState {
  messages: string[];
}

const initialState: IState = {
  messages: []
};

function rootReducer(state = initialState, action: IMessageAction) {
  switch (action.type) {
    case SHOW_MESSAGE:
      state.messages.push(action.payload);
      break;
    default:
      break;
  }
  return state;
}
export default rootReducer;
