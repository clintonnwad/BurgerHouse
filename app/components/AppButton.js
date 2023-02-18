import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import defaultStyles from '../config/styles';
import AppText from './AppText';

function AppButton({ title, size = 'large', style, onPress }) {
    let buttonWidth = { width: '100%' };
    let buttonTextWeight = { fontWeight: '800', };
    let buttonPadding = { padding: 20 }
    let button = { width: '100%', fontWeight: '800', padding: 20 };

    if (size === "small") {
        buttonWidth = { alignSelf: 'baseline' };
        buttonTextWeight = { fontWeight: 'normal' };
        buttonPadding = { padding: 10 }

        button = { alignSelf: 'baseline', fontWeight: 'normal', padding: 10 }
    }

    return (
        <TouchableOpacity style={buttonWidth} onPress={onPress}>
            <View style={[defaultStyles.appButton, buttonPadding]}>
                <AppText textType='buttonLG' style={[buttonTextWeight, style]}>{title}</AppText>
            </View>
        </TouchableOpacity>
    );
}

export default AppButton;
