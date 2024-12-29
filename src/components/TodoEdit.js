import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput,TouchableOpacity,View } from 'react-native'

const TodoEdit = ({todo,handleOnSave,onCancel}) => {

    const [text,setText] = useState(todo.text);

    const handleSave = () => {
        if(text.trim()){
            handleOnSave(text.trim())
        }
        
    }

    return (
        <View style={styles.container}>
            <TextInput value={text} onChangeText={setText} style={styles.input} />
                        <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={onCancel}>
                            <Image style={styles.icons} source={require("../Assets/cancel.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSave}>
                            <Image style={styles.icons} source={require("../Assets/check-mark.png")} />
                        </TouchableOpacity>
                        </View>
                
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        margin: 5,
        backgroundColor: '#ffffff',
        padding: 8,
        borderRadius: 5
    },
    btnContainer: {
        flexDirection: 'row'
    },
    icons: {
        width: 25,
        height: 25,
        marginLeft: 10
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 18,
        marginRight: 10,
        backgroundColor: '#ffffff'
    }
})

export default TodoEdit