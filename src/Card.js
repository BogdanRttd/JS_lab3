import { StyleSheet, SafeAreaView, View, Text } from 'react-native'


const Card = ({ title, amount, date }) => {
	return (
		<SafeAreaView style={styles.note}>
			<View style={styles.dateblock}>
				<Text style={styles.date}>Дата:</Text>
				<Text style={styles.date}>{date}</Text>
			</View>
			<View>
				<Text style={styles.title}>{title}</Text>
			</View>
			<View style={styles.amountblock}>
				<Text style={styles.amount}>{amount}</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	note: {
		backgroundColor: '#fafafa',
		border: 'solid',
		color: '#9e5cf6',
		borderRadius: 25,
		padding: '1rem',
		minHeight: 160,
		flexDirection: 'row',
		width: '80%',
		marginLeft: '10%',
		marginTop: '10px',
		marginBottom: 2,
		fontSize: 18,
	},
	dateblock: {
		backgroundColor: '#270038',
		margin: '10px',
		padding: '10px',
		paddingStart: '20px',
		paddingEnd: '20px',
		paddingBottom: '30px',
		borderRadius: '15px',
	},
	amountblock: {
		backgroundColor: '#00382c',
		margin: '10px',
		padding: '10px',
		paddingStart: '20px',
		paddingEnd: '20px',
		marginTop: '50px',
		marginBottom: '4px',
		borderRadius: '15px',
		position: 'absolute',
		right: 12,
	},
	date: {
		textAlign: 'center',
		marginTop: '15px',
		color: 'white',
		fontSize: '25px',
	},
	amount: {
		textAlign: 'center',
		marginTop: '5px',
		color: 'white',
		fontSize: '25px',
	},
	title: {
		textAlign: 'center',
		marginTop: '60px',
		fontSize: '28px',
		marginLeft: '25px',
		fontWeight: 'bold'
	},
});

export default Card
