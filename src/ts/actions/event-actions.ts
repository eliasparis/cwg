function getInitialState(){
    return async function(dispatch: any, getState: any){
        var data = await fetch('scripts/state.php').then((data) => data.json());
        if (data.status === 'Ok'){
            dispatch(updateInitialState(false, JSON.parse(data.data)));
        }else{
            dispatch(updateInitialState());   
        }
    }
}

function updateInitialState(error: boolean = true, data: any = ''){
    return{
        type: 'UPDATE_EVENTS',
        payload: {
            data,
            error
        }
    }
}

export { getInitialState };