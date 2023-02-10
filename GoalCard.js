import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function GoalCard({ goal, index, sampleGoal, setSampleGoal }) {
  const handleDeleteGoal = (index) => {
    setSampleGoal(sampleGoal.filter((sampleGoal, i) => i !== index));
  };

  return (
    <View style={styles.viewGoalCard} key={index}>
      <Text style={styles.textGoal}>{goal}</Text>

      <TouchableOpacity
        style={styles.buttonAddGoal}
        onPress={() => handleDeleteGoal(index)}
      >
        <Text style={styles.textButtonAddGoal}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

export default GoalCard;

const styles = StyleSheet.create({
  viewGoalCard: {
    width: 320,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#C5DA13",
    opacity: 0.8,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 10,
  },

  textGoal: {
    paddingRight: 10,
  },

  buttonAddGoal: {
    alignItems: "center",
    backgroundColor: "#CD3131",
    borderRadius: 4,
    width: 20,
    height: 20,
  },

  textButtonAddGoal: {
    color: "#fff",
  },
});
