import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const Button = ({ buttonName, onPress }) => {
    return (
        <TouchableOpacity onPressOut={onPress} style={styles.container}>
            <View style={styles.buttonView}>
                <Text style={styles.buttonText}>{buttonName}</Text>
            </View>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    buttonName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        width: "80%",
        height: "50%",
        justifyContent: "center"
    },
    buttonView: {
        width: "100%",
        height: 100,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    buttonText: {
        fontSize: 40,
        color: "#CE0B24"
    }
});

export default Button;
