import { List, AutoSizer } from "react-virtualized";
import { users, cache } from "../data";
import renderRow from "./renderRow";

const UsersList = () => {
  return (
    <div className="list">
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            deferredMeasurementCache={cache}
            rowHeight={cache.rowHeight}
            rowRenderer={renderRow}
            rowCount={users.length}
            overscanRowCount={3}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default UsersList;
