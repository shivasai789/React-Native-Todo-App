import React, { useState } from 'react'
import { StyleSheet, Text, TextInput,TouchableOpacity,View } from 'react-native'

const TodoInput = ({onAddTodo}) => {

    const [text,setText] = useState('');

    const handelAddTodo = () => {
        if(text.trim()){
            onAddTodo(text.trim())
            setText('');
        }
    }

    // console.log(text);
    return (
        <View style={styles.container}>
            <TextInput value={text} style={styles.input} placeholder='Add a new Todo...' onChangeText={setText} />
            <TouchableOpacity onPress={handelAddTodo} style={styles.addTodoBtn}>
                <Text style={styles.addTodoBtnText}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 5,
        height: 50,
        fontSize: 18,
        marginTop: 20,
        marginRight: 10,
        backgroundColor: '#ffffff'
    },
    addTodoBtn: {
        flex: .10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 20,
        backgroundColor: '#007aff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,   
    },
    addTodoBtnText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default TodoInput