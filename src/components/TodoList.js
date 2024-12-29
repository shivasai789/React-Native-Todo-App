import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput,TouchableOpacity,View } from 'react-native'
import TodoItem from './TodoItem'

const TodoList = ({todoList,onChangeStatus,deleteTodo,onEditText}) => {

    return (
        <ScrollView style={styles.container}>
            {
                todoList.map(todo => (
                    <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onEditText={(newText) => onEditText(todo.id,newText)} 
                    onChangeStatus={() => onChangeStatus(todo.id)} 
                    deleteTodo={() => deleteTodo(todo.id)} 
                    />
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})

export default TodoList