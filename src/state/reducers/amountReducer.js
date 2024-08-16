export default function reducer(state = 0, action) {
    if (action.type === "deposit") {
        return state + action.payload;
    } else if (action.type === "withdraw") {  // Note: I corrected "widraw" to "withdraw" here.
        return state - action.payload;
    } else {
        return state;
    }
}
