import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { theme } from './src/theme';
import { Widget } from './src/components/Widget';

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: theme.colors.background,
                }}
            >
                <StatusBar translucent backgroundColor="transparent" />

                <Widget />
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}
