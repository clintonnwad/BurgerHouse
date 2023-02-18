import React from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import defaultStyles from '../config/styles';

function CreateAccount(props) {
    return (
        <KeyboardAvoidingView style={[styles.container, defaultStyles.darkBckg]} behavior="padding">
            <Screen>
                <ScrollView>
                    <View style={styles.central}>
                        <Image
                            source={require('../assets/logo-text.png')}
                            style={styles.logo}
                        />
                        <AppText textType="title" style={styles.title}>Create Account</AppText>

                        <AppTextInput placeholder="First Name" autoComplete="given-name" />
                        <AppTextInput placeholder="Last Name" autoComplete="family-name" />
                        <AppTextInput placeholder="Email Address" keyboardType="email-address" />
                        <AppTextInput placeholder="Password" secureTextEntry={true} />
                        <AppTextInput placeholder="Type Password Again" secureTextEntry={true} />
                        <AppButton title="Create Account" />

                        <AppText textType='primary' style={{ textAlign: 'center', marginTop: 30, fontWeight: '600' }}>
                            Already registered?
                            <AppText textType='colored' onPress={() => props.navigation.navigate('CreateAccount')}> Login</AppText>
                        </AppText>

                    </View>

                </ScrollView>
            </Screen>
        </KeyboardAvoidingView >
    );
}

export default CreateAccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        padding: 25,
    },
    logo: {
        height: 110,
        width: 250,
    },
    central: {
        alignItems: 'center',
    },
    title: {
        marginTop: 30,
        marginBottom: 20,
    }
})
