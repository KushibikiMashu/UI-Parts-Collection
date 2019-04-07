"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Reducer(state, action) {
    switch (action.type) {
        case 'SEND_MESSAGE':
            var message = action.message, time = action.time;
            return Object.assign({}, state, {
                messages: state.messages.concat({
                    userName: "self",
                    body: message,
                    time: time,
                    image: null,
                })
            });
        default:
            throw new Error();
    }
}
exports.Reducer = Reducer;
