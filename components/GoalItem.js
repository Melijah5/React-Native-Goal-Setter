import { Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
// import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function GoalItem(props) {
  return (
    
    <View style={styles.goalItem}>
      <TouchableOpacity  
          android_ripple={{color: '#dddddd'}}
          onPress={props.onDeleteItem.bind(this, props.id)}
          style={({pressed}) => pressed && styles.pressedItem}
          >
          <Text style={styles.goalText} >{props.text}</Text>
          {/* <Icon name='remove' size={20} color= 'firebrick'/> */}
      </TouchableOpacity>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem:{
        margin:3,
        borderRadius:6,
        backgroundColor: 'purple',
         
      },
      goalText:{
        color: 'white',
        padding: 10,  
      },
      pressedItem:{
        opacity:0.5
      }
})