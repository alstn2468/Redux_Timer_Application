import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../reducer";
import TimerPresenter from "./TimerPresenter";

const mapStateToProps = state => {
    const { isPlaying, elapsedTime, timerDuration } = state;

    return {
        isPlaying,
        elapsedTime,
        timerDuration
    };
};

const mapDispatchToProps = dispatch => {
    return {
        startTimer: bindActionCreators(actionCreators.startTimer, dispatch),
        pauseTimer: bindActionCreators(actionCreators.pauseTimer, dispatch),
        resetTimer: bindActionCreators(actionCreators.resetTimer, dispatch),
        addSecond: bindActionCreators(actionCreators.addSecond, dispatch),
        setTimer: bindActionCreators(actionCreators.setTimer, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerPresenter);
