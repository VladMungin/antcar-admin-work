import { Edit, ImageField, SimpleForm, TextInput, WrapperField } from 'react-admin'

const AutosEdit = () => {
	return (
		<Edit>
			<SimpleForm >
			<TextInput source='name'/>
				<ImageField source='images[0].pathS3'/>
				<TextInput source='year'/>
				<TextInput source='mileage'/>
				<WrapperField>
					<TextInput source='price.value'/>{" "}
					<TextInput source='price.currency.name'/>
				</WrapperField>
				<TextInput source='fuelType'/>
				<TextInput source='enginePower'/>
				<TextInput source='driveType'/>
			</SimpleForm>
		</Edit>
	)
}

export default AutosEdit
