import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import styles from "./greeting_style.js";

const Welcome = () => {
    const [isLoading, setLoading] = useState(true);
    const [catFact, setCatFact] = useState([]);

    const getCatFact = () => {
        return fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(newCatFact => {
            setCatFact(newCatFact);
        }).catch(error => {
            console.error(error);
        }).finally(() => setLoading(false));
    }

    useEffect(() => {
        getCatFact();
    }, []);

    const fact = catFact
    return (
        <View
          style={ styles.container }>
            <Text>This is the Welcome Component!</Text>
            <Text style={ styles.centerText }>
                Below is an API call to get an anime list in json format 
                (hopefully)
            </Text>
            {isLoading ? <ActivityIndicator/> : (
                <Text>
                    { catFact.fact }
                </Text>
            )}
        </View>
    );
};

export default Welcome;