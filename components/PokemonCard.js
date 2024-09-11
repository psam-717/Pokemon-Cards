import {View, Text, StyleSheet, Platform, Image} from 'react-native'

const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
        case "gun": 
            return {borderColor: "#8FC0A9", emoji: "🔫"};
        case "knife":
            return {borderColor: "#68B0AB", emoji: '🔪'};
        case "electric":
            return {borderColor: "#4A7C59", emoji: '⚡'};
        case "water": 
            return {borderColor: "#ED9B40", emoji: '💦'};
        case "fire": 
            return {borderColor: "#61C9A8", emoji: "🔥"};
        default:
            return {borderColor: "#6D9DC5", emoji: "👽"}
    }
};

export default function PokemonCard({
    name,
    image,
    type, 
    hp,
    moves,
    weaknesses
}){
    const {borderColor, emoji} = getTypeDetails(type)

    return(
        <View style={styles.card}>
            <View style={styles.nameContainer}> 
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}> ❤️{hp}</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image
                source={image} 
                style={styles.image}
                accessibilityLabel={`${name} pokemon`}
                resizeMode='contain'
                />
            </View>

            

            <View style={styles.typeContainer}>
                <View style={[styles.badge, {borderColor}]}>
                    <Text style={styles.typeEmoji}>{emoji}</Text>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
            </View>

            <View style={styles.movesContainer}>
                <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
            </View>
            
            <View style={styles.movesContainer}>
                <Text style={styles.movesText}>Weaknesses: {weaknesses.join(", ")}</Text>
            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            android: {
                elevation: 5,
            }
        }),
        marginBottom: 20
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32
    },
    name:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    hp: {
        fontSize: 22
    },
    imageContainer:{
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100 ,
        marginBottom: 30,
    
    },
    typeContainer: {
        marginBottom: 40,
        alignItems: 'center'
    },
    badge:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 10,
        borderWidth: 5
    },
    typeEmoji: {
        fontSize: 20,
        marginRight: 10
    },
    typeText: {
        fontWeight: 'bold',
        fontSize: 22
    },
    movesContainer: {
        marginBottom: 20
    },
    movesText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})