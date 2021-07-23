import React from 'react';
import { Pressable, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = props => {
    console.log(props); 
    return (
        <TouchableOpacity style = {{
            backgroundColor : '#3489db',
            padding : 16,
            margin : 10,
            borderRadius : 8,
        }}
        onPress = {() => props.onPress()}
        >
            <Text style = {{
                color : 'white',
                fontSize : 24
            }}>{props.children || props.title}</Text>
        </TouchableOpacity>
    );
    
};
MyButton.defaultProps = {
    title : "Button",
};

MyButton.propTypes = {
    title :PropTypes.string.isRequired,
    
}


export default MyButton;