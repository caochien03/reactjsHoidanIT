import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

const TableUserPaginate = (props) => {
    const { listUser, pageCount } = props;
    const handlePageClick = (event) => {
        props.fetchListUsersWithPaginate(+event.selected + 1);
        props.setCurrentPage(+event.selected + 1);
        console.log(`User requested page number ${event.selected}`);
    };

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser &&
                        listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <tr key={`table-users-${index}`}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-primary">
                                            View
                                        </button>
                                        <button
                                            className="btn btn-warning mx-3"
                                            onClick={() =>
                                                props.handleClickBtnUpdate(item)
                                            }
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                props.handleClickBtnDelete(item)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
                forcePage={props.currentPage - 1}
            />
        </>
    );
};

export default TableUserPaginate;
