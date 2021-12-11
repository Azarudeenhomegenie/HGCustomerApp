import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, Text, TextInput, Button, Image, ScrollView, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';


const HomePageScreen = props => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    //console.log(data.data);

  useEffect(() => {
    fetch('https://api.homegenie.com/api/webapi/getServiceGroup?city=Dubai&language=en')
    // https://api.homegenie.com/api/Webapi/offers?city=Dubai&language=en
    // https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json
    // https://api.homegenie.com/api/category/getAllCategories
    // https://api.homegenie.com/api/webapi/getServiceGroup?city=Dubai&language=en
    // https://reqres.in/api/users/1
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      console.log(response.data);
  }, []);
    // axios.get(`https://reqres.in/api/users/1`).then((response) => {
    //     console.log(response.data);
    //     alert(JSON.stringify(response.data));
    // });
    return (
        
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.ScrollView}>
                <View style={{ flex: 1, padding: 24 }}>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
                        <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>Test</Text>
                        <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
                        <FlatList
                            data={data.data}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => (
                            <Text>{item.title}</Text>
                            )}
                        />
                    </View>
                </View>
                <View>
                    <Swiper loop autoplay style={styles.wrapper}>
                        <View style={styles.slide1}>
                            <Image source={require('../assets/scroll1.png')} style={styles.img100} />
                        </View>
                        <View style={styles.slide2}>
                            <Image source={require('../assets/scroll2.png')} style={styles.img100} />
                        </View>
                        <View style={styles.slide3}>
                            <Image source={require('../assets/scroll2.png')} style={styles.img100} />
                        </View>
                    </Swiper>
                </View>
                <View style={styles.screen}>
                    <View style={styles.section}>
                        <Text style={[styles.homeTitles, styles.textLeft]}>Service Categories</Text>
                        <View style={styles.flexRow}>
                            <View style={styles.imageContainer}>
                                <Image source={require('../assets/Handyman.png')} style={styles.backgroundImage} />
                                <Text style={styles.serviceTitle}>DAILY {"\n"}UTILITIES</Text>
                            </View>
                            <View style={styles.imageContainer}>
                                <Image source={require('../assets/Health.png')} style={styles.backgroundImage} />
                                <Text style={styles.serviceTitle}>Health & {"\n"}Wellness</Text>
                            </View>
                        </View>
                        <View style={styles.flexRow}>
                            <View style={styles.imageContainer}>
                                <Image source={require('../assets/Lifestyle.png')} style={styles.backgroundImage} />
                                <Text style={styles.serviceTitle}>Lifestyle {"\n"}& Decor</Text>
                            </View>
                            <View style={styles.imageContainer}>
                                <Image source={require('../assets/Others.png')} style={styles.backgroundImage} />
                                <Text style={styles.serviceTitle}>Others</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={[styles.homeTitles, styles.textLeft]}>Offers & Promos</Text>
                        <Swiper loop autoplay style={styles.wrapper}>
                            <View style={styles.slide1}>
                                <Image source={require('../assets/scroll1.png')} style={styles.img100} />
                            </View>
                            <View style={styles.slide2}>
                                <Image source={require('../assets/scroll2.png')} style={styles.img100} />
                            </View>
                            <View style={styles.slide3}>
                                <Image source={require('../assets/scroll2.png')} style={styles.img100} />
                            </View>
                        </Swiper>
                    </View>
                    
                    
                    <View style={styles.section}>
                        <Text style={[styles.homeTitles, styles.textLeft]}>Specialized services</Text>
                        <View>

                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={[styles.homeTitles, styles.textCenter]}>HomeGenie Happiness Warranty</Text>
                        <View style={styles.flexRow}>
                            <Image source={require('../assets/hgWarranty.png')} style={styles.warrantyImage} />
                            <Text style={styles.content}>All service bookings are covered with at least an AED 1000 warranty against any damages. </Text>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.whyHomegenieSection}>
                            <Text style={styles.whyHomegenieText}>Why HomeGenie?</Text>
                            <View style={styles.flexRowSpace}>
                                <View style={styles.whyHomegenieImage}>
                                    <Image source={require('../assets/expert.png')} style={styles.alignCenter} />
                                    <Text style={styles.whyContent}>Expert {"\n"} professionals</Text>
                                </View>
                                <View style={styles.whyHomegenieImage}>
                                    <Image source={require('../assets/priceverification.png')} style={styles.alignCenter} />
                                    <Text style={styles.whyContent}>Great {"\n"} prices</Text>
                                </View>
                                <View style={styles.whyHomegenieImage}>
                                    <Image source={require('../assets/oneshop.png')} style={styles.alignCenter} />
                                    <Text style={styles.whyContent}>One-stop {"\n"} shop</Text>
                                </View>
                            </View>
                            <View style={styles.flexRowSpace}>
                                <View style={styles.whyHomegenieImage}>
                                    <Image source={require('../assets/qualityControl.png')} style={styles.alignCenter} />
                                    <Text style={styles.whyContent}>Enabling {"\n"} technology</Text>
                                </View>
                                <View style={styles.whyHomegenieImage}>
                                    <Image source={require('../assets/customerService.png')} style={styles.alignCenter} />
                                    <Text style={styles.whyContent}>World-class {"\n"} service</Text>
                                </View>
                                <View style={styles.whyHomegenieImage}>
                                    {/* <Image source={require('../assets/customerRating.png')} /> */}
                                    <Text style={styles.whyContent}>... and {"\n"} more!</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.featureIN}>
                            <Text style={styles.featureInText}>Featured in</Text>
                            <View style={styles.flexRowSpace}>
                                <Image source={require('../assets/gulfNews.png')} />
                                <Image source={require('../assets/khaleejTimes.png')} />
                                <Image source={require('../assets/theNational.png')} />
                            </View>
                            <View style={styles.space10}></View>
                            <View style={styles.flexRowSpace}>
                                <Image source={require('../assets/business.png')} />
                                <Image source={require('../assets/247.png')} />
                                <Image source={require('../assets/forbes.png')} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.flexRowSpace}>
                            <View>
                                <Text style={styles.needHelpText}>Need Help?</Text>
                            </View>
                            <View style={styles.flexRow}>
                                <Image source={require('../assets/whatsapp.png')} />
                                <Image source={require('../assets/800.png')} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* <View style={styles.screen}>
                <View style={styles.section}>
                    <View style={{ flex: 1, padding: 24 }}>
                        {isLoading ? <Text>Loading...</Text> : 
                        ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
                            <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>testing</Text>
                            <Text style={{ fontSize: 14, color: 'red', textAlign: 'center', paddingBottom: 10}}>Offers:</Text>
                            <FlatList
                                data={data.data}
                                keyExtractor={({ id }, index) => id}
                                renderItem={({ item }) => (
                                <Text>{item.id + '. ' + item.name}</Text>
                                )}
                            />
                        </View>
                            )}
                    </View>
                </View>
            </View> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 0,
    },
    section: {
        padding: 20
    },
    textCenter: {
        textAlign: 'center',
    },
    textLeft: {
        textAlign: 'left',
    },
    homeTitles: {
        fontSize: 20,
        color: '#2EB0E4',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        marginBottom: 10
    },
    flexRow: {
        flexDirection: 'row',
    },
    flexRowSpace: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer: {
        width: '50%',
        height: 100,
        marginBottom: 10,
        position: 'relative'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 10
    },
    serviceTitle: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    content: {
        textAlignVertical: 'center',
        fontSize: 18,
        flex: 1,
        paddingLeft: 10,
    },
    whyContent: {
        textAlignVertical: 'bottom',
        fontSize: 14,
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    alignCenter: {
        alignItems: 'center',
        alignContent: 'center',
        //flex: 1,
        justifyContent: 'center',

    },
    whyHomegenieSection: {
        backgroundColor: '#EFF7FC',
        borderRadius: 20,
        padding: 20,
    },
    whyHomegenieText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#525252'
    },
    whyHomegenieImage: {
        marginTop: 20,
        alignItems: 'center',
        flex: 1,
        //textAlign: 'center'
    },
    warrantyImage: {
        width: 130,
        height: 110,
    },
    featureInText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#525252',
        marginBottom: 20
    },
    space10: {
        paddingBottom: 10
    },
    needHelpText: {
        color: '#2EB0E4',
        fontSize: 16,
        fontWeight: 'bold',
    },
    wrapper: {
        height: 200,
    },
    img100: {
        width: '100%',
    },
    slide1: {
        flex: 1,
        width: '100%',
        backgroundColor: '#9DD6EB',
        borderRadius: 0
    },
    slide2: {
        flex: 1,
        width: '100%',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        width: '100%',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold'
    },
    ScrollView: {
        backgroundColor: 'transparent',
        padding: 0,
        marginTop: -30,
        elevation: 3,
    }
});

export default HomePageScreen;