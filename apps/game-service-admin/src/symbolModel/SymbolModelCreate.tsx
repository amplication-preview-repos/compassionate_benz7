import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SymbolModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="symbolName" source="symbolName" />
      </SimpleForm>
    </Create>
  );
};
