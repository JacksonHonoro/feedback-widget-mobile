import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import successImg from '../../assets/success.png';

import { styles } from './styles';

export function Success() {
    return (
        <View style={styles.container}>
            <Image source={successImg} style={styles.image} />

            <Text style={styles.title}>Obrigado por sua contribuição!</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTitle}>Quero enviar outro</Text>
            </TouchableOpacity>
        </View>
    );
}