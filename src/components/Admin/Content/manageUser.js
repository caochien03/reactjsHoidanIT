import ModalCreateUser from "./ModalCreateUser";
import "./manageUser.scss";

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">Manager User</div>
      <div className="User-content">
        <div>
          <button>Add new user</button>
        </div>
        <div>table users</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};

export default ManageUser;
