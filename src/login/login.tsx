import React from 'react';
import { useFonts } from 'expo-font';
import { View, Text, Pressable, Image } from 'react-native';

export default function Login() {
    const [fontsLoaded] = useFonts({
        'Espressonal': require('../../assets/fonts/Espressonal.otf'),
    })

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#1F1F50',
        }}>
            <View style={{display: 'flex', justifyContent: 'center',flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{
                    fontFamily: 'Espressonal',
                    fontSize: 70,
                    color: '#FF5912',
                    fontWeight: 'bold'
                }}>TDAHelp</Text>
                <Image source={require('../../assets/icone.png')} style={{width: 150, height: 150}}/>
            </View>
            <View style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center', 
                rowGap: 15  
            }}>
                <Pressable style={{
                    backgroundColor: '#FF5912',
                    width: '85%',
                    borderRadius: 15,
                    paddingVertical: 20
                }}>
                    <Text style={{
                        color: 'white', 
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center'}}>Login</Text>
                </Pressable>
                <Pressable style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    width: '85%',
                    borderRadius: 15,
                    paddingVertical: 20
                }}>
                    <Text style={{
                        color: 'white', 
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center'}}>Cadastrar-se</Text>
                </Pressable>
            </View>
        </View>
    );
}