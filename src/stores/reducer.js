import produce from 'immer';

const initialState = {
    carts: []
};
export default function reducer (state = initialState, { type, payload }) {
    return produce(state, draft => {

        switch (type) {
            case `HANDLE_DD`:
                draft.carts = [];
    
            default:
                return state
        }
    });
}


