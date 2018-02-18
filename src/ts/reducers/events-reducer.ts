const initialState = {
  error: false,
  data: {},
  loading: true
};

export default function langSwitcher(state = initialState, action: any) {

  switch (action.type) {

    case "UPDATE_EVENTS":
  	    return { ...action.payload, loading: false };

    default:
        return state
  }
}
