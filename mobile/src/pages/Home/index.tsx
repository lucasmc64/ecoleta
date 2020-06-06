import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Image, ImageBackground, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';

interface Option {
    label: string,
    value: string,
}

interface IBGEUFResponse {
    sigla: string;
}

interface IBGECityResponse {
    nome: string;
}

const Home = () => {
    const [selectedUf, setSelectedUf] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const [optionsUf, setOptionsUf] = useState<Option[]>([]);
    const [optionsCity, setOptionsCity] = useState<Option[]>([]);

    const optionsUfPlaceholder = { label: 'Selecione uma UF...', value: null }
    const optionsCityPlaceholder = { label: 'Selecione uma cidade...', value: null }

    const navigation = useNavigation();

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome').then((response) => {
            const ufs = response.data.map((uf) => uf.sigla);

            const optionsUf = ufs.map((uf) => {
                return {
                    label: uf,
                    value: uf,
                };
            });

            setOptionsUf(optionsUf);
        });
    }, []);

    useEffect(() => {
        if (selectedUf === '') {
            return;
        }

        axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then((response) => {
            const cities = response.data.map((city) => city.nome);

            const optionsCity = cities.map((city) => {
                return {
                    label: city,
                    value: city,
                    
                };
            });

            setOptionsCity(optionsCity);
        });
    }, [selectedUf]);

    function handleNavigateToPoints() {
        console.log(selectedUf, selectedCity);
        navigation.navigate('Points', {
            selectedUf,
            selectedCity,
        });
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} >
            <ImageBackground source={require('../../assets/home-background.png')} imageStyle={{ width: 274, height: 368 }} style={styles.container}>
                <View style={styles.main}>
                    <Image source={require('../../assets/logo.png')} />
                    <View>
                        <Text style={styles.title}>Seu marketplace de coleta de resíduos.</Text>
                        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <View style={styles.selectsContainer}>
                        <RNPickerSelect
                            style={pickerSelectStyles}
                            useNativeAndroidPickerStyle={false}
                            placeholder={optionsUfPlaceholder}
                            onValueChange={(value) => setSelectedUf(value)}
                            items={optionsUf}
                            Icon={() => {
                                return <FontAwesome name="chevron-down" size={20} color="#A0A0B2" />;
                            }}
                        />
                        <RNPickerSelect
                            style={pickerSelectStyles}
                            useNativeAndroidPickerStyle={false}
                            placeholder={optionsCityPlaceholder}
                            onValueChange={(value) => setSelectedCity(value)}
                            items={optionsCity}
                            Icon={() => {
                                return <FontAwesome name="chevron-down" size={20} color="#A0A0B2" />;
                            }}
                        />
                    </View>

                    <RectButton style={styles.button} onPress={handleNavigateToPoints}>
                        <View style={styles.buttonIcon}>
                            <Text>
                                <Icon name="arrow-right" color="#FFFFFF" size={24} />
                            </Text>
                        </View>
                        <Text style={styles.buttonText}>
                            Entrar
                        </Text>
                    </RectButton>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
    },

    main: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        color: '#322153',
        fontSize: 32,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 64,
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
    },

    footer: {},
    
    selectsContainer: {
        marginBottom: 16,
    },

    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button: {
        height: 60,
        flexDirection: 'row',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
        backgroundColor: '#34CB79',
    },

    buttonIcon: {
        height: 60,
        width: 60,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        color: '#A0A0B2',
        height: 60,
        borderRadius: 8,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
    },
    inputAndroid: {
        color: '#A0A0B2',
        height: 60,
        borderRadius: 8,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
    },
    iconContainer: {
        top: 20,
        right: 15,
    },
    placeholder: {
        color: '#A0A0B2',
    }
});

export default Home;