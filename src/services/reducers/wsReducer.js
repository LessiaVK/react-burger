const initialState = {
  wsConnected: false,
  orders: {},
  error: undefined,
  dataIsReady: false
};

export const wsReducer = (state = initialState, action) => {
  // console.log("wsReducer",action.type,action.payload);
  switch (action.type) {
    case "WS_CONNECTION_SUCCES":
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };

    case "WS_CONNECTION_ERROR":
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };

    case "WS_CONNECTION_CLOSED":
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };

    case "WS_GET_MESSAGE":
      
      return {
        ...state,
        error: undefined,
        // wsConnected: true,
        orders: action.payload,
        dataIsReady: true,
      };

    default:
      return state;
  }
};

export default wsReducer;
