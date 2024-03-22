import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AboutUsScreen from './AboutUsScreen';
import ContactUsScreen from './ContactUsScreen';
import Lagranja from './Lagranja';
import Marmoreo from './Marmoreo';
import Elcorral from './Elcorral';
import Restaurante from './Restaurante';
import Inicio from './Inicio';
import RestaurantList from './HomeScreen';
import Header from '../components/Header';
import Reservar from './Reservar';
import MetodoPago from './MetodoPago';
import PagoPSE from './PagoPSE';
import PagoTarjeta from './PagoTarjeta';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Restaurantes"
          component={RestaurantList}
          options={{ header: props => <Header {...props} /> }}
        />
        
        <Stack.Screen
          name="About Us"
          component={AboutUsScreen}
          options={{ header: props => <Header {...props} /> }}
        />
        <Stack.Screen
          name="Contact Us"
          component={ContactUsScreen}
          options={{ header: props => <Header {...props} /> }}
        />
        <Stack.Screen
          name="La Granja"
          component={Lagranja}
          options={{ header: props => <Header {...props} /> }}
        />
        <Stack.Screen
          name="Marmoreo"
          component={Marmoreo}
          options={{ header: props => <Header {...props} /> }}
        />
        <Stack.Screen
          name="El Corral"
          component={Elcorral}
          options={{ header: props => <Header {...props} /> }}
        />
        <Stack.Screen
          name="Restaurante"
          component={Restaurante}
          options={{ header: props => <Header {...props} /> }}
        />
        <Stack.Screen
          name="Reservar"
          component={Reservar}
          options={{ header: props => <Header {...props} /> }}
        />
        <Stack.Screen
          name="MetodoPago"
          component={MetodoPago}
          options={{ header: props => <Header {...props} /> }}
        />
        <Stack.Screen
          name="PagoPSE"
          component={PagoPSE}
          options={{ header: props => <Header {...props} /> }}
        />
        <Stack.Screen
          name="PagoTarjeta"
          component={PagoTarjeta}
          options={{ header: props => <Header {...props} /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

