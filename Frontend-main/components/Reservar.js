import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, Modal } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

const Reservar = () => {
  const [fechaReserva, setFechaReserva] = useState('');
  const [horaReserva, setHoraReserva] = useState('');
  const [ampm, setAmPm] = useState('');
  const [numPersonas, setNumPersonas] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  const handleDayPress = (day) => {
    setFechaReserva(day.dateString);
    setShowCalendar(false);
  };

  const handleReservar = () => {
    if (fechaReserva && horaReserva && numPersonas) {
      setShowSuccessModal(true);
      // Navega a MetodoPago después de confirmar la reserva
      navigation.navigate('MetodoPago');
    } else {
      // Muestra un mensaje indicando al usuario que complete todos los campos necesarios
    }
  };

  const handleConfirmTime = (selectedTime) => {
    setHoraReserva(selectedTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    setShowTimePicker(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View>
          <Text style={styles.label}>Selecciona la fecha de reserva:</Text>
          <TouchableOpacity onPress={() => setShowCalendar(!showCalendar)}>
            <TextInput
              style={styles.input}
              value={fechaReserva}
              editable={false}
              placeholder="Selecciona la fecha"
            />
          </TouchableOpacity>
          {showCalendar && (
            <Calendar
              onDayPress={handleDayPress}
              markedDates={{
                [fechaReserva]: { selected: true, marked: true, selectedColor: 'blue' },
              }}
            />
          )}

          <Text style={styles.label}>Hora de reserva:</Text>
          <TouchableOpacity onPress={() => setShowTimePicker(true)}>
            <TextInput
              style={styles.input}
              value={horaReserva}
              editable={false}
              placeholder="Selecciona la hora"
            />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={showTimePicker}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={() => setShowTimePicker(false)}
          />

          <Text style={styles.label}>Número de personas:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNumPersonas}
            value={numPersonas}
            keyboardType="numeric"
            placeholder="Ingrese el número de personas"
          />

          <Button title="Reservar" onPress={handleReservar} />

          {/* Modal de reserva exitosa */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={showSuccessModal}
            onRequestClose={() => setShowSuccessModal(false)}
          >
            <View style={styles.centeredView}>
              
            </View>
          </Modal>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Reservar;
