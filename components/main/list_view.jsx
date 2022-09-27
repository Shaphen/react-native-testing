import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import styles from "./list_view_style.js";

const ListView = () => {
    const [isLoading, setLoading] = useState(true);
    const [response, setResponse] = useState([]);

    const getCatFact = () => {
        return fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then(response => response.json())
        .then(jsonData => {
            setResponse(jsonData.data);
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

            {isLoading ? <ActivityIndicator/> : (
                <SafeAreaView style={ styles.centerText }>
                    <FlatList
                        style={ styles.list }
                        data={ response }
                        keyExtractor={item => item.Population}
                        renderItem={({ item }) => (
                            <Text style={ styles.item }>
                                Nation: { item.Nation }, { "\n" }
                                Year: { item.Year }, { "\n" }
                                Population: { item.Population }
                            </Text>
                        )}
                    />
                </SafeAreaView>
            )}
        </View>
    );
};

export default ListView;