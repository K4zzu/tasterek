import React from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import Reservar from './Reservar'; // Importa el componente Reservar

const Restaurante = ({ route, navigation }) => {
  const { nombre, descripcion, imagen } = route.params;

  const handleReservarPress = () => {
    // Implementa la navegación o lógica para ir a la vista de Reservar
    navigation.navigate('Reservar');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.nombre}>{nombre}</Text>
          <Text style={styles.descripcion}>{descripcion}</Text>
          <Image source={imagen} style={styles.image} resizeMode="cover" />
          {/* Agrega el componente Reservar */}
          <Reservar onPress={handleReservarPress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  descripcion: {
    color: '#808080',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default Restaurante;
