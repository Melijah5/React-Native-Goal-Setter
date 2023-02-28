import { useState } from "react"
import { Button, Modal, StyleSheet, TextInput, View, Image } from "react-native"

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText]=useState('')

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText)
      }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    }
  return (
    <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/goal.png')}/>
            <TextInput style={styles.textInput} 
            placeholder='Cool stack team'
            onChangeText={goalInputHandler} 
            value={enteredGoalText}/>

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                     <Button title='Add Team' onPress={addGoalHandler} color='#5e0acc'/>
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onCancel} color='#f31282'/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#311b6b'
      },

      textInput:{
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        width:'70%',
        marginRight:8,
        padding: 14,
        color: 'blue',
        borderRadius:15
      },
      buttonContainer:{
        flexDirection: 'row'
      },
      button:{
        margin: '2%'
      },
      image:{
        width:100,
        height:100,
        margin:20
      }
})