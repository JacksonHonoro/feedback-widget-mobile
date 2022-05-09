import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    isLoading?: boolean;
    onPress: () => void;
}

export function Button({ isLoading, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {isLoading ? (
                <ActivityIndicator color={theme.colors.text_on_brand_color} />
            ) : (
                <Text style={styles.title}>Enviar Feedback</Text>
            )}
        </TouchableOpacity>
    );
}
