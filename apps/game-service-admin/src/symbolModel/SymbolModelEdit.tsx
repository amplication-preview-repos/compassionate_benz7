import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SymbolModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="symbolName" source="symbolName" />
      </SimpleForm>
    </Edit>
  );
};
