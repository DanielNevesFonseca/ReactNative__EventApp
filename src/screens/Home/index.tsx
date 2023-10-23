import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export default function Home() {
  const [participants, setParticipants] = useState<Array<string>>([]);
  const [participantName, setParticipantName] = useState<string>("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante Já Existe!",
        "Participante digitado já está na lista!"
      );
    }

    if (participantName.length < 3) {
      return Alert.alert(
        "Nome inválido!",
        "Insira um nome válido para a lista!"
      );
    }

    setParticipants((prevValue) => [...prevValue, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Remover",
      `Tem certeza que deseja remover o participante ${name}?`,
      [
        {
          text: "Sim",
          onPress: () => {
            setParticipants((prevState) =>
              prevState.filter((person) => person !== name)
            );
            Alert.alert("Deletado!", `Você deletou o participante ${name}!`);
          },
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Aniversário do Daniel</Text>

      <Text style={styles.eventDate}>Sábado, 5 de Novembro de 2023.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do convidado"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* JEITO DO REACT NATIVE */}

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            key={item}
            handleParticipantRemove={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <Text style={styles.emptyListMessage}>
              Ninguém chegou no evento ainda?
            </Text>
            <Text style={styles.emptyListMessage}>
              Adicione participantes à sua lista!
            </Text>
          </>
        )}
      />

      {/* JEITO TRADICIONAL NA WEB
      
      <ScrollView>
        {participants.map((person, index) => (
          <Participant
            key={index}
            name={person}
            handleParticipantRemove={handleParticipantRemove}
          />
        ))}
      </ScrollView> */}
    </View>
  );
}
