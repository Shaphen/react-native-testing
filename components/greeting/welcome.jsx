import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import styles from "./greeting_style.js";

const Welcome = () => {
    const [isLoading, setLoading] = useState(true);
    const [response, setResponse] = useState([]);

    const getCatFact = () => {
        return fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then(response => response.json())
        .then(data => {
            setResponse(data);
            setLoading(false);
        }).catch(error => {
            console.error(error);
        });
    }

    useEffect(() => {
        getCatFact();
    }, []);

    return (
        <View
          style={ styles.container }>
            <Text>This is the Welcome Component!</Text>
            <Text style={ styles.centerText }>
                Below is an API call to get an anime list in json format 
                (hopefully)
            </Text>
            {isLoading ? <ActivityIndicator/> : (
                <Text style={ styles.centerText }>
                    {response.data.map(item => (
                        <Text key={item.Population}>
                            { item.Year }, { item.Population }
                        </Text>
                    ))}
                </Text>
            )}
        </View>
    );
};

export default Welcome;