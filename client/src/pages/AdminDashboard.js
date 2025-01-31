import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import ReactPaginate from 'react-paginate';
import UserLogin from './UserLogin';
import Logout from "./Logout";
import styled from "styled-components";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const [userData, setUserData] = useState([]);
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(10);
  const [filterText, setFilterText] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const token = user?.token;
  useEffect(() => {
    const fetchUserdata = async () => {
      try {
        const response = await axios.get(`https://one-realty.in/api/user-data`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }});
        setUserData(response.data);
    
      } catch (error) {
        console.error("Error fetching quotations:", error);
      }
    };

    fetchUserdata();
  }, []);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const handleDateFilterChange = (event) => {
    setDateFilter(event.target.value);
  };

  const filteredUserData = userData?.filter(userdata => {
    const fullName = userdata.name.toLowerCase().trim();
    const lowerSearchQuery = filterText.toLowerCase().trim();
    const formattedDate = moment(userdata.created_date).format("YYYY-MM-DD");

    return (
      (fullName.includes(lowerSearchQuery) ||
        userdata.email.toLowerCase().trim().includes(lowerSearchQuery)) &&
      (!dateFilter || formattedDate === dateFilter)
    );
  });

  const offset = currentPage * itemsPerPage;
  const currentUserData = filteredUserData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredUserData.length / itemsPerPage);

  return (
    <Wrapper>
      <div className="container-fluid d-flex justify-content-between mt-3">
        <div className="div"><UserLogin/></div>
        <div className="div"><Logout/></div>
      </div>
      <div className="container">
        <h2>List of User Data One Realty</h2>
      
            <div className="row mb-3">
                <div className="col-lg-3">  <input
            type="text"
            placeholder="Filter by User Name or Email"
            value={filterText}
            onChange={handleFilterChange}
            className="form-control "
          /></div>
                <div className="col-lg-2">  <input
            type="date"
            value={dateFilter}
            onChange={handleDateFilterChange}
            className="form-control dateset"
          /></div>
            </div>
        
        
       
        <div className="" style={{ overflowY: "auto" }}>
          {currentUserData.length > 0 ? (
            <>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Email Id</th>
                    <th>Mobile Number</th>
                    <th>Subject</th>
                    <th>Address</th>
                    <th>Message</th>
                    <th>Created Date</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUserData.map((userdata, index) => (
                    <tr key={userdata.id}>
                      <td>{offset + index + 1}</td>
                      <td>{userdata.name}</td>
                      <td>{userdata.email}</td>
                      <td>{userdata.mobile_no}</td>
                      <td>{userdata.subject}</td>
                      <td>{userdata.address}</td>
                      <td>{userdata.message}</td>
                      <td>{moment(userdata.created_date).format('DD/MM/YYYY')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
              />
            </>
          ) : (
            <div className="text-center">
              <p>No data found</p>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default AdminDashboard;

const Wrapper = styled.div`
  h2 {
    color: #01614e;
    font-family: "Playfair Display";
  }
  th {
    color: white;
    background-color: #01614e;
  }
  .text-center {
    margin-top: 20px;
    font-size: 18px;
    color: #01614e;
  }
  .dateset{
    @media screen and (max-width: 768px) {
      margin-top: 1rem;
    }
  }
`;



