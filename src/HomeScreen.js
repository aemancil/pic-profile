import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Search');
  };

  return (
    <View style={styles.container}>
      <Button title="Get Started" onPress={handleGetStarted} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3E5F5'
  },
});

export default HomeScreen;
