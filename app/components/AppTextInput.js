import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import defaultStyles from '../config/styles';

function AppTextInput(otherProps) {
    return (
        <TextInput placeholderTextColor='#7A7D86' style={defaultStyles.textField} {...otherProps} keyboardAppearance="dark" />
    );
}

export default AppTextInput;
