// Actions
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

// Action Creators
const startTimer = () => {
    return {
        type: START_TIMER
    };
};

const restartTimer = () => {
    return {
        type: RESTART_TIMER
    };
};

const addSecond = () => {
    return {
        type: ADD_SECOND
    };
};

// Reducer
const TIMER_DURATION = 10;

const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIMER_DURATION
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        default:
            return state;
    }
};

// Reducer Functions
const applyStartTimer = state => {
    return {
        ...state,
        isPlaying: true
    };
};

const applyRestartTimer = state => {
    return {
        ...state,
        isPlaying: false
    };
};

const applyAddSecond = state => {
    if (state.elapsedTime < TIMER_DURATION) {
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        };
    } else {
        return {
            ...initialState
        };
    }
};

// Export Action Creators
const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
};

export { actionCreators };

// Export Reducer
export default reducer;
