import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput,TouchableOpacity,View } from 'react-native'
import TodoEdit from './TodoEdit';

const TodoItem = ({todo,onChangeStatus,deleteTodo,onEditText}) => {

    const [isEditing, setisEditing] = useState(false);

    const handleOnSave = (newText) => {
        onEditText(newText)
        setisEditing(false)
    }

    if(isEditing){
        return <TodoEdit todo={todo} handleOnSave={handleOnSave} onCancel={() => setisEditing(false)} />
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onChangeStatus} style={styles.todoNameCont}>
            <Text style={[styles.todoName, todo?.completed && styles.textCompleted]}>{todo.text}</Text>
            </TouchableOpacity>
            <View style={styles.btnContainer}>
                {
                    !todo.completed && (
                        <TouchableOpacity onPress={() => setisEditing(true)}>
                            <Image style={styles.icons} source={require("../Assets/edit.png")} />
                        </TouchableOpacity>
                    )
                }
                <TouchableOpacity onPress={deleteTodo}>
                <Image style={styles.icons} source={require("../Assets/delete.png")} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
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
    todoName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    todoNameCont:{
        flex: 1
    },
    textCompleted:{
        color: '#888888',
        textDecorationLine: 'line-through'
    },
    btnContainer: {
        flexDirection: 'row'
    },
    icons: {
        width: 25,
        height: 25,
        marginLeft: 10
    }
})

export default TodoItem