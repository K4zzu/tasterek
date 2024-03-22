import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importa Picker desde el paquete correcto

const PagoPSE = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [documento, setDocumento] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [showBankPicker, setShowBankPicker] = useState(false);

  const handleSubmit = () => {
    // Aquí puedes implementar la lógica para enviar los datos del cliente
    // a tu backend y procesar el pago por PSE
  };

  const toggleBankPicker = () => {
    setShowBankPicker(!showBankPicker);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ingresa tus datos:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
      />
      <TextInput
        style={styles.input}
        placeholder="Documento de identidad"
        value={documento}
        onChangeText={setDocumento}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.input} onPress={toggleBankPicker}>
        <Text>{selectedBank || 'Seleccione un banco'}</Text>
      </TouchableOpacity>
      {showBankPicker && (
        <Picker
          selectedValue={selectedBank}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedBank(itemValue)}
        >
          <Picker.Item label="BANCAMIA S.A." value="BANCAMIA S.A." />
          <Picker.Item label="BANCO AGRARIO" value="BANCO AGRARIO" />
          <Picker.Item label="BANCO AV VILLAS" value="BANCO AV VILLAS" />
          <Picker.Item label="BANCO BBVA" value="BANCO BBVA" />
          <Picker.Item label="BANCO DAVIVIENDA" value="BANCO DAVIVIENDA" />
          <Picker.Item label="BANCO DE BOGOTA" value="BANCO BOGOTA" />
          <Picker.Item label="BANCO DE OCCIDENTE" value="BANCO DE OCCIDENTE" />
          <Picker.Item label="BANCO FALABELLA" value="BANCO FALABELLA" />
          <Picker.Item label="BANCOLOMBIA" value="BANCOLOMBIA" />
          <Picker.Item label="CITIBANK" value="CITIBANK" />
          <Picker.Item label="DAVIPLATA" value="DAVIPLATA" />
          <Picker.Item label="NEQUI" value="NEQUI" />
          {/* Agrega más bancos aquí según sea necesario */}
        </Picker>
      )}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Pagar $15.000</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    justifyContent: 'center',
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
  picker: {
    width: '100%',
    height: 50,
  },
});

export default PagoPSE;
