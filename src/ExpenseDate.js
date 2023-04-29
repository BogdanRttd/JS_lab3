import { nanoid } from 'nanoid'
import NotesList from './ExpenseItem'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'


export default function ExpenseDate() {
	const notes = [
		{
			id: nanoid(),
			title: 'Зразок',
			amount: '10$',
			date: '25/10/2023',
		}
	];

	return (
		<SafeAreaView>
			<View>
				<NotesList
					notes={notes}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	middle: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	btns: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '90%',
		marginLeft: '4%',
		marginTop: 20,
	},
	text: {
		fontSize: 20,
		marginTop: -1,
		marginLeft: 1,
	},
	txt: {
		fontSize: 16,
		marginTop: 12,
		marginBottom: 4,
		color: '#888'
	},
	txtdef: {
		fontSize: 16,
		color: '#888'
	},
	middletxt: {
		alignItems: 'center',
	},
});