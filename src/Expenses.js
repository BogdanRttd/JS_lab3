import { nanoid } from 'nanoid'
import ExpensesItem from './ExpenseItem'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'


export default function Expenses() {
	const notes = [
		{
			id: 'e1',
			title: 'Toilet Paper',
			amount: 94.12,
			date: '2020, 7, 14',
		},
		{ 
			id: 'e2', 
			title: 'New TV', 
			amount: 799.49, 
			date: '2021, 2, 12',
		},
		{
			id: 'e3',
			title: 'Car Insurance',
			amount: 294.67,
			date: '2021, 2, 28',
		},
		{
			id: 'e4',
			title: 'New Desk (Wooden)',
			amount: 450,
			date: '2021, 5, 12',
		},
	];

	return (
		<SafeAreaView>
			<View>
				<Text style={styles.h1}>Шаблон «Мої витрати»</Text>
				<ExpensesItem
					notes={notes}
				/>
				<br></br>
				<br></br>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	h1: {
		textAlign: 'center',
		marginTop: '3%',
		marginBottom: '2%',
		fontSize: '27px',
		fontWeight: 'bold'
	}
});