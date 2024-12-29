import { Image, StyleSheet,Text,View } from "react-native";
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


const Todo = () => {

  const [todoList,setTodoList] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const onAddTodo = (text) => {
    if (text.trim() === "") return;
    setTodoList([...todoList,{
      id: Date.now().toString(),
      text,
      completed: false
    }])
    setSuccessMessage("Todo added successfully!");

    // Hide the message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  }

  const onChangeStatus = (id) => {
    setTodoList(
        todoList.map(item => 
            item.id === id ? {
                ...item,
                completed: !item.completed
            } : item,
        )
    )
    setSuccessMessage("Todo status updated successfully!");

    // Hide the message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  }

  const deleteTodo = (id) => {
    const filteredList = todoList.filter(todo => todo.id !== id);
    setTodoList(filteredList)
    setSuccessMessage("Todo deleted successfully!");

    // Hide the message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  }

  const onEditText = (id,text) => {
    setTodoList(
      todoList.map(item => 
          item.id === id ? {
              ...item,
              text: text,
          } : item,
      )
  )
  setSuccessMessage("Todo edited successfully!");

    // Hide the message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  }

  // console.log(todoList)

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo App</Text>
      <TodoInput onAddTodo={onAddTodo}/>
      <TodoList todoList={todoList} onEditText={onEditText} onChangeStatus={onChangeStatus} deleteTodo={deleteTodo} />
      {successMessage ? (
        <View style={styles.notificationBadge}>
        <View style={styles.notificationCont}>
          <Image style={styles.icons} source={require('../Assets/verify.png')} />
          <Text style={styles.successMessage}>{successMessage}</Text>
        </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8FAFC'
  },
  heading:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  redBox: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue'
  },
  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: 'green'
  },
  myText: {
    fontSize: 30
  },
  notificationBadge: {
    height: 50,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
  },
  successMessage: {
    color: "green",
    fontSize: 16,
    marginLeft: 10,
  },
  notificationCont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    width: 25,
    height: 25,
    marginLeft: 10
},
});

export default Todo;
