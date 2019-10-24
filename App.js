import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<View style={imgLoja.container}>
				<Image resizeMode="contain" style={img.stretch} source={require("./assets/tenis.jpg")} />
			</View>
			<View style={cento.container}>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
					<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Adidas</Text>
					<Text style={{ fontSize: 10 }}>Vendemos Tênis</Text>
				</View>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Button title="Seguir" onPress={() => Alert.alert("Você acabou de vender sua alma...")} /></View>
			</View>
			<View style={sobre.container}>
				<View style={{ flex:1 }}></View>
				<Text style={{ flex:10, justifyContent: 'center' }} >
					Precisou de Tênis? Aqui temos todos os tipos que você imaginar! Se precisar de Tênis, nos avise! :D
				</Text>
				<View style={{ flex:1 }}></View>
			</View>
		</View>
	);
}

const img = StyleSheet.create({
	stretch: {
		width: 470,
		height: 470,
		flex: 1
	}
});
const imgLoja = StyleSheet.create({
	container: {
		flex: 2,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
const cento = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
const sobre = StyleSheet.create({
	container: {
		flex: 2,
		flexDirection: 'row',
		backgroundColor: '#fff',
	},
});