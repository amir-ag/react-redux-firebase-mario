export const createProject = (project) => {
    return (dispatch, getState) => {

        // firestore.collection('projects').add({
        //     ...project,
        //     authorFirstName: 'Am',
        //     authorLastName: 'Ir',
        //     authorId: 12345,
        //     createdAdd: new Date()
        // }).then(() => {
        //     dispatch({type: 'CREATE_PROJECT', project})
        // }).catch((err) => {
        //     dispatch({type: 'CREATE_PROJECT_ERROR', err})
        // })
    }
}
