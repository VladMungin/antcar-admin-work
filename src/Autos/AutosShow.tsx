import { ImageField, Show, SimpleShowLayout, TextField, WrapperField } from 'react-admin'
const AutosShow = () => {
	return (
		<Show>
			<SimpleShowLayout>

				<TextField source='name'/>
				<ImageField source='images[0].pathS3'/>
				<TextField source='year'/>
				<TextField source='mileage'/>
				<WrapperField>
				<TextField source='price.value'/>{" "}
				<TextField source='price.currency.name'/>
				</WrapperField>
				
				<TextField source='fuelType'/>
				<TextField source='enginePower'/>
				<TextField source='driveType'/>
			</SimpleShowLayout>
		</Show>
	)
}

export default AutosShow
