import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete-forever" size={20} color="black" />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        flexDirection: "row"
    },
    text: {
        marginLeft: 10
    }
})