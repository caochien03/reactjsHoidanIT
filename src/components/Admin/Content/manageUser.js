import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./manageUser.scss";
import TableUser from "./TableUser";

const ManageUser = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="manage-user-container">
      <div className="title">Manager User</div>
      <div className="User-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Add new user
          </button>
        </div>
        <div className="table-users-container">
          <TableUser />
        </div>
        <ModalCreateUser show={showModal} setShow={setShowModal} />
      </div>
    </div>
  );
};

export default ManageUser;
