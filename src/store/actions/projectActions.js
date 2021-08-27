export const createProject = (project) => {
    return (dispatch, getState) => {
        //make asnyc call to db here
        dispatch({type: 'CREATE_PROJECT', project})
    }
}
