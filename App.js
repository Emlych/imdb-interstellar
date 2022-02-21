import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://ia.media-imdb.com/images/M/MV5BOTc2MzQ4MjAwM15BMl5BcG5nXkFtZTgwMzY2MzQ2OTE@._V1_.png",
          }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <ScrollView style={styles.scrollview}>
        <LinearGradient colors={["#191919", "#212121"]}>
          <View style={styles.main}>
            <Text style={styles.titleH1}>Interstellar</Text>
            <Text style={styles.info}>
              2014 PG-13 2h49min Adventure, Drama, Sci-Fi
            </Text>
            <View style={styles.block}>
              <Image
                source={require("./assets/film.jpg")}
                style={styles.poster}
                resizeMode="contain"
              />
              <View style={styles.description}>
                <Text style={[styles.info, styles.blockInfo]}>
                  A team of explorers travel through a wormhole in space in an
                  attempt to ensure humanity's survival.
                </Text>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>+ ADD TO WATCHLIST</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.block, styles.blockIcons]}>
              <View style={styles.blockIcon}>
                <FontAwesome name="star" color="yellow" size={32} />
                <Text style={[styles.iconText, styles.bold]}>
                  8.6<Text style={styles.info}>/10</Text>
                </Text>
                <Text style={styles.info}>1.1M</Text>
              </View>
              <View style={styles.blockIcon}>
                <FontAwesome name="star-o" color="#fff" size={32} />
                <Text style={[styles.iconText, styles.bold]}>RATE THIS</Text>
              </View>
              <View style={styles.blockIcon}>
                <Text style={styles.metascore}>74</Text>
                <Text style={[styles.iconText, styles.bold]}>Metascore</Text>
                <Text style={styles.info}>46 critic reviews</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        <LinearGradient colors={["#191919", "#212121"]}>
          <View style={styles.main}>
            <View style={styles.mainCast}>
              <Text style={styles.titleH2}>Top Billed Cast</Text>
              <Text style={[styles.link, styles.bold]}>SEE ALL</Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.caroussel}
            >
              <View style={styles.card}>
                <Image
                  source={require("./assets/matthew.jpg")}
                  style={styles.cardImage}
                  resizeMode="contain"
                />
                <View style={styles.cardText}>
                  <Text
                    style={[styles.titleH3, styles.truncate]}
                    numberOfLines={1}
                  >
                    Matthew McConnaue
                  </Text>
                  <Text style={styles.info}>Cooper</Text>
                </View>
              </View>
              <View style={styles.card}>
                <Image
                  source={require("./assets/anne.jpg")}
                  style={styles.cardImage}
                  resizeMode="contain"
                />
                <View style={styles.cardText}>
                  <Text
                    style={[styles.titleH3, styles.truncate]}
                    numberOfLines={1}
                  >
                    Anna Hathaway
                  </Text>
                  <Text style={styles.info}>Brand</Text>
                </View>
              </View>
              <View style={styles.card}>
                <Image
                  source={require("./assets/jessica.jpg")}
                  style={styles.cardImage}
                  resizeMode="contain"
                />
                <View style={styles.cardText}>
                  <Text
                    style={[styles.titleH3, styles.truncate]}
                    numberOfLines={1}
                  >
                    Jessica Chastaing
                  </Text>
                  <Text style={styles.info}>Murph</Text>
                </View>
              </View>
              <View style={styles.card}>
                <Image
                  source={require("./assets/mackenzie.jpg")}
                  style={styles.cardImage}
                  resizeMode="contain"
                />
                <View style={styles.cardText}>
                  <Text
                    style={[styles.titleH3, styles.truncate]}
                    numberOfLines={1}
                  >
                    Mackenzie Foy
                  </Text>
                  <Text style={styles.info}>Murph (10 yrs)</Text>
                </View>
              </View>
            </ScrollView>
            <Text style={styles.titleH3}>Director</Text>
            <Text style={styles.info}>Christopher Nolan</Text>
            <Text style={styles.titleH3}>Writers</Text>
            <Text style={styles.info}>
              Jonathan Nolan (written by) and Christopher Nolan (written by)
            </Text>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#393939",
    height: 85,
    color: "#fff",
    fontSize: 40,
    paddingLeft: 20,
  },
  logo: {
    height: 80,
    width: 80,
  },
  scrollview: {
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    backgroundColor: "#191919",
  },
  main: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },
  titleH1: {
    fontSize: 45,
    color: "#fff",
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    color: "#AAAAAA",
    paddingBottom: 20,
  },
  block: {
    flexDirection: "row",
  },
  poster: {
    flex: 1.2,
    width: "auto",
    height: "auto",
    marginRight: 10,
  },
  description: {
    flex: 1.8,
    paddingRight: 5,
  },
  blockInfo: {
    color: "#fff",
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "#0276BB",
    padding: 10,
    marginBottom: 40,
    borderRadius: 3,
  },
  btnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  blockIcons: {
    paddingTop: 40,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  blockIcon: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  metascore: {
    backgroundColor: "#5FC54C",
    fontSize: 24,
    color: "#FFF",
  },
  iconText: {
    paddingTop: 15,
    paddingBottom: 4,
    color: "#fff",
    fontSize: 15,
  },
  bold: {
    fontWeight: "700",
  },
  mainCast: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleH2: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 10,
  },
  link: {
    color: "#0277BD",
    fontSize: 15,
  },
  caroussel: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#2A2A2A",
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    marginRight: 10,
  },
  cardImage: {
    width: "100%",
    height: 230,
  },
  cardText: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleH3: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 5,
  },
  truncate: {
    width: 120,
  },
});
