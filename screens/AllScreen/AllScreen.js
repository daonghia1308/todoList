import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { TODOS } from "../../utils/data"
import TodoItem from "../../components/TodoItem"

const AllScreen = props => {
    const [todoList, setTodoList] = useState(TODOS);
    const [todoBody, setTodoBody] = useState('');
    const onSubmitTodo = () => {
        const newTodo = {
            body: todoBody,
            status: 'Active',
            id: todoList.length + 1
        };
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
        setTodoBody('');
    };
    const onDeleteTodo = id => {
        let newtodoList = [...todoList]
        let data = newtodoList.filter((e) => { return e.id != id })
        setTodoList(data)
    };
    const onToggleTodo = id => {
        let todo = todoList.find(todo => todo.id === id);
        todo.status = todo.status === 'Done' ? 'Active' : 'Done';
        const foundIndex = todoList.findIndex(todo => todo.id === id);
        todoList[foundIndex] = todo;
        const newTodoList = [...todoList];
        setTodoList(newTodoList);
        props.navigation.navigate('Details', todoList[foundIndex])
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                {todoList.map((todo, idx) => {
                    return <TodoItem key={todo.body} todo={todo} idx={idx} onToggleTodo={onToggleTodo} onDeleteTodo={onDeleteTodo} />;
                })}
                <View style={styles.inputContainer}>
                    <TextInput
                        value={todoBody}
                        style={styles.todoInput}
                        onChangeText={text => setTodoBody(text)}
                    />
                    <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default AllScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    todoInput: {
        width: '95%',
        minHeight: 30,
        color: 'black',
        borderWidth: 1,
        marginTop: '20%',
        marginBottom: '5%',
        borderColor: 'grey'
    },
    inputContainer: {
        flex: 0.4,
        width: '90%',
        marginTop: 20,
        marginBottom: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        height: 50,
        width: '50%',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'blue',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});
