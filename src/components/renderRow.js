import { users } from "../data";

// without react virtualized
/* const renderRow = (item) => {
  return (
    <div key={item.userId} className="row">
      <div className="image">
        <img src={item.avatar} alt={item.username} />
      </div>
      <div className="content">
        <div>
          <strong>Username:</strong> {item.username}
        </div>
        <div>
          <strong>Email:</strong> {item.email}
        </div>
        <div>
          <strong>Bio:</strong> {item.bio}
        </div>
      </div>
    </div>
  );
}; */

// with react virtualized
const renderRow = ({ index, key, style }) => {
  return (
    <div key={key} style={style} className="row">
      <div className="image">
        <img src={users[index].avatar} alt="" />
      </div>
      <div className="content">
        <div>
          <strong>Username:</strong> {users[index].username}
        </div>
        <div>
          <strong>Email:</strong> {users[index].email}
        </div>
        <div>
          <strong>Bio:</strong> {users[index].bio}
        </div>
      </div>
    </div>
  );
};

export default renderRow;
