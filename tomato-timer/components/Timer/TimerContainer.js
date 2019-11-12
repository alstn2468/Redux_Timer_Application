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
        restartTimer: bindActionCreators(actionCreators.restartTimer, dispatch),
        addSecond: bindActionCreators(actionCreators.addSecond, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerPresenter);
