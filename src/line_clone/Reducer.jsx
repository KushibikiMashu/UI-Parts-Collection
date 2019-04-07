"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reducer(state, action) {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return Object.assign({}, state, {
                messages: state.messages.concat({
                    userName: "self",
                    body: action.message,
                    time: action.time,
                    image: null,
                })
            });
        default:
            throw new Error();
    }
}
exports.reducer = reducer;
