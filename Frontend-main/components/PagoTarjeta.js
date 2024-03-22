import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PagoTarjeta = () => {
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [codigoSeguridad, setCodigoSeguridad] = useState('');

  const handleSubmit = () => {
    // Aquí puedes implementar la lógica para enviar los detalles de la tarjeta a tu backend
    // y procesar el pago con tarjeta de crédito
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa los detalles de tu tarjeta de crédito:</Text>
      <TextInput
        style={styles.input}
        placeholder="Número de tarjeta"
        value={numeroTarjeta}
        onChangeText={setNumeroTarjeta}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de vencimiento (MM/YY)"
        value={fechaVencimiento}
        onChangeText={setFechaVencimiento}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Código de seguridad (CVV)"
        value={codigoSeguridad}
        onChangeText={setCodigoSeguridad}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Pagar $15.000</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PagoTarjeta;
