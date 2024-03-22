import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View, Image } from 'react-native';

const Header = ({ navigation }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Tastetrek" />
        
        <Appbar.Action icon="menu" onPress={handlePress} />
        {expanded && (
          <>
            <Appbar.Action icon="home" onPress={() => navigation.navigate('Inicio')} />
            <Appbar.Action icon="information" onPress={() => navigation.navigate('About Us')} />
            <Appbar.Action icon="email" onPress={() => navigation.navigate('Contact Us')} />
            <Appbar.Action icon="account" onPress={() => navigation.navigate('Login')} />
          </>
        )}
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#32cb94', // Ajusta este valor al color de tu marca
  },
  logo: {
    width: 30,
    height: 30,
  },
});

export default Header;
