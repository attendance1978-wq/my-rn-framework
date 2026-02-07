import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@config/theme';

const Card = ({ children, style, onPress, ...props }) => {
  const theme = useTheme();

  const CardComponent = onPress ? TouchableOpacity : View;

  return (
    <CardComponent
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.card,
          shadowColor: theme.colors.shadow,
        },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      {...props}>
      {children}
    </CardComponent>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default Card;
