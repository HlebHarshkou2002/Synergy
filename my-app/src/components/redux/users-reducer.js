const ADD_USER = 'ADD-USER';

let initialState = {
    users: [
        {id: 1, follow: true, name: 'Alex', surname: 'Korol', location: {country: 'USA', city: 'New-York'}},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            return {}
        default:
            return state;
    }
}

export const followActionCreator = (id) => {type: 'FOLLOW', id: id}

export default usersReducer;