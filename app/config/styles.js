import React from 'react';
import { Platform } from 'react-native';

export default {
    // Text
    primaryText: {
        color: '#A2A7BA',
        fontSize: 16,
        // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    secondaryText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '700',
    },
    title: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '700',
    },
    coloredText: {
        color: '#DF933B',
        fontSize: 16,
        fontWeight: '600',
    },
    capText: {
        textTransform: 'uppercase',
    },


    // Background
    darkBckg: {
        backgroundColor: '#231F20',
    },
    lightShadeBckg: {
        backgroundColor: '#363031',
    },


    // Button
    appButton: {
        backgroundColor: '#DF933B',
        borderRadius: 20,
        marginVertical: 7
    },
    buttonLGText: {
        color: '#FFF',
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '800',
    },


    // Input Field
    textField: {
        backgroundColor: '#363031',
        padding: 20,
        color: '#FFF',
        width: '100%',
        borderRadius: 20,
        marginVertical: 5,
        fontSize: 16,
    },


    // Logo
    logoLarge: {
        height: 280,
        width: 280,
        justifyContent: 'flex-end',
    },
    logoSmall: {
        height: 80,
        width: 80,
    }

}