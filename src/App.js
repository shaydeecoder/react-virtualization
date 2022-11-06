import { List, AutoSizer } from "react-virtualized";
import renderRow from "./components/renderRow";
import { users } from "./data";
import "./styles.css";

const App = () => {
  const listHeight = 700;
  const rowHeight = 80;
  const rowWidth = 800;

  // without react-virtualized
  /* const users = useCreateRecord(1000);
  return <div className="list">{users.map(renderRow)}</div>; */

  // with react-virtualized
  /* return (
    <div className="list">
      <List
        width={rowWidth}
        height={listHeight}
        rowHeight={rowHeight}
        rowRenderer={renderRow}
        rowCount={users.length}
        overscanRowCount={3}
      />
    </div>
  ); */

  // with react-virtualized AutoSizer
  return (
    <div className="list">
      <AutoSizer>
        {({ width, height }) => (
          <List width={width} height={height} rowHeight={rowHeight} rowRenderer={renderRow} rowCount={users.length} overscanRowCount={3} />
        )}
      </AutoSizer>
    </div>
  );
};

export default App;
