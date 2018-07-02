
export default function userReducer (state ={}, action) {
    switch (action.type) {
        case 'LOAD_USER':
            return {...state,
            users:action.users
            };
        default: return state;
    }

}