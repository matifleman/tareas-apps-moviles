import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type TarjetaProps = {
    texto: string;
}

export default function Tarjeta({texto}: TarjetaProps) {
    
    return (
    <Pressable style={({ pressed }) => [styles.tarjetaStyles, { backgroundColor: pressed ? 'lightgreen' : 'green' }]}>
        {({ pressed }) => (
            <Text style={[styles.textoStyle, { color: pressed ? 'black' : 'white' }]}>
                {texto}
            </Text>
        )}
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