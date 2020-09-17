import React, { Component, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity, TextInput, FlatList, ImageBackground } from 'react-native'
import Card from './Card'
export default TodoList


var mytext = ""
//const image = { requi "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg" };

function TodoList() {
    const [task, settask] = useState("")
    const [tasks, settasks] = useState([])
    const [backgroundColor,setcolor]= useState('green')


    return (
        <View style={[styles.conitiner ,{backgroundColor:backgroundColor}]}>
            {/*********Text**********/}

            <Text style={{ fontSize: 45, color:"#C8E4FF",fontStyle:"italic" }}>My TODO</Text>
           <View style={styles.colorView}>
           <TouchableOpacity style={[styles.colorStyle, {backgroundColor:"#6B5B95"}]}
           onPress={()=>{
                setcolor("#6B5B95")
           }}/>
            <TouchableOpacity style={[styles.colorStyle, {backgroundColor:"#88B04B"}]}
               onPress={()=>{
                setcolor("#88B04B")
           }}/>
            <TouchableOpacity style={[styles.colorStyle, {backgroundColor:"#EFC050"}]}
               onPress={()=>{
                setcolor("#EFC050")
           }}/>
           </View>
            

            {/*********TextInput**********/}

            <TextInput
                style={styles.textinput}
                onChangeText={(currenttask) => {
                    settask(currenttask)
                    mytext = currenttask
                    //console.log(mytext);


                }}
                placeholder={"Input task name and then tap Enter to add"}>
                {task}</TextInput>

            {/*********FlatList**********/}

            <FlatList
                data={tasks}
                renderItem={({ item, index }) => {
                    return (

                        <Card currentTask={item} removetask={() => {
                            let temp = [...tasks]
                            temp.splice(index, 1);
                            settasks(temp)


                        }} />
                    )
                }}
            ></FlatList>

            {/*********Add Task**********/}

            <View style={{ position: 'absolute', bottom: 0,right: 0, margin: 16 }}>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        if (mytext) {
                            console.log(mytext);

                            let temp = [...tasks]
                            temp.push(task)
                            //console.log(temp);
                            settasks(temp)
                            settask("")
                            //console.log(task); 
                            mytext = ""
                        }
                        else {
                            Alert.alert(
                                'Empty Task Name',
                                'Please, Write name for your task ',
                                [
                                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                                ],
                                { cancelable: false }
                            );

                        }

                    }}>
                    <Text style={{ color: "white", alignSelf: "center", fontSize: 40, paddingBottom: 5 }}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conitiner: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    image: {
        alignSelf:"stretch",
        alignItems:"center",
        resizeMode: "cover",
        justifyContent: "center"
    },
    textinput: {
        borderRadius:15,
        padding:10,
        borderWidth: 1,
        width: "95%",
        height: 40,
        color: "white",
        marginTop: 16,
        marginBottom: 16,
        fontSize:16
    },
    button: {
        backgroundColor: "black",
        color: "white",
        width: 50,
        height: 50,
        borderRadius: 30,
        justifyContent: "center",
        elevation: 8
    },
    colorStyle:{
        width:40,
        height:40,
        borderRadius: 20,
     
        elevation:8
    },
    colorView:{
        width:200,
        flexDirection:"row",
        justifyContent:"space-between"
    }

})