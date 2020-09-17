import React, { Component, useState } from 'react'

import { View, Text, Button, Alert, StyleSheet, TouchableOpacity, Image, } from 'react-native'

function Card(task) {
    const [check, setcheck] = useState(false)

    return (
        <View style={styles.container}>
            {/*********CheckBox**********/}
            <TouchableOpacity style={[styles.checkBox, check ? { backgroundColor: "gray" } : {}]}

                onPress={() => {
                    setcheck(!check)
                }}

            >
                {/**if condition**/}
                {
                    check && <Image
                        style={{ width: 20, height: 20 }}
                        source={require("./true.png")}
                        isRemoved={true}
                    

                    />
                }

            </TouchableOpacity>


            {/*********CheckBox**********/}
            <Text numberOfLines={1} style={styles.textView}> {task.currentTask}</Text>

            {/*********deleteButton **********/}
            <TouchableOpacity style={styles.deleteButton}

               
                onPress={() => {
                    if(check)
                        console.log(task.removetask());
                }}>

                <Image
                    style={{ width: 20, height: 25, marginRight:20}}
                    source={require("./bin.png")}

                />

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 30,
        width: "95%",
        height: 60,
        alignItems: "center",
        paddingHorizontal: 8,
        backgroundColor: "white",
        marginBottom: 15,
    },
    checkBox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    textView: {
        width: 300,
        fontSize: 18,
        marginLeft: 8,
        color: "black",
    

    },
    deleteButton: {
        alignItems:"center",
        width:30,
        justifyContent: "center",
        alignItems: "flex-end",

    }
});



export default Card 
