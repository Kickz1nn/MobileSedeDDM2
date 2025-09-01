import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
 
  titulo: {
    fontSize: 28,
    color: "#1e272e",
    fontWeight: "bold",
    marginBottom: 25,
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
 
  input: {
    height: 50,
    borderColor: "#ced6e0",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    width: "85%",
    backgroundColor: "#ffffff",
    fontSize: 16,
    color: "#2f3640",
 
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
 
  botao: {
    backgroundColor: "#3742fa",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
 
    elevation: 4,
 
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 0.8,
  },
 
  saudacao: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: "600",
    color: "#2d3436",
  },
 
  imagem: {
    marginTop: 25,
    width: 240,
    height: 240,
    resizeMode: "cover",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#dcdde1",
 
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
});
 
export default styles;
 