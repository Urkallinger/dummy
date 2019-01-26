import {IMessageAction} from "../actions/MessageActions";
import {SHOW_MESSAGE} from "../components/Constants";

export interface IAppState {
  messages: string[];
}

const initialState: IAppState = {
  messages: []
};

function rootReducer(state = initialState, action: IMessageAction) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {...state, messages: state.messages.concat(action.payload)};
    default:
      return state;
  }
}
export default rootReducer;
