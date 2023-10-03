import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CSVLink, CSVDownload } from "react-csv";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Userlist() {
  const [userList, setUserList] = useState([]);
  const [downloadList, setDownloadList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    //On Load
    getUsers();
    console.log("welcome");
  }, []);

  let getUsers = async () => {
    try {
      const users = await axios.get(
        "https://localhost:44312/api/AdmissionFormGetAllRecords"
      );
      let usersdata = users.data.data;
      // console.log("usersdata",usersdata);
      setUserList(usersdata);
      let data = [];
      usersdata.map((items) => {
        let obj = {
          FullName: items.FullName,
          Email: items.Email,
          Branch: items.Branch,
          Contact: items.ContactStudent,
        };
        data.push(obj);
      });
      // console.log("Data",data);
      setDownloadList(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.warn(`${error.message}`);
    }
  };

  // console.log("userlist:", userList);

  let handleDelete = async (AId) => {
    try {
      // if (window.confirm("Are you sure do you want to delete the data?")) {
        await axios.delete(
          `https://localhost:44312/api/AdmissionFormDeleteAdmissionRecord?AId=` +
            AId
        );
        toast.success("Record Deleted Successfully!!!");
        getUsers();
      // }
    } catch (error) {
      console.log(error);
      toast.warn(`${error.message}`);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="mb-4">
        <div className="input-group-append d-inline mr-2">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input
          style={{ width: "370px", display: "inline" }}
          type="text"
          id="search"
          name="Search"
          placeholder="Search"
          className="form-control"
          onChange={(e) => setSearch(e.target.value.toUpperCase())}
        />
      </div>

      {/* <!-- DataTables --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6
            className="m-0 font-weight-bold text-primary"
            style={{ display: "inline" }}
          >
            Student List
          </h6>
          <div
            className="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"
            style={{ float: "right" }}
          >
            <FontAwesomeIcon
              icon={faDownload}
              style={{ marginRight: "0.25rem", color: "white" }}
            />
            <CSVLink
              data={downloadList}
              style={{ color: "white", textDecoration: "none"}}
              filename="StudentList.csv"
            >
              Export
            </CSVLink>
          </div>
        </div>
        <div className="card-body">
          {isLoading ? (
            <img src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif" />
          ) : (
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Student E-Mail</th>
                    <th>Branch</th>
                    <th>Student Contact</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(userList)
                    ? userList
                        .filter((data) => {
                          return search.toUpperCase() === ""
                            ? data
                            : data.FullName.toUpperCase().includes(search)
                            ? data
                            : data.Branch.toUpperCase().includes(search)
                            ? data
                            : data.Email.toUpperCase().includes(search);
                        })
                        .map((data, index) => {
                          return (
                            <tr key={index}>
                              {/* <td>{data.AId}</td> */}
                              <td>{data.FullName}</td>
                              <td>{data.Email}</td>
                              <td>{data.Branch}</td>
                              <td>{data.ContactStudent}</td>
                              <th>
                                <Link
                                  to={`/portal/user-view/${data.AId}`}
                                  className="btn btn-primary btn-sm m-1"
                                >
                                  View
                                </Link>
                                <Link
                                  to={`/portal/user-edit/${data.AId}`}
                                  className="btn btn-info btn-sm m-1"
                                >
                                  Edit
                                </Link>
                                <button
                                  onClick={() => handleDelete(data.AId)}
                                  className="btn btn-danger btn-sm m-1"
                                >
                                  Delete
                                </button>
                              </th>
                            </tr>
                          );
                        })
                    : null}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Userlist;
