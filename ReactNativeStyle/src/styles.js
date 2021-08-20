import { StyleSheet, TouchableOpacity, Text} from "react-native";
import React from "react";


const styles = StyleSheet.create({
    container : {
        backgroundColor: '#9b59b6',
        borderRadius:15,
        paddingVertical:15,
        paddingHorizontal:40,
        marginVertical:10,
        justifyContent:'center',
    },

    title : {
        fontSize:20,
        fontWeight:'600',
        color : '#fff',
    },
});

const Button = props => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default Button;