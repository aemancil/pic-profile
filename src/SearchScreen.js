import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import axios from 'axios';
import { API_KEY, CX } from '@env';

const SearchScreen = ({ navigation }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        const response = await axios.get(
            'https://www.googleapis.com/customsearch/v1',
            {
                params: {
                    q: searchTerm,
                    cx: CX,
                    searchType: 'image',
                    key: API_KEY,
                },
            }
        );

        const items = response.data.items || [];
        if (items.length > 0) {
            const imageUrl = items[Math.floor(Math.random() * items.length)].link;
            navigation.navigate('Image', { imageUrl });
        }
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.container}>
                <TextInput
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                    placeholder="Enter a search term"
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Search" onPress={handleSearch} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: '80%',
        height: 40,
    },
    buttonContainer: {
        marginBottom: 20,
    },
});

export default SearchScreen;
