import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function Second({navigation}){

	const key = navigation.getParam('key');
	console.log(key);

	return(
		<View style = {globalStyles.container}>
			<FlatList
				data = {images.subimages[key]}
				renderItem = {({ item, index }) => (
					<Card>
						<Image
							source = { item }
	     					style={{
	            				width: 300,
	            				height: 400
	          				}}
						/>	
					</Card>
				)}
				keyExtractor={item => item.id}
			/>
		</View>

	)

}