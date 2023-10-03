import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
} from "@mui/material";
import "./UserView.css";
import ReactToPrint from "react-to-print";
import { ToastContainer, toast } from "react-toastify";

function UserView() {
  const params = useParams();
  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let componentRef = useRef(null);

  useEffect(() => {
    //On Load
    getUsers();
    console.log("welcome to userview");
  }, []);

  let getUsers = async (AId) => {
    try {
      const user = await axios.get(
        `https://localhost:44312/api/AdmissionFormGetByAId?AId=${params.id}`
      );
      // console.log(user);
      setUserList(user.data);

      setLoading(false);
    } catch (error) {
      console.log(error);
      // setLoading(false);
      toast.warn(`${error.message}`);
    }
  };
  // console.log("Data:", userList);

  return (
    <>
          <ToastContainer />
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary d-inline">
            Student Details
          </h6>
          <ReactToPrint
            trigger={() => {
              return (
                <div className="d-inline float-end">
                  <button className="btn btn-primary pr-4 pl-4">Print</button>
                </div>
              );
            }}
            content={() => componentRef}
            documentTitle="Admission Form "
            pageStyle="print"
          />
        </div>
        <div className="card-body">
          {isLoading ? (
            <img src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif" />
          ) : (
            <div className="table-responsive">
              <form
                className="form-container mt-5"
                name="formname"
                id="myfrm"
                ref={(el) => (componentRef = el)}
              >
                <div className="admission-section">
                  <section>
                    <div className="container">
                      <div className="form-heading mt-3 mb-3">
                        <h6 className="m-3">
                          Admission form for first/direct second year 2023-2024
                          - B.tech (engineering)
                        </h6>
                      </div>

                      <div className="container">
                        <div className="row">
                          <div className="form-right-container col-md-8">
                            <div className="branch input-wrapper">
                              <label className="">Branch : </label>
                              <label>{userList.data.Branch}</label>
                            </div>
                            <div className="input-wrapper">
                              <label className="form-label">
                                Student's Full Name :{" "}
                              </label>
                              <label>{userList.data.FullName}</label>
                            </div>

                            <div className="input-wrapper">
                              <label className="form-label">
                                Date of Birth :{" "}
                              </label>
                              <label>{userList.data.DOB}</label>
                            </div>

                            <div className="input-wrapper">
                              <label>Gender : </label>
                              <label>
                                {userList.data.Gender ? "MALE" : "FEMALE"}
                              </label>
                            </div>

                            <div className="input-wrapper">
                              <label className="form-label">
                                Adhar Card No :{" "}
                              </label>
                              <label>{userList.data.AdharcardNo}</label>
                            </div>

                            <div className="input-wrapper float-left">
                              <label className="form-label">
                                Contact No.(Student) :{" "}
                              </label>
                              <label>{userList.data.ContactStudent}</label>
                            </div>

                            <div className="input-wrapper float-left">
                              <label className="form-label">
                                Contact No.(Parent) :{" "}
                              </label>
                              <label>{userList.data.ContactParents}</label>
                            </div>

                            <div className="input-wrapper float-left">
                              <label className="form-label">Email Id : </label>
                              <label>{userList.data.Email}</label>
                            </div>

                            <div className="input-wrapper float-left">
                              <label className="form-label">
                                Nationality :{" "}
                              </label>
                              <label>{userList.data.Nationality}</label>
                            </div>

                            <div className="input-wrapper float-left">
                              <label className="form-label">
                                Blood Group :{" "}
                              </label>
                              <label>{userList.data.Bloodgrp}</label>
                            </div>

                            <div className="input-wrapper float-left">
                              <label className="form-label">
                                Father's Name :{" "}
                              </label>
                              <label>{userList.data.FatherName}</label>
                            </div>

                            <div className="input-wrapper float-left">
                              <label className="form-label">
                                Father's Occupation :{" "}
                              </label>
                              <label>{userList.data.Occupation}</label>
                            </div>

                            <div className="input-wrapper float-left">
                              <label className="form-label">
                                Mother's Name :{" "}
                              </label>
                              <label>{userList.data.MotherName}</label>
                            </div>

                            <div className="category input-wrapper">
                              <label className="">Category : </label>
                              <label>
                                {userList.data.Category.toUpperCase()}
                              </label>
                            </div>
                            <div className="minority mt-1">
                              <label className="mr-5">
                                Do you belong to Minority Type Candidature? :{" "}
                              </label>
                              <label>
                                {/* {userList.data.MinorityTypeCandidature} */}
                                {userList.data.MinorityTypeCandidature
                                  ? "YES"
                                  : "NO"}
                              </label>
                            </div>

                            <div className="minority mt-1">
                              <label className="mr-5">
                                Do You belong to Person with Disability Type
                                Candidature? :{" "}
                              </label>
                              <label>
                                {/* {userList.data.DisabilityTypeCandidature} */}
                                {userList.data.DisabilityTypeCandidature
                                  ? "YES"
                                  : "NO"}
                              </label>
                            </div>

                            <div className="minority mt-1">
                              <label className="mr-5">
                                Do You belong to Defence Type Candidature? :{" "}
                              </label>
                              <label>
                                {/* {userList.data.DefenceTypeCandidature} */}
                                {userList.data.DefenceTypeCandidature
                                  ? "YES"
                                  : "NO"}
                              </label>
                            </div>

                            <div className="input-wrapper">
                              <label className="form-label">
                                Correspondence Address :{" "}
                              </label>
                              <label>
                                {userList.data.CorrespondenceAddress}
                              </label>
                            </div>

                            <div className="input-wrapper">
                              <label className="form-label">
                                City/Village :{" "}
                              </label>
                              <label>{userList.data.CCityVillage}</label>
                            </div>

                            <div className="input-wrapper">
                              <label>Area : </label>
                              <label>
                                {userList.data.CArea ? "URBAN" : "RURAL"}
                              </label>
                            </div>

                            <div className="input-wrapper">
                              <label className="form-label">Pincode : </label>
                              <label>{userList.data.CPincode}</label>
                            </div>

                            <div className="input-wrapper">
                              <label className="form-label">Taluka : </label>
                              <label>{userList.data.CTaluka}</label>
                            </div>

                            <div className="input-wrapper">
                              <label className="form-label">District : </label>
                              <label>{userList.data.CDistrict}</label>
                            </div>

                            <div className="input-wrapper">
                              <label className="form-label">State : </label>
                              <label>{userList.data.CState}</label>
                            </div>

                            <div className="input-wrapper">
                              <label className="form-label">
                                Permanent Address :{" "}
                              </label>
                              <label>{userList.data.PermanentAddress}</label>
                            </div>

                            <div className="input-wrapper">
                              <label className="form-label">
                                City/Village :{" "}
                              </label>
                              <label>{userList.data.PCityVillage}</label>
                            </div>

                            <div className="input-wrapper">
                              <label>Area : </label>
                              <label>
                                {userList.data.PArea ? "URBAN" : "RURAL"}
                              </label>
                            </div>

                            <div className="input-wrapper">
                              <label className="form-label">Pincode : </label>
                              <label>{userList.data.PPincode}</label>
                            </div>

                            <div className="input-wrapper">
                              <label className="form-label">Taluka : </label>
                              <label>{userList.data.PTaluka}</label>
                            </div>

                            <div className="input-wrapper">
                              <label className="form-label">District : </label>
                              <label>{userList.data.PDistrict}</label>
                            </div>

                            <div className="input-wrapper">
                              <label className="form-label">State : </label>
                              <label>{userList.data.PState}</label>
                            </div>
                          </div>
                          <div className="form-left-container col-md-4">
                            <div id="registerImage" className="m-5">
                              <img
                                src={userList.data.StudentPhoto}
                                alt="Profile Picture"
                              />
                            </div>
                            <label>Student Signature: </label>
                            <label>{userList.data.PhotoSign}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Academic year Form Start*/}

                  <section>
                    <div className="container ">
                      <div className="table-responsive overflow-hidden">
                        <h4 className="text-center p-2">
                          Marks Obtained in Board Examination
                        </h4>
                        <Table className="">
                          <TableBody>
                            <TableRow>
                              <TableCell>Exam</TableCell>
                              <TableCell>Year of Passing</TableCell>
                              <TableCell>Marks Obtained</TableCell>
                              <TableCell>Marks Out Of</TableCell>
                              <TableCell>% of Marks</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>S.S.C</TableCell>
                              <TableCell>
                                {userList.data.YrOfPassingSSC}
                              </TableCell>
                              <TableCell>
                                {userList.data.ObtainedMarksSSC}
                              </TableCell>
                              <TableCell>
                                {userList.data.MarksOutOfSSC}
                              </TableCell>
                              <TableCell>
                                {userList.data.PercentageOfMarksSSC}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>H.S.C</TableCell>
                              <TableCell>
                                {userList.data.YrOfPassingHSC}
                              </TableCell>
                              <TableCell>
                                {userList.data.ObtainedMarksHSC}
                              </TableCell>
                              <TableCell>
                                {userList.data.MarksOutOfHSC}
                              </TableCell>
                              <TableCell>
                                {userList.data.PercentageOfMarksHSC}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Diploma / B.Sc / D.Voc.</TableCell>
                              <TableCell>
                                {userList.data.YrOfPassingOther}
                              </TableCell>
                              <TableCell>
                                {userList.data.ObtainedMarksOther}
                              </TableCell>
                              <TableCell>
                                {userList.data.MarksOutOfOther}
                              </TableCell>
                              <TableCell>
                                {userList.data.PercentageOfMarksOther}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                      <hr />

                      <div className="table-responsive overflow-hidden">
                        <h4 className="text-center p-2">
                          Marks Obtained in MHT-CET and/or JEE Mains Examination
                        </h4>
                        <div className="row">
                          <div className="col-lg-6">
                            <h4 className="text-center p-2">MHT-CET</h4>
                            <Table>
                              <TableBody>
                                <TableRow>
                                  <TableCell>Application/Roll No.</TableCell>
                                  <TableCell>
                                    {userList.data.ApplicationNoMHTCET}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Year of Passing</TableCell>
                                  <TableCell>
                                    {userList.data.YearOfPassingMHTCET}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Mathematics % Score</TableCell>
                                  <TableCell>
                                    {userList.data.MathematicsScoreMHTCET}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Physics % Score</TableCell>
                                  <TableCell>
                                    {userList.data.PhysicsScoreMHTCET}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Chemistry % Score</TableCell>
                                  <TableCell>
                                    {userList.data.ChemistryScoreMHTCET}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Total % Score</TableCell>
                                  <TableCell>
                                    {userList.data.TotalScoreMHTCET}
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                          <div className="col-lg-6">
                            <h4 className="text-center p-2">
                              JEE Mains Examination
                            </h4>
                            <Table>
                              <TableBody>
                                <TableRow>
                                  <TableCell>Application/Roll No.</TableCell>
                                  <TableCell>
                                    {userList.data.ApplicationNoJEEMAins}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Year of Passing</TableCell>
                                  <TableCell>
                                    {userList.data.YearOfPassingJEEMAins}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Mathematics % Score</TableCell>
                                  <TableCell>
                                    {userList.data.MathematicsScoreJEEMAins}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Physics % Score</TableCell>
                                  <TableCell>
                                    {userList.data.PhysicsScoreJEEMAins}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Chemistry % Score</TableCell>
                                  <TableCell>
                                    {userList.data.ChemistryScoreJEEMAins}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Total % Score</TableCell>
                                  <TableCell>
                                    {userList.data.TotalScoreJEEMAins}
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                        </div>
                      </div>

                      <hr />

                      <div className="table-responsive overflow-hidden">
                        <h4 className="text-center p-2">
                          List of Document attached (Original Set and attested
                          Copies in 05 Sets)
                        </h4>
                        <div className="row">
                          <div className="col-lg-6 ">
                            <Table>
                              <TableBody>
                                <TableRow>
                                  <TableCell>Sr No.</TableCell>
                                  <TableCell>Document Details </TableCell>
                                  <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>1</TableCell>
                                  <TableCell>
                                    Admission Letter / Seat Acceptance Letter
                                  </TableCell>
                                  <TableCell>
                                    {/* <input
                                // type="checkbox"
                                // className="form-check-input"
                                value={userList.data.AdmissionLetter}
                              ></input> */}
                                    <label>
                                      {userList.data.AdmissionLetter
                                        ? "YES"
                                        : "NO"}
                                    </label>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>2</TableCell>
                                  <TableCell>
                                    S.S.C (Std. X) Mark Sheet
                                  </TableCell>
                                  <TableCell>
                                    {userList.data.SSCMarksheet ? "YES" : "NO"}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>3</TableCell>
                                  <TableCell>
                                    H.S.C (Std. XII) Mark Sheet
                                  </TableCell>
                                  <TableCell>
                                    {userList.data.HSCMarksheet ? "YES" : "NO"}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>4</TableCell>
                                  <TableCell>MHT-CET Score Card</TableCell>
                                  <TableCell>
                                    {userList.data.MHTCETScoreCard
                                      ? "YES"
                                      : "NO"}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>5</TableCell>
                                  <TableCell>
                                    JEE Mains Score Card (if applicable)
                                  </TableCell>
                                  <TableCell>
                                    {userList.data.JEEMains ? "YES" : "NO"}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>6</TableCell>
                                  <TableCell>
                                    Diploma / B.Sc. / D.Voc Mark Sheet (if
                                    applicable)
                                  </TableCell>
                                  <TableCell>
                                    {userList.data.DipBSC ? "YES" : "NO"}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>7</TableCell>
                                  <TableCell>
                                    Leaving Certificate / Transfer Certificate
                                  </TableCell>
                                  <TableCell>
                                    {userList.data.LeavingTransferCert
                                      ? "YES"
                                      : "NO"}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>8</TableCell>
                                  <TableCell>
                                    Indian Nationality / Domicile / Birth
                                    Certificate
                                  </TableCell>
                                  <TableCell>
                                    {userList.data.NationalityDomicileBirt
                                      ? "YES"
                                      : "NO"}
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                          <div className="col-lg-6">
                            <Table>
                              <TableBody>
                                <TableRow>
                                  <TableCell>Sr No.</TableCell>
                                  <TableCell>Document Details </TableCell>
                                  <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>9</TableCell>
                                  <TableCell>
                                    Gap Certificate (if applicable)
                                  </TableCell>
                                  <TableCell>
                                    {userList.data.GAPCert ? "YES" : "NO"}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>10</TableCell>
                                  <TableCell>Cast Certificate</TableCell>
                                  <TableCell>
                                    {userList.data.CasteCertificate
                                      ? "YES"
                                      : "NO"}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>11</TableCell>
                                  <TableCell>
                                    Cast Validity Certificate
                                  </TableCell>
                                  <TableCell>
                                    {userList.data.CasteValidityCertificate
                                      ? "YES"
                                      : "NO"}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>12</TableCell>
                                  <TableCell>
                                    Non-Creamy Layer Certificate
                                  </TableCell>
                                  <TableCell>
                                    {userList.data.Noncreamylayer
                                      ? "YES"
                                      : "NO"}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>13</TableCell>
                                  <TableCell>
                                    Income Certificate (if applicable
                                    scholarship student)
                                  </TableCell>
                                  <TableCell>
                                    {userList.data.IncomeCerificate
                                      ? "YES"
                                      : "NO"}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>14</TableCell>
                                  <TableCell>
                                    Certificate of Defence Service
                                  </TableCell>
                                  <TableCell>
                                    {userList.data.CertiDefense ? "YES" : "NO"}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>15</TableCell>
                                  <TableCell>
                                    Certificate of Physical Disability
                                  </TableCell>
                                  <TableCell>
                                    {userList.data.DisabilityCert
                                      ? "YES"
                                      : "NO"}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>16</TableCell>
                                  <TableCell>Adhar Card Xerox</TableCell>
                                  <TableCell>
                                    {userList.data.AdharCard ? "YES" : "NO"}
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                        </div>
                      </div>

                      <hr />

                      <div className="d-flex justify-content-center m-4">
                        <label>Remark:</label>
                        {userList.data.Remark}
                      </div>
                    </div>
                  </section>

                  {/* Undertaking form start here */}
                  {/* <section>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <h2 className="heading mt-3">Undertaking</h2>
                          <p>To,</p>
                          <p>The Principle,</p>
                          <p>Sanjay Ghodawat Institute,Atigre</p>
                          <p>Respected Sir,</p>
                          <p className="mt-3">
                            I____________________________________________________
                            The underSigned, admitted to FE/DSE (Branch:
                            _________________________________) for the year
                            2023-2024 hereby undertake that-
                          </p>

                          <ul className="undertaking-terms">
                            <li>
                              The above information is correct to the best of my
                              knowledge and belief.
                            </li>
                            <li>
                              I will confirm my DTE Online Admission within time
                              given by DTE and in case failed to do so I am
                              responsible for consequences.
                            </li>
                            <li>
                              I will be fully responsible for producing all the
                              required Original documents for my eligibility,for
                              the course to which I am admitted, and failure to
                              do so by prescribed end date will lead to
                              automatic cancellation of my admission without any
                              liability of any nature to the collage.
                            </li>
                            <li>
                              I will pay full fees of the institute at the time
                              of admission and the charges which Government of
                              Maharashtra/ DBATU,Lonere may levy from time, by
                              due dates and in the event of failure on my part,
                              the Principal of the collage may take such action
                              against me.
                            </li>
                            <li>
                              In case of any increase in fee by Shikshan
                              Samitee, I am bound to pay the same to institute.I
                              am aware that if I do not pay all the fees in
                              time, I will not permitted to appear for the
                              University Examination.
                            </li>
                            <li>
                              I hereby agree to confirm to the rules and
                              regulations at present in force or that may
                              hereafter be made by UGC,DTE,DBATU Lonere,
                              Institute, and/or Govt.I undertake that so long as
                              I am a student of the collage, I will do nothing
                              either inside the collage or outsite the collage
                              that will interfere with its orderly governance
                              and discilpine. I will fulfil attendance criteria
                              to become eligible to appear for the exam. If at
                              any time in future it is found that I have
                              produced false information or concealed any
                              facts;my admission is deemed to cancelled.
                            </li>
                            <li>
                              I know that as per UGC Regulations on Curbing the
                              Menance of Ragging in Higher Educational
                              Institutions, 2009 is strictly prohibited in
                              collage campus and hostel, If I am found in such a
                              case, the necessary disciplinary action taken by
                              the college will be binding on me and I will
                              submit Affidavit of student and Parents as per
                              Annexure I and II.
                            </li>
                          </ul>

                          <p className="mb-3">Date : ____________________</p>
                          <p>Place : ____________________</p>

                          <div className="agree-checkbox">
                            <input
                              type="checkbox"
                              onChange={checkboxHandler}
                              name="agreeStudent"
                              className="mr-5 mb-5 form-check-input"
                            />
                            <label className="label" id="studentSign">
                              I agree the terms and conditions
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section> */}

                  {/************ bandhanpatra section start here ******************/}
                  {/* <section>
                    <div className="container">
                      <div className="text-center p-4">
                        <h3 className="heading">बंधपत्र</h3>
                      </div>
                      <div className="content">
                        मी या शाखेत प्रवेश घेतला असून मी असे लिहून देतो / देते
                        की खालील सर्व मुद्दे शासन निर्णय क्र. २०१६ / प्र.क्र.
                        २२१ / शिक्षण- १ दि. ३१ मार्च २०१६ मधील आहेत. या
                        निर्णयाची पुर्ण कल्पना मला व माझ्या पालकांना मिळाली आहे.
                        <br />
                        <br />
                        १. विद्यार्थ्याची शैक्षणिक वर्षातील उपस्थिती ही कमीतकमी
                        ७५ टक्के किंवा त्यापेक्षा जास्त असणे बंधनकारक आहे.
                        <br />
                        <br />
                        २. विद्यार्थ्याने शैक्षणिक वर्षातील दोन्ही.सेमिस्टरच्या
                        परीक्षा देणे बंधनकारक आहे.
                        <br />
                        <br />
                        ३. विद्यार्थ्याने शैक्षणिक वर्ष अर्धवट सोडल्यास शासनाची
                        कोणतीही शिष्यवृत्ती / सवलत मिळणार नाही. तसेच त्या काळात
                        त्याला कोणतीही शिष्यवृत्ती मिळाली असेल तर ती शासनास परत
                        करावी लागेल.
                        <br />
                        <br />
                        ४. मुद्दा क्र. १ व २ नुसार विद्यार्थ्याने शैक्षणिक वर्ष
                        पुर्ण केले नाही तर शासनाची कोणतीही शिष्यवृत्तीची सवलत
                        लागू होणार नाही तसेच त्या दरम्यान शिष्यवृत्ती प्राप्त
                        झाली असल्यास ती शासनास परत करावी लागेल, व सदर
                        विद्यार्थ्यास खुल्या प्रवर्गातील फी भरावी लागेल.
                        <br />
                        <br />
                        ५. डिग्री कोर्स चार वर्षाचा आहे तो पुर्ण करण्यास
                        विद्यार्थ्यास अतिरिक्त वर्ष लागल्यास त्या विद्यार्थ्यास
                        त्यावर्षीजी फी लागू आहे ती भरणे बंधनकारक असेल.
                        <br />
                        <br />
                        वरील सर्व नियमं व निर्णय मी वाचले आहेत व ते मला मान्य
                        आहेत. वरील कोणताही प्रसंग माझ्या बाबतीत घडल्यास मी वरील
                        नियमांच्या अनुशंगाने कॉलेजची संपुर्ण फी खुल्या
                        प्रवर्गातून भरण्यास तयार आहे. माझी व माझ्य पालकांची या
                        बाबत कोणतीही तक्रार असणार नाही
                      </div>
                      <div className="mt-5">
                        <p className="mb-3">Date : ___________________</p>
                        <p>Place : ___________________</p>
                      </div>
                      <div className="d-flex justify-content-center align-item-center m-5">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          onChange={(e) => setAgreeParent(!AgreeParent)}
                        ></input>
                        <label id="ParentAgree" className="label">
                          I agree the terms and conditions
                        </label>
                      </div>
                    </div>
                  </section> */}
                </div>
                <div className=" d-flex justify-content-center m-4">
                  {/* <button
                    type="button"
                    className="btn btn-success submit-button"
                    onClick={(e) => {
                      handlePrint();
                    }}
                  >
                    Print
                  </button> */}
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserView;
