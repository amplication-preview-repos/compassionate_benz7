import { SymbolModel as TSymbolModel } from "../api/symbolModel/SymbolModel";

export const SYMBOLMODEL_TITLE_FIELD = "symbolName";

export const SymbolModelTitle = (record: TSymbolModel): string => {
  return record.symbolName?.toString() || String(record.id);
};
