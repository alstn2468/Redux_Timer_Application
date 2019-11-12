import { connect } from "react-redux";
import TimerPresenter from "./TimerPresenter";

const mapStateToProps = state => {
    const { isPlaying, elapsedTime, timeDuration } = state;

    return {
        isPlaying,
        elapsedTime,
        timeDuration
    };
};

export default connect(mapStateToProps)(TimerPresenter);
