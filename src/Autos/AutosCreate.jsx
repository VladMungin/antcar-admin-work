import { Create, ImageInput, SimpleForm, TextInput, WrapperField } from 'react-admin'
const AutosCreate = () => {
	return (
		<Create>
			<SimpleForm>
				<TextInput source='id'/>
				<ImageInput source='images[0].pathS3'/>
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
		</Create>
	)
}

export default AutosCreate
