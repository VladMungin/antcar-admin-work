import { Datagrid, ImageField, List, TextField, WrapperField } from 'react-admin'
const AutosList = () => {
	return (
		<List>
			<Datagrid rowClick='edit'>
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
			</Datagrid>
		</List>
	)
}

export default AutosList
