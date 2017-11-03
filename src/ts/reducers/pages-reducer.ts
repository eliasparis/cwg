declare const CWGpages : string[];

const initialState = {
	currentPageHash : document.location.hash.replace('#', ''),
	errorHash: !CWGpages.includes(document.location.hash.replace('#', ''))
};

export default function pageActiver(state = initialState, action: any) {

  switch (action.type) {
  	
  	case "CHANGE_HASH":
  		return { ...state, currentPageHash: action.currentPageHash };

  	case "ERROR_HASH":
  		return { ...state, errorHash: true };

    case "VALID_HASH":
      return { ...state, errorHash: false };

    default:
      return state
  }
}
