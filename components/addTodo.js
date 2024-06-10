import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button, Keyboard } from "react-native";

export default function AddToDo({ submitHandler }) {
    const [text, setText] = useState("");

    const changeHandler = (val) => {
        setText(val);
    };

    return (
        <View>
            <TextInput
                placeholder="New Todo"
                style={styles.input}
                onChangeText={changeHandler}
                value={text}
            />
            <Button
                onPress={() => {
                    Keyboard.dismiss()
                    setText('');
                    submitHandler(text)
                }}
                title="Add Todo"
                color="coral"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
})