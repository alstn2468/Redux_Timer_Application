import { connect } from "react-redux";
import TimerPresenter from "./TimerPresenter";

const mapStateToProps = state => {
    const { isPlaying, elapsedTime, timerDuration } = state;

    return {
        isPlaying,
        elapsedTime,
        timerDuration
    };
};

export default connect(mapStateToProps)(TimerPresenter);
