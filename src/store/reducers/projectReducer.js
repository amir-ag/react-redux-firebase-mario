const initialState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'lorem' },
        {id: '2', title: 'figure stuff out', content: 'lorem' },
        {id: '3', title: 'do this', content: 'lorem' }
    ]
};


const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project: ', action.project)
    }
    return state
}

export default projectReducer;
