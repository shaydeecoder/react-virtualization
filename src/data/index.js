import { CellMeasurerCache } from "react-virtualized";
import generateRecord from "../customHooks/generateRecord";

// generate users list
export const users = generateRecord(1000);

// create instance of CellMeasurerCache
export const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 100,
});
