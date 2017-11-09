const initialState = {
	currentLang : 'gl',
};

export default function langSwitcher(state = initialState, action: any) {

  switch (action.type) {
  	
    case "SWITCH_LANG":
  	    return { ...state, currentLang: action.payload };

    default:
        return state
  }
}
