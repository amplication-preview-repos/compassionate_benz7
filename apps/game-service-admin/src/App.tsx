import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GameRoomList } from "./gameRoom/GameRoomList";
import { GameRoomCreate } from "./gameRoom/GameRoomCreate";
import { GameRoomEdit } from "./gameRoom/GameRoomEdit";
import { GameRoomShow } from "./gameRoom/GameRoomShow";
import { SymbolModelList } from "./symbolModel/SymbolModelList";
import { SymbolModelCreate } from "./symbolModel/SymbolModelCreate";
import { SymbolModelEdit } from "./symbolModel/SymbolModelEdit";
import { SymbolModelShow } from "./symbolModel/SymbolModelShow";
import { BetList } from "./bet/BetList";
import { BetCreate } from "./bet/BetCreate";
import { BetEdit } from "./bet/BetEdit";
import { BetShow } from "./bet/BetShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GameService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="GameRoom"
          list={GameRoomList}
          edit={GameRoomEdit}
          create={GameRoomCreate}
          show={GameRoomShow}
        />
        <Resource
          name="SymbolModel"
          list={SymbolModelList}
          edit={SymbolModelEdit}
          create={SymbolModelCreate}
          show={SymbolModelShow}
        />
        <Resource
          name="Bet"
          list={BetList}
          edit={BetEdit}
          create={BetCreate}
          show={BetShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
