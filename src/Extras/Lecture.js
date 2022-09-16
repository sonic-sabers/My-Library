import React, { useEffect, useState } from 'react';

import {
	StyleSheet,
	Button,
	Image,
	Text,
	TouchableOpacity,
	View,
	// TextInput,
	ScrollView,
	KeyboardAvoidingView,
	SafeAreaView,
	ImageBackground,
	FlatList,
	ViewPropTypes,
	Switch,
	Dimensions,
} from 'react-native';
import {
	ImageBackgrounds,
	//   Loginbutton,
	Mybutton,
	Socialbutton,
	Toinput,
	Myheader,
	Curriculam,
	CourseD,
	PercentageBar,
} from '../../components';
import { colors } from '../../constants';
import { List } from 'react-native-paper';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import VideoPlayer from 'react-native-video-controls';
import Video from 'react-native-video';
import { ButtonGroup } from 'react-native-elements';

const useScreenDimensions = () => {
	const [screenData, setScreenData] = useState(Dimensions.get('screen'));
	useEffect(() => {
		const onChange = (result) => {
			setScreenData(result.screen);
		};
		Dimensions.addEventListener('change', onChange);
		return () => Dimensions.removeEventListener('change', onChange);
	});
	return {
		...screenData,
		isLandscape: screenData.width > screenData.height,
	};
};

const Responsive = () => {
	const screenData = useScreenDimensions();
	//console.log(screenData);
	return (
		<View
			style={[
				styles.container,
				screenData.isLandscape && styles.containerLandscape,
			]}
		>
			<View style={[styles.box, { width: screenData.width / 2 }]} />
		</View>
	);
}
// function App() {
// 	const screenData = useScreenDimensions();
// 	console.log(screenData);
// 	return (
// 		<View
// 			style={[
// 				styles.container,
// 				screenData.isLandscape && styles.containerLandscape,
// 			]}
// 		>
// 			<View style={[styles.box, { width: screenData.width / 2 }]} />
// 		</View>
// 	);
// };

const Lectures = () => {
	return (
		<View style={{ padding: 10, backgroundColor: 'green', height: '100%', width: '100%' }}>
			<Curriculam Noheader />
		</View>
	);
};
const initialLayout = { width: Dimensions.get('window').width };
let dimensions = Dimensions.get('window');
let videoHeight = dimensions.height;
let videowidth = dimensions.width;
const More = () => {
	return (
		<View style={{ flex: 1, padding: 10 }}>
			<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
				<Material name="information" size={20} color={colors.black} />
				<Text
					style={{
						fontWeight: '600',
						fontFamily: 'Poppins-Regular',
						fontSize: 16,
						color: '#000',
						marginLeft: 5,
					}}>
					About this course dfvdfb
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
				<Material name="note-text-outline" size={20} color={colors.black} />
				<Text
					style={{
						fontWeight: '600',
						fontFamily: 'Poppins-Regular',
						fontSize: 16,
						color: '#000',
						marginLeft: 5,
					}}>
					Notes
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
				<Material name="format-list-checks" size={20} color={colors.black} />
				<Text
					style={{
						fontWeight: '600',
						fontFamily: 'Poppins-Regular',
						fontSize: 16,
						color: '#000',
						marginLeft: 5,
					}}>
					Resources
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
				<Entypo name="notification" size={18} color={colors.black} />
				<Text
					style={{
						fontWeight: '600',
						fontFamily: 'Poppins-Regular',
						fontSize: 16,
						color: '#000',
						marginLeft: 5,
					}}>
					Announcement
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
				<Material name="bookmark-plus" size={20} color={colors.black} />
				<Text
					style={{
						fontWeight: '600',
						fontFamily: 'Poppins-Regular',
						fontSize: 16,
						color: '#000',
						marginLeft: 5,
					}}>
					Add to favourites
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
				<Material name="archive-arrow-down" size={20} color={colors.black} />
				<Text
					style={{
						fontWeight: '600',
						fontFamily: 'Poppins-Regular',
						fontSize: 16,
						color: '#000',
						marginLeft: 5,
					}}>
					Download
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
				<Material name="bug-outline" size={20} color={colors.black} />
				<Text
					style={{
						fontWeight: '600',
						fontFamily: 'Poppins-Regular',
						fontSize: 16,
						color: '#000',
						marginLeft: 5,
					}}>
					Report a problem
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const renderScene = SceneMap({
	first: Lectures,
	second: More,
});

const Myplayer = () => {
	return (
		<View style={{ flex: 1 }}>
			<VideoPlayer
				source={{
					uri: 'https://vjs.zencdn.net/v/oceans.mp4',
					headers: {
						Authorization: 'bearer some-token-value',
						'X-Custom-Header': 'some value'
					}
				}
				}
				// navigator={this.props.navigator}
				controls
				isFullscreen
				fullscreenAutorotate
				toggleResizeModeOnFullscreen
				seekColor={colors.primary}
				style={[styles.video, { position: 'relative' }]}
				resizeMode={'contain'}
				repeat

			// videoStyle={{ width: videoHeight, }}
			/>
			{/* <Button title='Fullscreen' onPress={()=> onEnterFullscreen()}/> */}
		</View>
	)
}
export default function Lecturescreen(props) {
	//console.log('video', props)
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'first', title: 'Lecture' },
		{ key: 'second', title: 'More' },
	]);
	return (
		<ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
			<Myheader Screenname="Course" Headername="" />
			<View>


				{/* <ImageBackground
				source={require('../../assets/imgs/Rectangle981phptp.png')}
				resizeMode="cover"
				// m
				style={styles.image}>
				<TouchableOpacity onPress={() => navigation.navigate('Course')}>
					<Image
						source={require('../../assets/imgs/Group10786phptp.png')}
						resizeMode="cover"
						style={{
							height: 50,
							width: 50,
							borderRadius: 5,
							alignSelf: 'center',
						}}
					/>
				</TouchableOpacity>
			</ImageBackground> */}
				<Myplayer />

				<View style={{ padding: 10 }}>
					<Text
						style={{
							fontSize: 18,
							fontWeight: '500',
							color: colors.black,
							fontFamily: 'Poppins-Regular',
						}}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</Text>
				</View>
				<Text
					style={{
						fontWeight: '300',
						fontFamily: 'Poppins-Regular',
						fontSize: 16,
						color: '#0B121F',
						marginLeft: 10,
					}}>
					Trainer Name
				</Text>

				<View style={{ flex: 1 }}>
					<TabView
						navigationState={{ index, routes }}
						renderScene={renderScene}
						onIndexChange={setIndex}
						initialLayout={initialLayout}
						style={styles.container}
						renderTabBar={props => (
							<TabBar
								{...props}
								renderLabel={({ route, color }) => (
									<Text
										style={{
											fontWeight: '600',
											fontFamily: 'Poppins-Regular',
											fontSize: 14,
											color: '#1a21bc',
										}}>
										{route.title}
									</Text>
								)}
								style={{
									backgroundColor: 'white',
									//   borderTopColor: 'rgba(9,9,9,0.5)',
									// marginLeft: -20,
								}}
								activeColor={colors.primary}
								inactiveColor={'#666'}
								bounces
								indicatorStyle={{
									backgroundColor: colors.primary,
								}}
								tabStyle={{ marginVertical: -7 }}
							// indicatorStyle={{ width: 2,  height: 1 }}
							/>
						)}
					/>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		height: 150,
		width: '100%',
		paddingHorizontal: -20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: 'white',
		fontSize: 42,
		lineHeight: 84,
	},
	video: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').width * (9 / 16),
		backgroundColor: 'black',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerLandscape: {
		backgroundColor: '#000',
	},
	box: {
		backgroundColor: 'red',
		height: 100,
	},
});
