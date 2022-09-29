import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import styles from "./list_view_style.js";

const ListView = () => {
    const [isLoading, setLoading] = useState(true);
    const [response, setResponse] = useState([]);

    const getCatFact = () => {
        return fetch("https://jikan1.p.rapidapi.com/top/anime/1/bypopularity", {
            method: "GET",
            headers: {
                'X-RapidAPI-Key': '081939f8famshaf7178bffd3b183p1f7014jsn5e35874c4d00',
                'X-RapidAPI-Host': 'jikan1.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(jsonData => {
            setResponse(jsonData.top);
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
                                Title: { item.title } { "\n" }
                                Rank: { item.rank } { "\n" }
                                Start Date: { 
                                    item.start_date ? item.start_date : "TBA" 
                                } { "\n" }
                                End Date: { 
                                    item.end_date ? item.end_date : "TBA" 
                                }
                            </Text>
                        )}
                    />
                </SafeAreaView>
            )}
        </View>
    );
};

export default ListView;