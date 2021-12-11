import React, { useEffect, useState, PureComponent } from 'react';
import { FlatList, StyleSheet, View, Text, TextInput, Button, Image, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';



// export const { width, height } = Dimensions.get('window');

//const newImage = [lion, fox, cat, background, element];
//const image = (index) => ({ image: newImage[index % newImage.length] });

//const items = Array.from(Array(5)).map((_, index) => image(index));
const HomePageScreen = props => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    //console.log(data.data);
    useEffect(() => {
        fetch('https://api.homegenie.com/api/Webapi/offers?city=Dubai&language=en')
            // https://api.homegenie.com/api/Webapi/offers?city=Dubai&language=en
            // https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json
            // https://api.homegenie.com/api/category/getAllCategories
            // https://api.homegenie.com/api/webapi/getServiceGroup?city=Dubai&language=en
            // https://reqres.in/api/users/1
            //.then((response) => response.json())
            .then((response) => response.json())
            .then((json) => setData(json.data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.ScrollView}>
                <View>
                    <Swiper style={styles.wrapper} height={200} onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                        dot={<View style={{elevation: 1, zIndex: 1, backgroundColor: '#fff',width: 20,height: 3,borderRadius: 0,marginLeft: 3,marginRight: 3,marginTop: 3,marginBottom: 3}} />} 
                            activeDot={<View style={{ backgroundColor: '#2EB0E4', width: 25,height: 3, borderRadius: 0, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />} 
                            paginationStyle={{ bottom: 17, left: null, right: 25 }}  autoplay={true} autoplayDirection scrollEnabled autoplayTimeout={4} >
                        <View style={styles.slide} title={
                            <View style={styles.homeBannerTextBox}>  
                            <Text style={styles.homeBannerText} style={{marginTop: 10, color: '#fff', fontSize: 12, left: 10}} >At your service, on-demand! {"\n"}Making home services experts {"\n"}simple, reliable and affordable. </Text>
                            <TouchableOpacity style={styles.homeBannerButton} >
                                <Text style={styles.homeBannerButtonText}>BOOK NOW</Text>
                            </TouchableOpacity>
                            </View>}>
                            <Image resizeMode="contain" style={{ width: '100%', height: 200}} source={require('../assets/home_slider1.jpg')} />
                        </View>
                        <View style={styles.slide} title={
                            <View style={styles.homeBannerTextBox}>  
                            <Text style={styles.homeBannerTextLaunch}>NEW LAUNCHES</Text>
                            <Text style={styles.homeBannerText} style={{marginTop: 15, color: '#fff', fontSize: 12, left: 10}} >We're now LIVE in AbuDhabi. {"\n"}Get AED 25 OFF on first self service. HGSELF25 </Text>
                            <TouchableOpacity style={styles.homeBannerButton} >
                                <Text style={styles.homeBannerButtonText}>BOOK NOW</Text>
                            </TouchableOpacity>
                            </View>}>
                            <Image resizeMode="contain" style={{ width: '100%', height: 200}} source={require('../assets/home_slider2.jpg')} />
                        </View>
                        <View style={styles.slide} title={
                            <View style={styles.homeBannerTextBox}>  
                            <Text style={styles.homeBannerTextLaunch}>NEW LAUNCHES</Text>
                            <Text style={styles.homeBannerText} style={{marginTop: 10, color: '#fff', fontSize: 12, left: 10}} >Launching COVID19 services {"\n"}Services you need in the safety and comfort {"\n"}of your home. </Text>
                            <TouchableOpacity style={styles.homeBannerButton} >
                                <Text style={styles.homeBannerButtonText}>BOOK NOW</Text>
                            </TouchableOpacity>
                            </View>}>
                            <Image resizeMode="contain" style={{ width: '100%', height: 200}} source={require('../assets/home_slider3.jpg')} />
                        </View>
                    </Swiper>
                </View>
                <View style={[styles.section]}>
                <Text style={[styles.mostPopular, styles.textLeft]}>MOST POPULAR</Text>
                <SwiperFlatList autoplay={true} autoplayDelay={3} autoplayLoop={true}>
                    <View style={[styles.child]}>
                        <Image style={styles.mostPopularImage} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/thumb_D2EwwBi571f8fef784f3f9e7f2779c3.png' }} />
                        <Text style={styles.textFlat}>AC</Text>
                    </View>
                    <View style={[styles.child]}>
                        <Image style={styles.mostPopularImage} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/thumb_l10dApL571f8ff0784f3f9e7f2779f1.png' }} />
                        <Text style={styles.textFlat}>Handyman</Text>
                    </View>
                    <View style={[styles.child]}>
                        <Image style={styles.mostPopularImage} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/thumb_UMVcTe9571f8ff0784f3f9e7f277a4a.png' }} />
                        <Text style={styles.textFlat}>Appliances</Text>
                    </View>
                    <View style={[styles.child]}>
                        <Image style={styles.mostPopularImage} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/thumb_YMhhaJG571f8ff0784f3f9e7f277a66.png' }} />
                        <Text style={styles.textFlat}>Technology</Text>
                    </View>
                    <View style={[styles.child]}>
                        <Image style={styles.mostPopularImage} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/thumb_NqeBSpb571f8ff0784f3f9e7f277a9d.png' }} />
                        <Text style={styles.textFlat}>Painting</Text>
                    </View>
                    <View style={[styles.child]}>
                        <Image style={styles.mostPopularImage} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/thumb_EO4dHHM571f8ff1784f3f9e7f277b0c.png' }} />
                        <Text style={styles.textFlat}>Cleaning</Text>
                    </View>
                    <View style={[styles.child]}>
                        <Image style={styles.mostPopularImage} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/thumb_C7lTWiL571f8ff0784f3f9e7f277ade.png' }} />
                        <Text style={styles.textFlat}>Pest Control</Text>
                    </View>
                    <View style={[styles.child]}>
                        <Image style={styles.mostPopularImage} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/thumb_PO5DZtp60bb5b2f50960c9741e5c654.png' }} />
                        <Text style={styles.textFlat}>Sanitisation</Text>
                    </View>
                    <View style={[styles.child]}>
                        <Image style={styles.mostPopularImage} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/thumb_e8NlHHy614ed71125da458f4ceeaa10.png' }} />
                        <Text style={styles.textFlat}>Spa</Text>
                    </View>
                </SwiperFlatList>
                </View>
                {/* <View style={styles.section} >
                    <Text style={[styles.mostPopular, styles.textLeft]}>MOST POPULAR</Text>
                    <Swiper autoplay={true} autoplayDirection scrollEnabled autoplayTimeout={4} showsPagination={false} style={styles.wrapperr}>
                        <Image style={{ width: 50, height: 50, borderRadius: 10, }} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/original_odm1F03offer.jpg' }} />
                        <Image style={{ width: 50, height: 50, borderRadius: 10, }} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/original_efY7pT5offer.jpg' }} />
                        <Image style={{ width: 50, height: 50, borderRadius: 10, }} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/original_N2SF7z2offer.jpg' }} />
                        <Image style={{ width: 50, height: 50, borderRadius: 10, }} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/original_SqVLmpmoffer.jpg' }} />
                        <Image style={{ width: 50, height: 50, borderRadius: 10, }} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/original_fMdHZiFoffer.jpg' }} />
                        <Image style={{ width: 50, height: 50, borderRadius: 10, }} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/original_HXRMajNoffer.jpg' }} />
                        <Image style={{ width: 50, height: 50, borderRadius: 10, }} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/original_FGewckpoffer.jpg' }} />
                    </Swiper>
                </View> */}
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
                    {/* <View style={styles.section}>
                        <Text style={[styles.homeTitles, styles.textLeft]}>Offers & Promos</Text>
                        <FlatList
                            data={data.data}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => (
                            <Swiper loop autoplay style={styles.wrapper}>
                                <Image style={{  width: '100%', height: 200, borderRadius: 10, resizeMode: 'contain' }}  source={{ uri: item.image }} />
                            </Swiper>
                            )}
                        />
                    </View> */}
                    {/* <View style={{flex: 1}} data={data.data}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => (
                        <Swiper autoplay style={styles.wrapper}>
                            <Image style={{  width: '100%', height: 200, borderRadius: 10, resizeMode: 'contain' }}  source={{ uri: item.image }} />
                        </Swiper>
                        )}
                    /> */}
                    <View style={styles.section}>
                        <Text style={[styles.homeTitles, styles.textLeft]}>Offers & Promos</Text>
                        <Swiper autoplay={true} autoplayDirection scrollEnabled autoplayTimeout={4} showsPagination={false} style={styles.wrapper}>
                            <Image style={{ width: '100%', height: 200, borderRadius: 10, resizeMode: 'contain' }} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/original_odm1F03offer.jpg' }} />
                            <Image style={{ width: '100%', height: 200, borderRadius: 10, resizeMode: 'contain' }} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/original_efY7pT5offer.jpg' }} />
                            <Image style={{ width: '100%', height: 200, borderRadius: 10, resizeMode: 'contain' }} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/original_N2SF7z2offer.jpg' }} />
                            <Image style={{ width: '100%', height: 200, borderRadius: 10, resizeMode: 'contain' }} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/original_SqVLmpmoffer.jpg' }} />
                            <Image style={{ width: '100%', height: 200, borderRadius: 10, resizeMode: 'contain' }} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/original_fMdHZiFoffer.jpg' }} />
                            <Image style={{ width: '100%', height: 200, borderRadius: 10, resizeMode: 'contain' }} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/original_HXRMajNoffer.jpg' }} />
                            <Image style={{ width: '100%', height: 200, borderRadius: 10, resizeMode: 'contain' }} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/original_FGewckpoffer.jpg' }} />
                        </Swiper>
                    </View>
                    <View style={styles.section}>
                        <Text style={[styles.homeTitles, styles.textCenter]}>Specialized services</Text>
                        <Text style={[styles.homeTitlesSub, styles.textCenter]}>Handpicked services from innovated brands. Now available!</Text>
                        <View style={[styles.specialServiceAll]}>
                            <View style={[styles.specialservicefirst, {marginTop: 20}]}>
                                {/* <View style={{borderBottomWidth:10, borderColor: '#2eb0e4', borderRadius: 10, marginTop: 10}}><Image style={{ width: '100%', height: 250, borderRadius: 10, resizeMode: 'cover', }} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/CovX-long-life-sanitisation20211009T08:26:08.jpg' }} /></View> */}
                                <View style={{borderBottomWidth:10, borderColor: '#2eb0e4', borderRadius: 10, marginTop: 10, }}>
                                    <ImageBackground
                                    source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/CovX-long-life-sanitisation20211009T08:26:08.jpg' }}
                                    style={{
                                        height: 250,         
                                    }}
                                    imageStyle={{
                                        resizeMode: 'cover',
                                        borderTopLeftRadius: 10,
                                        borderTopRightRadius: 10,  
                                    }}
                                    >
                                    </ImageBackground>
                                </View>
                                <Text style={styles.textSpecialService}>Covx long life sanitisation</Text>
                            </View>
                            <View style={[styles.specialserviceSecond, {marginTop: 20}]}>
                                <View style={{borderBottomWidth:10, borderColor: '#2eb0e4', borderRadius: 10, marginTop: 10}}>
                                    <Image style={{ width: '100%', height: 120, borderRadius: 10, resizeMode: 'cover' }} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/Creative-Wrap-innovative-renovations20211116T18:13:44.jpg' }} />
                                </View>
                                <Text style={styles.textSpecialService}>Creative wrap innovative renovations</Text>
                            </View>
                            <View style={[styles.specialserviceThird]}>
                                <SwiperFlatList autoplay={true} autoplayDelay={3} autoplayLoop={true} style={[styles.SwiperFlatListSpecial, {borderTopColor: 'grey', borderTopWidth: 1, marginTop: 10}]}>
                                    <View style={[styles.childd]}>
                                        <View style={{borderBottomWidth:10, borderColor: '#2eb0e4', borderRadius: 10, marginTop: 10}}><Image style={[styles.specialserviceThirdImage,]} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/Leak-Dtech-high-tech-leakage-detection20211009T08:27:01.jpg' }} /></View>
                                        <Text style={styles.textSpecialService}>Leak Dtech High tech leakage detection</Text>
                                    </View>
                                    <View style={[styles.childd]}>
                                        <View style={{borderBottomWidth:10, borderColor: '#2eb0e4', borderRadius: 10, marginTop: 10}}><Image style={styles.specialserviceThirdImage} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/Grout-cleaning-with-Coustic-Glo20211024T17:23:03.jpg' }} /></View>
                                        <Text style={styles.textSpecialService}>Grout cleaning with coustic GLO</Text>
                                    </View>
                                    <View style={[styles.childd]}>
                                        <View style={{borderBottomWidth:10, borderColor: '#2eb0e4', borderRadius: 10, marginTop: 10}}><Image style={styles.specialserviceThirdImage} source={{ uri: 'https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/Leather-doctor--Leather-restoration20211024T17:23:59.jpg' }} /></View>
                                        <Text style={styles.textSpecialService}>Leather Doctor - Leather Restoration</Text>
                                    </View>
                                </SwiperFlatList>
                            </View>
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
    homeTitlesSub: {
        fontSize: 12,
        color: 'grey',
    },
    mostPopular: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 10,
        marginBottom: 10,
        backgroundColor: '#f6b700',
        padding: 5,
        width: 90,
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
    borderRadius10: {
        borderRadius: 50
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
        backgroundColor: '#97CAE5',
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
        marginTop: -20,
        elevation: 3,
    },



    // slide: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     backgroundColor: 'grey',
    // },

    slide1: {
        flex: 1,
        width: '100%'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    homeBannerTextBox: {
        backgroundColor: '#00000052',
        height: 60,
        width: 500,
        flex: 1,
        position: 'absolute',
        bottom: 38,
        right: 0,
        left: 0,
        elevation: 0,
        zIndex: 0,
    },
    homeBannerTextLaunch: {
        backgroundColor: '#fff',
        position: 'absolute',
        left: 10,
        bottom: 50,
        padding: 5,
        fontSize: 10,
        color: '#000'
    },
    homeBannerText: {

    },
    homeBannerButton: {
        height: 30, 
        width: 110, 
        backgroundColor: '#f6b700', 
        position: 'absolute', 
        bottom: 20, 
        right: 120, 
        padding: 5, 
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    homeBannerButtonText: {
        color: '#fff',
        fontSize: 12
    },
    child: {
        borderRadius: 10, 
        borderColor: 'grey', 
        padding: 5, 
        width: 70,
        marginRight: 8,
        marginBottom: 10,
        marginLeft: 2,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textFlat: {
        fontSize: 10,
        color: '#000',
        marginTop: 5,
        textAlign: 'center',
    },
    mostPopularImage: {
        height: 35, 
        width: 35, 
    },
    textSpecialService: {
        textAlign: 'center',
        fontSize: 12,
        color: 'grey',
        marginTop: 5,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        padding: 2
    },
    childd: {
        width: 110,
        height: 220,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    specialserviceThirdImage: {
        width: 110,
        height: 120,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderRadius: 0,
        resizeMode: 'cover',
    }
});

export default HomePageScreen;