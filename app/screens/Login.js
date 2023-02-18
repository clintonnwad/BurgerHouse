import { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import defaultStyles from '../config/styles';

function Login(props) {
    return (
        <KeyboardAvoidingView style={[styles.container, defaultStyles.darkBckg]} behavior="padding">
            <Screen style={styles.screen}>
                <View style={styles.colOne}>
                    <Image source={require('../assets/logo.png')} style={defaultStyles.logoLarge} />
                </View>

                <View style={styles.colTwo}>
                    <AppTextInput placeholder="Username" inputMode='emailAddress' autoCapitalize="none" />
                    <AppTextInput placeholder="Password" secureTextEntry={true} />
                    <AppButton title="Login" />

                    <AppText textType='colored' style={{ textAlign: 'center', marginTop: 20 }}>Forgot Password</AppText>
                </View>

                <View style={styles.colThree}>
                    <AppText textType='primary' style={{ textAlign: 'center', marginTop: 20, fontWeight: '600' }}>
                        Don't have an account?
                        <AppText textType='colored' onPress={() => props.navigation.navigate('CreateAccount')}> Create account</AppText>
                    </AppText>
                </View>

            </Screen>

        </KeyboardAvoidingView>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25
    },
    screen: {
        flexDirection: 'column',
    },
    colOne: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    colTwo: {
        flex: 1,
    },
    colThree: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
    },

});