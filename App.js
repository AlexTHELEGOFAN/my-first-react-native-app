import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import GoalCard from "./GoalCard";

function App() {
  const image = {
    uri: "https://mobimg.b-cdn.net/v3/fetch/e8/e8de90e4432306265f0023e82805bb01.jpeg",
  };

  const goals = [
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ];

  const [sampleGoal, setSampleGoal] = useState(goals);
  const [newSampleGoal, setNewSampleGoal] = useState("");
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [editingGoal, setEditingGoal] = useState("");
  const [editingIndex, setEditingIndex] = useState("");

  const handleSubmit = () => {
    setSampleGoal([...sampleGoal, newSampleGoal]);
    setNewSampleGoal("");
  };

  const handleSubmitEdit = () => {
    setSampleGoal(
      sampleGoal.map((sampleGoal, index) => {
        if (index === editingIndex) {
          return editingGoal;
        }
        return sampleGoal;
      })
    );
    setEditModalVisible(false);
  };

  const handleEditGoal = (index) => {
    setEditingGoal(sampleGoal[index]);
    setEditingIndex(index);
    setEditModalVisible(true);
  };

  return (
    <View style={styles.viewContainer}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.backgroundMainImage}
      >
        {/* Edit modal */}

        <Modal
          style={styles.modalEdit}
          visible={isEditModalVisible}
          transparent={true}
        >
          {/* Modal content */}

          <View style={styles.viewModalEditGoal}>
            <TouchableOpacity
              style={styles.touchableOpacityCloseModal}
              onPress={() => setEditModalVisible(false)}
            >
              <Text style={styles.textTOCloseModal}>X</Text>
            </TouchableOpacity>
            <TextInput
              value={editingGoal}
              style={styles.textInputGoal}
              onChangeText={(text) => setEditingGoal(text)}
              placeholder="Edit task"
            />

            <View style={styles.viewModalActions}>
              {/* Cancel */}
              <TouchableOpacity
                style={styles.touchableOpacityCancel}
                onPress={() => setEditModalVisible(false)}
              >
                <Text style={styles.textTOCancel}>Cancel</Text>
              </TouchableOpacity>

              {/* Save */}
              <TouchableOpacity
                style={styles.touchableOpacitySave}
                onPress={handleSubmitEdit}
              >
                <Text style={styles.textTOSave}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Content */}
        <Text style={styles.textTitle}>Max to-do</Text>

        {/* Actions */}
        <View style={styles.viewActions}>
          <TextInput
            style={styles.textInputAdd}
            value={newSampleGoal}
            onChangeText={(text) => setNewSampleGoal(text)}
            placeholder="Add a new goal"
          />

          <TouchableOpacity
            style={styles.touchableOpacityAddGoal}
            onPress={handleSubmit}
          >
            <Text style={styles.textTOCloseModal}>Add a goal</Text>
          </TouchableOpacity>
        </View>

        {/* Goal list */}
        <View style={styles.viewGoals}>
          {sampleGoal.map((goal, index) => (
            <TouchableOpacity onPress={() => handleEditGoal(index)}>
              <GoalCard
                goal={goal}
                index={index}
                sampleGoal={sampleGoal}
                setSampleGoal={setSampleGoal}
              />
            </TouchableOpacity>
          ))}
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  backgroundMainImage: {
    flex: 1,
    justifyContent: "center",
  },

  textTitle: {
    color: "#fff",
    fontSize: 24,
    marginLeft: 20,
  },

  viewActions: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  textInputAdd: {
    height: 40,
    width: 200,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    opacity: 0.8,
    borderRadius: 8,
    borderWidth: 0,
  },

  touchableOpacityAddGoal: {
    backgroundColor: "#B3CB4F",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
  },

  viewGoals: {
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  // Modal

  viewModalEditGoal: {
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#46B298",
    height: 120,
    width: "80%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 250,
    marginLeft: 40,
  },

  // Close modal

  touchableOpacityCloseModal: {
    backgroundColor: "#CD3131",
    borderRadius: 4,
    alignItems: "center",
    width: 20,
    height: 20,
  },

  textTOCloseModal: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },

  textInputGoal: {
    textAlign: "center",
  },

  viewModalActions: {
    paddingVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    // alignItems: "center",
    // backgroundColor: "#604C96",
  },

  // Cancel button
  touchableOpacityCancel: {
    backgroundColor: "#CD3131",
    borderRadius: 4,
    width: 100,
    height: 20,
  },

  textTOCancel: {
    textAlign: "center",
    color: "#fff",
  },

  // Save button
  touchableOpacitySave: {
    backgroundColor: "#B3CB4F",
    borderRadius: 4,
    width: 100,
    height: 20,
  },

  textTOSave: {
    textAlign: "center",
    color: "#fff",
  },
});
