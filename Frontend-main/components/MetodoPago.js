

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MetodoPago = ({ navigation }) => {
  const handlePSEPayment = () => {
    navigation.navigate('PagoPSE');
  };

  const handleCardPayment = () => {
    navigation.navigate('PagoTarjeta'); // Puedes cambiar esto si deseas una vista diferente para pagar con tarjeta
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione un método de pago:</Text>
      <TouchableOpacity style={styles.paymentOption} onPress={handlePSEPayment}>
        <Image source={require('../assets/pse_logo.png')} style={styles.paymentLogo} />
        <Text style={styles.paymentText}>Pagar por PSE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.paymentOption} onPress={handleCardPayment}>
        <Image source={require('../assets/tarjeta_logo.png')} style={styles.paymentLogo} />
        <Text style={styles.paymentText}>Pagar por Tarjeta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  paymentLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  paymentText: {
    fontSize: 16,
  },
});

export default MetodoPago;


