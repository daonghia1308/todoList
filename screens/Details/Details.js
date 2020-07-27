import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Details = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.textDetail}>{props.route.params.id}.{props.route.params.body}</Text>
        </View>
    );
}

export default Details;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    textDetail: {
        fontSize: 40
    }
});