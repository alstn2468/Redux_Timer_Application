import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const ResetButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPressOut={onPress} style={styles.container}>
            <View style={styles.buttonView}>
                <Text style={styles.buttonText}>RESET</Text>
            </View>
        </TouchableOpacity>
    );
};

ResetButton.propTypes = {
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 40,
        justifyContent: "center",
        position: "absolute",
        top: 60,
        right: 20
    },
    buttonView: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    buttonText: {
        fontSize: 15,
        color: "#CE0B24"
    }
});

export default ResetButton;
