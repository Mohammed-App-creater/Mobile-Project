import { Text, Pressable, StyleSheet } from "react-native";

interface Props {
  title: string;
  handleSubmit: () => void;
  error?: string;
}

const primeryButten: React.FC<Props> = ({ title, handleSubmit, error }) => {
  return (
    <>
    {error && (
      <Text style={{ color: "red", fontSize: 16, marginTop: 10 }}>
        {error}
      </Text>
    )}
      <Pressable style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={{ color: "white", fontSize: 16 }}>{title}</Text>
      </Pressable>
    </>
  );
};

export default primeryButten;

const styles = StyleSheet.create({
  submitBtn: {
    backgroundColor: "#0b5be5",
    width: 330,
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
