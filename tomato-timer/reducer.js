// Actions
const START_TIMER = "START_TIMER";
const PAUSE_TIMER = "PAUSE_TIMER";
const RESET_TIMER = "RESET_TIMER";
const SET_TIMER = "SET_TIMER";
const ADD_SECOND = "ADD_SECOND";

// Action Creators
const startTimer = () => {
    return {
        type: START_TIMER
    };
};

const pauseTimer = () => {
    return {
        type: PAUSE_TIMER
    };
};

const resetTimer = () => {
    return {
        type: RESET_TIMER
    };
};

const addSecond = () => {
    return {
        type: ADD_SECOND
    };
};

const setTimer = timerDuration => {
    return {
        type: SET_TIMER,
        timerDuration
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
        case PAUSE_TIMER:
            return applyPauseTimer(state);
        case RESET_TIMER:
            return applyResetTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        case SET_TIMER:
            return applySetTimer(action.timerDuration);
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

const applyPauseTimer = state => {
    return {
        ...state,
        isPlaying: false
    };
};

const applyResetTimer = state => {
    return {
        ...initialState,
        timerDuration: state.timerDuration
    };
};

const applyAddSecond = state => {
    if (state.elapsedTime < state.timerDuration) {
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        };
    } else {
        return {
            ...initialState,
            timerDuration: state.timerDuration
        };
    }
};

const applySetTimer = timerDuration => {
    return {
        ...initialState,
        timerDuration
    };
};

// Export Action Creators
const actionCreators = {
    startTimer,
    pauseTimer,
    resetTimer,
    setTimer,
    addSecond
};

export { actionCreators };

// Export Reducer
export default reducer;
