import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Contador() {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(prev => prev + 1);
    }

  return (
    <View>
      <Text style={styles.contadorStyles}>Contador: {contador}</Text>
      <Pressable onPress={incrementar}>
        <Text>Incrementar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    contadorStyles: {
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center'
    }
})