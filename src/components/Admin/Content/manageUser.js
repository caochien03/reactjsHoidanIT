import ModalCreateUser from "./ModalCreateUser";
import "./manageUser.scss";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser, getUserWithPaginate } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
  const LIMIT_USER = 5;
  const [pageCount, setPageCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataDelete, setDataDelete] = useState({});

  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    fetchListUsersWithPaginate(1);
  }, []);
  const fetchListUsers = async () => {
    let res = await getAllUser();
    if (res.EC === 0) {
      setListUser(res.DT);
    }
  };

  const fetchListUsersWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page, LIMIT_USER);
    if (res.EC === 0) {
      setListUser(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };
  const handleClickBtnUpdate = (user) => {
    setShowModalUpdate(true);
    setDataUpdate(user);
  };

  const resetDataUpdate = () => {
    setDataUpdate({});
  };

  const [showModalDelete, setShowModalDelete] = useState(false);
  const handleClickBtnDelete = (user) => {
    setShowModalDelete(true);
    setDataDelete(user);
  };

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
          {/* <TableUser
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnDelete={handleClickBtnDelete}
          /> */}
          <TableUserPaginate
            pageCount={pageCount}
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnDelete={handleClickBtnDelete}
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          />
        </div>
        <ModalCreateUser
          show={showModal}
          setShow={setShowModal}
          fetchListUsers={fetchListUsers}
        />
        <ModalUpdateUser
          show={showModalUpdate}
          setShow={setShowModalUpdate}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetDataUpdate={resetDataUpdate}
        />
        <ModalDeleteUser
          show={showModalDelete}
          setShow={setShowModalDelete}
          dataDelete={dataDelete}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};

export default ManageUser;
