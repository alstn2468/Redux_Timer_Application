import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";
import ResetButton from "../ResetButton";
import TimeSetButton from "../TimeSetButton";
import TimePicker from "react-native-24h-timepicker";

class TimerPresenter extends Component {
    onCancel() {
        this.TimePicker.close();
    }

    onConfirm(hour, minute) {
        const { setTimer } = this.props;
        const timeDuration = parseInt(hour) * 60 + parseInt(minute);
        setTimer(timeDuration);
        this.TimePicker.close();
    }

    componentWillReceiveProps(nextProps) {
        const currentProps = this.props;

        if (!currentProps.isPlaying && nextProps.isPlaying) {
            const timerInterval = setInterval(
                () => currentProps.addSecond(),
                1000
            );
            this.setState({ timerInterval });
        } else if (currentProps.isPlaying && !nextProps.isPlaying) {
            clearInterval(this.state.timerInterval);
        }
    }

    render() {
        const {
            isPlaying,
            elapsedTime,
            timerDuration,
            startTimer,
            pauseTimer,
            resetTimer
        } = this.props;

        const minute = Math.floor((timerDuration - elapsedTime) / 60);
        const second = (timerDuration - elapsedTime) % 60;

        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} />
                <View style={styles.upper}>
                    <TimeSetButton onPress={() => this.TimePicker.open()} />
                    <ResetButton onPress={resetTimer} />
                    <Text style={styles.time}>
                        {minute < 10 ? `0${minute}` : minute}:
                        {second < 10 ? `0${second}` : second}
                    </Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying && (
                        <Button buttonName="START" onPress={startTimer} />
                    )}
                    {isPlaying && (
                        <Button buttonName="PAUSE" onPress={pauseTimer} />
                    )}
                </View>
                <TimePicker
                    ref={ref => {
                        this.TimePicker = ref;
                    }}
                    maxHour={60}
                    maxMinute={59}
                    onCancel={() => this.onCancel()}
                    onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CE0B24"
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    lower: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        color: "#FFFFFF",
        fontSize: 120,
        fontWeight: "100"
    }
});

export default TimerPresenter;
