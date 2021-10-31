import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItems({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>
                {item.text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        // color: 'white',
        padding: 16,
        marginTop: 16,
        // borderColor: 'white',
        // backgroundColor: '#031956',
        backgroundColor: '#f2f2f2',
        // borderWidth: 1,
        // borderStyle: 'dashed',
        borderRadius: 10,
    },
})
