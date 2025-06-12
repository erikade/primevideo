import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import MovieTheWell from "../../assets/movies/the_wheel_of_time.png";
import MOVIESWATCHING from "../../utils/moviesWatching";
import MOVIESWATCH from "../../utils/moviesWatch";
import MOVIESCRIME from "../../utils/moviesCrimes";
import { MoviesCard } from "../../components/MoviesCard";
 
export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.PrimeLogoImg} souce={PrimeVideoLogo}/>
                <Image style={styles.AmazonLogoImg} souce={AmazonLogo}/>
            </View>
            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
            <TouchableOpacity style={styles.movieImageThumbnail}>
                <Image style={styles.movieImage} source={MovieTheWell}/>
            </TouchableOpacity>
 
            <Text style={styles.movieText}>Continue Watching</Text>
            <FlatList
                data={MOVIESWATCHING}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MoviesCard movieURL={item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />
 
            <Text style={styles.movieText}>Crime Movies</Text>
            <FlatList
                data={MOVIESCRIME}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MoviesCard movieURL={item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />
 
            <Text style={styles.movieText}>Watch in your language</Text>
            <FlatList
                data={MOVIESWATCH}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />
            </ScrollView>
        </View>
    )
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgoundColor: "#232F3E",
        alignItems: "flex-start",
    },
    header: {
        width: "100%",
        paddingTop: 80,
        allignIntems: "center",
        justifyContent: "center",
    },
    AmazonLogoImg: {
        marginTop: -32,
        marginLeft: 30,
 
    },
    category: {
        widht: "100%",
        flex: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 15,
    },
    movieText: {
        color: "#ffff",
        fontsize: 18,
        fontWeight: "700",
        padding: 15,
    },
    categoryText: {
        fontsize: 14,
        fontWeight: "700",
        color:"#FFF"
    },
    movieImageThumbnail: {
        width: "100%",
        allignIntems: "center",
    },
    contentList: {
        paddingLeft: 18,
        paddingRight: 30,
    },
    contentMovies: {},
 
 
});
 