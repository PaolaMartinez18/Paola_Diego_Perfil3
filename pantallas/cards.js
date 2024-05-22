import React from 'react';
import { Button, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

export default function Pantalla({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* <View style={styles.buttonContainer}>
                <Button
                    title="Información"
                    onPress={() => navigation.navigate('information')}
                />
            </View> */}
            <Text style={styles.title}>Equipo</Text>
            <Card containerStyle={styles.card}>
                <Card.Title>Diego Fernando Ortiz Flores</Card.Title>
                <Text style={styles.carnet}>20190629</Text>
                <Image
                    style={styles.image}
                    source={require('../imagenes/Estudiante1.jpeg')}
                />
            </Card>
            <Card containerStyle={styles.card}>
                <Card.Title>Paola Beatriz Martínez Sánchez</Card.Title>
                <Text style={styles.carnet}>20220490</Text>
                <Image
                    style={styles.image}
                    source={require('../imagenes/Estudiante2.jpeg')}
                />
            </Card>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FC9E4F',
        paddingVertical: 30,
    },
    title: {
        fontSize: 50,
        marginBottom: 50,
    },
    card: {
        width: '75%',
        borderRadius: 10,
        shadowRadius: 4,
        marginBottom: 40,
    },
    image: {
        width: 'auto',
        height: 300,
        borderRadius: 25,
    },
    buttonContainer: {
        alignSelf:'flex-end',
        marginTop: 5,
        marginBottom: 5,
        marginRight:10,
        width: 'auto',
        borderRadius: 2
    },
    carnet: {
        textAlign: 'center',
    },
});
