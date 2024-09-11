
import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {

  const deadpoolPokemonData ={
    name : "deadpool Pokemon",
    image: require("./assets/deadpoolPokemon.jpg"),
    type: "gun",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"]
  }

  const fireTailPokemonData = {
    name: 'Fire Tail',
    hp: 45,
    image: require('./assets/firetailPokemon.jpg'),
    type: 'fire',
    moves: ['Crouch', 'Row', 'Jump'],
    weaknesses : ['water', 'Sand']

  }

  const yellowPokemonData ={
    name: 'Pikatsu',
    hp: 50,
    image: require('./assets/yellowPokemon.jpg'),
    type: 'electric',
    moves: ['speed', 'lightening bolt'],
    weaknesses: ['None']
  }

  const vegetablePokemonData = {
    name: 'Bulbasur',
    hp: 52,
    image: require('./assets/vegetablePokemon.jpg'),
    type: 'knife',
    moves: ['strength', 'durability'],
    weaknesses: ['fire', 'lava']
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...deadpoolPokemonData}/>

        <PokemonCard {...yellowPokemonData}/>

        <PokemonCard {...fireTailPokemonData}/>

        <PokemonCard {...vegetablePokemonData}/>


      </ScrollView>

     
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3DD',
    paddingTop: Platform.OS === 'android' ? 40: 0
    
  },
});
