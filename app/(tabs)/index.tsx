import { Link } from 'expo-router';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { fetchNamePokemon } from '../../util/pokemonApi';

export default function Index() {

  // Exemplo: chamar automaticamente ao montar o componente
  useEffect(() => {
    fetchNamePokemon({ query: 'pikachu' }).then(data => console.log(data));
  }, []);

  // Função para chamar ao clicar no botão
  const handleGetPokemon = async () => {
    const data = await fetchNamePokemon({ query: 'charmander' });
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>

      <Link href={{ pathname: "/" }} style={styles.link}>
        Go to About screen
      </Link>

      <Button title="Get Pokémon" onPress={handleGetPokemon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  link: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
    marginBottom: 20,
  },
});
