import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type TarjetaProps = {
    texto: string;
}

export default function Tarjeta({texto}: TarjetaProps) {
    const [seleccionado, setSeleccionado] = useState(false);

    const cambiarSeleccion = () => {
        setSeleccionado(!seleccionado);
    }

  return (
    <Pressable style={[styles.tarjetaStyles, {backgroundColor: seleccionado ? 'lightblue' : 'darkblue'}]} 
                onPress={cambiarSeleccion}>
        <Text style={[styles.textoStyle, {color: seleccionado ? 'black' : 'white'}]}>{texto}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    tarjetaStyles: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: 15
    },

    textoStyle: {
        fontSize: 12,
    }
})