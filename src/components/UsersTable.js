import { Table, Column } from "react-virtualized";
import { users } from "../data";

const UserTable = () => {
  return (
    <>
      <Table width={500} height={300} headerHeight={20} rowHeight={40} rowCount={users.length} rowGetter={({ index }) => users[index]}>
        <Column label="Username" dataKey="username" width={100} />

        <Column width={200} label="Email" dataKey="email" />
      </Table>
    </>
  );
};

export default UserTable;
