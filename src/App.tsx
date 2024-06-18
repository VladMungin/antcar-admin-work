import {
  Admin,
  Resource
} from "react-admin"
import AutosCreate from './Autos/AutosCreate'
import AutosEdit from './Autos/AutosEdit'
import AutosList from './Autos/AutosList'
import AutosShow from './Autos/AutosShow'
import { authProvider } from "./authProvider"
import dataProvider from "./dataProvider"


export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="autos"
      list={AutosList}
      edit={AutosEdit}
      create={AutosCreate}
      show={AutosShow}
    />
  </Admin>
);
