import React from 'react';
import { Text, View, StatusBar } from 'react-native';

import { theme } from './src/theme';
import { Widget } from './src/components/Widget';

export default function App() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
            }}
        >
            <StatusBar translucent backgroundColor="transparent" />

            <Widget />
        </View>
    );
}
