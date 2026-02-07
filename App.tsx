import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@config/theme';
import Button from '@components/Button';

const ExampleComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text
        style={{ color: theme.colors.text, fontSize: 18, marginBottom: 16 }}>
        Hello, themed world!
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

export default ExampleComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
