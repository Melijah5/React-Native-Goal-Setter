import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import {useState} from 'react'
import GoalInput from './components/GoalInput';
// import  Icon  from 'react-native-vector-icons/dist/FontAwesome';


export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},]);
      endAddGoalHandler();
  }
  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  return (
    <>
    <StatusBar style='light' />
    <View style = {styles.appContainer}>
      <Button 
      title="Add New Goal"
      color="#5e0acc"
      onPress={startAddGoalHandler}/>
      <GoalInput 
      visible={modalIsVisible} 
      onAddGoal={addGoalHandler}
      onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoals} 
        renderItem={itemData => {
          return(
           <GoalItem  
           text={itemData.item.text}
           id={itemData.item.id}
           onDeleteItem={deleteGoalHandler}/>
          )
        }}>
          {/* <Icon name='remove' size={20} color= 'firebrick'/> */}
        </FlatList>
      </View>
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    margin:50,
    paddingHorizontal:16,
    flex: 1
    
  },
  goalsContainer:{
    flex:5
  }
});
