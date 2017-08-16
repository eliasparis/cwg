const initialState = {
	currentPageHash : document.location.hash.replace('#', '')
};

export default function pageActiver(state = initialState, action: any) {

  switch (action.type) {
  	
  	case "CHANGE_HASH":
  		return {...state, currentPageHash: action.currentPageHash};
  	break;

    default:
      return state
  }
}
