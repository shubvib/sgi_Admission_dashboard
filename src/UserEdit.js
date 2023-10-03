import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./UserView.css";
import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, useFormik } from "formik";

function UserEdit() {
  const params = useParams();
  const [isLoading, setLoading] = useState(true);
  const [studentData, setstudentData] = useState({
    AId: "",
    FullName: "",
    Branch: "",
    DOB: "",
    StudentPhoto: "",
    PhotoSign: "",
    Gender: "",
    AdharcardNo: "",
    ContactStudent: "",
    ContactParents: "",
    Nationality: "",
    Bloodgrp: "",
    Email: "",
    FatherName: "",
    Occupation: "",
    MotherName: "",
    Category: "",
    MinorityTypeCandidature: "",
    DisabilityTypeCandidature: "",
    DefenceTypeCandidature: "",
    CorrespondenceAddress: "",
    CCityVillage: "",
    CArea: "",
    CPincode: "",
    CTaluka: "",
    CDistrict: "",
    CState: "",
    PermanentAddress: "",
    PCityVillage: "",
    PArea: "",
    PPincode: "",
    PTaluka: "",
    PDistrict: "",
    PState: "",
    YrOfPassingSSC: "",
    ObtainedMarksSSC: "",
    MarksOutOfSSC: "",
    PercentageOfMarksSSC: "",
    YrOfPassingHSC: "",
    ObtainedMarksHSC: "",
    MarksOutOfHSC: "",
    PercentageOfMarksHSC: "",
    YrOfPassingOther: "",
    ObtainedMarksOther: "",
    MarksOutOfOther: "",
    PercentageOfMarksOther: "",
    ApplicationNoMHTCET: "",
    YearOfPassingMHTCET: "",
    MathematicsScoreMHTCET: "",
    PhysicsScoreMHTCET: "",
    ChemistryScoreMHTCET: "",
    TotalScoreMHTCET: "",
    ApplicationNoJEEMAins: "",
    YearOfPassingJEEMAins: "",
    MathematicsScoreJEEMAins: "",
    PhysicsScoreJEEMAins: "",
    ChemistryScoreJEEMAins: "",
    TotalScoreJEEMAins: "",
    AdmissionLetter: "",
    SSCMarksheet: "",
    HSCMarksheet: "",
    MHTCETScoreCard: "",
    JEEMains: "",
    DipBSC: "",
    LeavingTransferCert: "",
    NationalityDomicileBirt: "",
    GAPCert: "",
    CasteCertificate: "",
    CasteValidityCertificate: "",
    Noncreamylayer: "",
    IncomeCerificate: "",
    CertiDefense: "",
    DisabilityCert: "",
    AdharCard: "",
    Remark: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
    console.log("welcome to Edit Page");
  }, []);

  const validate = () => {
    // Retrieving the values of form elements
    var imgFile = document.getElementById("img").src;
    var name = document.formname.studFullName.value;
    var gender = document.formname.studGender.value;
    var dob = document.formname.studDob.value;
    var adharcard = document.formname.studAdhar.value;
    var email = document.formname.studEmail.value;
    var studmobile = document.formname.studContact.value;
    var parmobile = document.formname.parentContact.value;
    var nationality = document.formname.studNationality.value;
    var bloodgrp = document.formname.studBloodGroup.value;
    var fname = document.formname.studFatherName.value;
    var occupation = document.formname.studFatherOccupation.value;
    var mothername = document.formname.studMotherName.value;
    var caddress = document.formname.studCAddress.value;
    var cityvillage = document.formname.studCCity.value;
    var cpincode = document.formname.studCPincode.value;
    var ctal = document.formname.studCTaluka.value;
    var cdist = document.formname.studCDistrict.value;
    var cstate = document.formname.studCState.value;
    var paddress = document.formname.studPAddress.value;
    var pcityvillage = document.formname.studPCity.value;
    var ppincode = document.formname.studPPincode.value;
    var ptal = document.formname.studPTaluka.value;
    var pdist = document.formname.studPDistrict.value;
    var pstate = document.formname.studPState.value;
    var studsign = document.formname.studSign.value;
    var sscyear = document.formname.SSCYear.value;
    var sscmark = document.formname.SSCMark.value;
    var sscoutoff = document.formname.SSCOutOf.value;
    var sscpercent = document.formname.SSCPercent.value;
    // var hscyear = document.formname.HSCYear.value;
    // var hscmark = document.formname.HSCMark.value;
    // var hscoutoff = document.formname.HSCOutOf.value;
    // var hscpercent = document.formname.HSCPercent.value;
    var CetRollNo = document.formname.mhtcetappno.value;
    var CetYear = document.formname.mhtcetyrofpass.value;
    var CetMathScr = document.formname.mhtcetmathsscore.value;
    var CetPhyScr = document.formname.mhtcetphysics.value;
    var CetChemScr = document.formname.mhtcetchemistry.value;
    var CetTotal = document.formname.mhtcetttlscore.value;
    var JeeRollNo = document.formname.JEERollno.value;
    var JeeYear = document.formname.JEEyrofpass.value;
    var JeeMathScr = document.formname.JEEmathsscore.value;
    var JeePhyScr = document.formname.JEEphysics.value;
    var JeeChemScr = document.formname.JEEchemscore.value;
    var JeeTotal = document.formname.JEEttlscore.value;

    //Validate Branch  studSign
    var e = document.getElementById("branchs");
    var optionSelIndex = e.options[e.selectedIndex].value;
    var optionSelectedText = e.options[e.selectedIndex].text;
    if (optionSelIndex == 0) {
      alert("Please select a branch");
      document.getElementById("branchs").focus();
      return false;
    }

    // Validate name
    if (name == "") {
      alert("Please enter your name");
      document.getElementById("studFullName").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(name) === false) {
        alert("Please enter a valid name");
        document.getElementById("studFullName").focus();
        return false;
      }
    }

    //Photo
    // console.log("Img path",imgFile)
    if (imgFile == "") {
      alert("Please select Photo");
      document.getElementById("profile").focus();
      return false;
    };

    var filePath = document.getElementById("profile").value;
    // console.log(filePath)
    if (filePath)  {
      // Allowing file type
      var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

      if (!allowedExtensions.exec(filePath)) {
        alert("Invalid file type");
        document.getElementById("studSign").focus();
        return false;
      } else {
        const fi = document.getElementById("profile");
        // Check if any file is selected.
        if (fi.files.length > 0) {
          //for (const i = 0; i <= fi.files.length - 1; i++) {
          const fsize = fi.files.item(0).size;
          const file = Math.round(fsize / 1024);
          // The size of the file.
          if (file >= 25) {
            alert("File too Big, please select a file less than 25KB");
            document.getElementById("profile").focus();
            return false;
          }
          // }
        }
      }
    }



    //PhotoSign
    if (studsign == "") {
      alert("Please enter photo sign(First and Last Name)");
      document.getElementById("studSign").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(studsign) === false) {
        alert("Please enter a valid name");
        document.getElementById("studSign").focus();
        return false;
      }
    }

    //Gender
    var cbox = document.forms["formname"]["studGender"];
    if (cbox[0].checked == false && cbox[1].checked == false) {
      alert("Please Select Gender");
      document.getElementById("studGender").focus();
      return false;
    }

    //DOB
    if (dob == "") {
      alert("Please add Date of Birth");
      document.getElementById("studDob").focus();
      return false;
    }

    //Adhar Card
    if (adharcard == "") {
      alert("Please enter your Adhar Card No:");
      document.getElementById("studAdhar").focus();
      return false;
    } else {
      var regex = /^[1-9]\d{11}$/;
      if (regex.test(adharcard) === false) {
        alert("Please enter a valid 12 digit Adhar No.");
        document.getElementById("studAdhar").focus();
        return false;
      }
    }

    //Student Mobile
    if (studmobile == "") {
      alert("Please enter student Contact No.");
      document.getElementById("studContact").focus();
      return false;
    } else {
      var regex = /^[0-9]\d{9}$/;
      if (regex.test(studmobile) === false) {
        alert("Please enter a valid 10 digit only");
        document.getElementById("studContact").focus();
        return false;
      }
    }

    //Contact Parents
    if (parmobile == "") {
      alert("Please enter student Contact No.");
      document.getElementById("parentContact").focus();
      return false;
    } else {
      var regex = /^[0-9]\d{9}$/;
      if (regex.test(parmobile) === false) {
        alert("Please enter a valid 10 digit only");
        document.getElementById("parentContact").focus();
        return false;
      }
    }

    // Validate email address
    if (email == "") {
      alert("Please enter your email address");
      document.getElementById("email").focus();
      return false;
    } else {
      var regex = /^\S+@\S+\.\S+$/;
      if (regex.test(email) === false) {
        alert("Please enter a valid email address");
        document.getElementById("email").focus();
        return false;
      }
    }

    //Nationality
    if (nationality == "") {
      alert("Please enter your Nationality");
      document.getElementById("studNationality").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(nationality) === false) {
        alert("Please enter a valid Nationality");
        document.getElementById("studNationality").focus();
        return false;
      }
    }

    //Validate Blood Group
    if (bloodgrp == "") {
      alert("Please enter your Blood Group");
      document.getElementById("studBloodGroup").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s+-]+$/;
      if (regex.test(bloodgrp) === false) {
        alert("Please enter a valid Blood Group");
        document.getElementById("studBloodGroup").focus();
        return false;
      }
    }

    // Validate Father name
    if (fname == "") {
      alert("Please enter your Father Name");
      document.getElementById("studFatherName").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(fname) === false) {
        alert("Please enter a valid Father Name");
        document.getElementById("studFatherName").focus();
        return false;
      }
    }

    // Validate Occupation
    if (occupation == "") {
      alert("Please enter your Father Name");
      document.getElementById("studFatherOccupation").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(occupation) === false) {
        alert("Please enter a valid Father Name");
        document.getElementById("studFatherOccupation").focus();
        return false;
      }
    }

    // Validate Mothers Name
    if (mothername == "") {
      alert("Please enter your Mother Name");
      document.getElementById("studMotherName").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(mothername) === false) {
        alert("Please enter a valid Mother Name");
        document.getElementById("studMotherName").focus();
        return false;
      }
    }

    //Validate category
    var e = document.getElementById("category");
    var optionSelIndex = e.options[e.selectedIndex].value;
    var optionSelectedText = e.options[e.selectedIndex].text;
    if (optionSelIndex == 0) {
      alert("Please select a Category");
      document.getElementById("category").focus();
      return false;
    }

    //Minority Type Minority Candidature
    var cbox = document.forms["formname"]["MinorityTypeCandidature"];
    if (cbox[0].checked == false && cbox[1].checked == false) {
      alert("Please Select Minority Type");
      document.getElementById("MinorityTypeCandidature").focus();
      return false;
    }

    //Disability Type Candidature
    var cbox = document.forms["formname"]["DisabilityTypeCandidature"];
    if (cbox[0].checked == false && cbox[1].checked == false) {
      alert("Please Select Disability Type Candidature");
      document.getElementById("DisabilityTypeCandidature").focus();
      return false;
    }

    //Defence Type Candidature
    var cbox = document.forms["formname"]["DefenceTypeCandidature"];
    if (cbox[0].checked == false && cbox[1].checked == false) {
      alert("Please Select Defence Type Candidature");
      document.getElementById("DefenceTypeCandidature").focus();
      return false;
    }

    // Validate CAddress
    if (caddress == "") {
      alert("Please enter your Correspondance Address");
      document.getElementById("studCAddress").focus();
      return false;
    }

    // Validate City/Village
    if (cityvillage == "") {
      alert("Please enter your City/Village");
      document.getElementById("studCCity").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(cityvillage) === false) {
        alert("Please enter a valid City/Village");
        document.getElementById("studCCity").focus();
        return false;
      }
    }

    //Defence Type Candidature
    var cbox = document.forms["formname"]["CArea"];
    if (cbox[0].checked == false && cbox[1].checked == false) {
      alert("Please Select Area");
      document.getElementById("CArea").focus();
      return false;
    }

    //CPincode
    if (cpincode == "") {
      alert("Please enter Coresspondance Pincode.");
      document.getElementById("studCPincode").focus();
    } else {
      var regex = /^[0-9]\d{5}$/;
      if (regex.test(cpincode) === false) {
        alert("Please enter a valid 6 digit only");
        document.getElementById("studCPincode").focus();
        return false;
      }
    }

    // Validate taluka
    if (ctal == "") {
      alert("Please enter your Taluka");
      document.getElementById("studCTaluka").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(ctal) === false) {
        alert("Please enter a valid Taluka");
        document.getElementById("studCTaluka").focus();
        return false;
      }
    }

    // Validate District
    if (cdist == "") {
      alert("Please enter your District");
      document.getElementById("studCDistrict").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(cdist) === false) {
        alert("Please enter a valid District");
        document.getElementById("studCDistrict").focus();
        return false;
      }
    }

    // Validate State
    if (cstate == "") {
      alert("Please enter your State");
      document.getElementById("studCState").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(cstate) === false) {
        alert("Please enter a valid State");
        document.getElementById("studCState").focus();
        return false;
      }
    }

    // Validate PAddress
    if (paddress == "") {
      alert("Please enter your Permanent Address");
      document.getElementById("studPAddress").focus();
      return false;
    }

    // Validate City/Village
    if (pcityvillage == "") {
      alert("Please enter your City/Village");
      document.getElementById("studPCity").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(pcityvillage) === false) {
        alert("Please enter a valid City/Village");
        document.getElementById("studPCity").focus();
        return false;
      }
    }

    //Defence Type Candidature
    var cbox = document.forms["formname"]["Parea"];
    if (cbox[0].checked == false && cbox[1].checked == false) {
      alert("Please Select Area");
      document.getElementById("Parea").focus();
      return false;
    }

    //CPincode
    if (ppincode == "") {
      alert("Please enter Coresspondance Pincode.");
      document.getElementById("studPPincode").focus();
      return false;
    } else {
      var regex = /^[0-9]\d{5}$/;
      if (regex.test(ppincode) === false) {
        alert("Please enter a valid 6 digit only");
        document.getElementById("studPPincode").focus();
        return false;
      }
    }

    // Validate taluka
    if (ptal == "") {
      alert("Please enter your Taluka");
      document.getElementById("studPTaluka").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(ptal) === false) {
        alert("Please enter a valid Taluka");
        document.getElementById("studPTaluka").focus();
        return false;
      }
    }

    // Validate District
    if (pdist == "") {
      alert("Please enter your District");
      document.getElementById("studPDistrict").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(pdist) === false) {
        alert("Please enter a valid District");
        document.getElementById("studPDistrict").focus();
        return false;
      }
    }

    // Validate State
    if (pstate == "") {
      alert("Please enter your State");
      document.getElementById("studPState").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(pstate) === false) {
        alert("Please enter a valid State");
        document.getElementById("studPState").focus();
        return false;
      }
    }

    //SSC Field
    if (sscyear == "") {
      alert("Please enter your Passing SSC Year");
      document.getElementById("SSCYear").focus();
      return false;
    }
    if (sscoutoff == "") {
      alert("Please enter your SSC Marks Obtained");
      document.getElementById("SSCOutOf").focus();
      return false;
    }

    if (sscmark == "") {
      alert("Please enter your SSC Out of Marks");
      document.getElementById("SSCMark").focus();
      return false;
    }

    if (sscpercent == "") {
      alert("Please enter your SSC Percentage");
      document.getElementById("SSCPercent").focus();
      return false;
    }

    //HSC Field
    // if (hscyear == "") {
    //   alert("Please enter your Passing SSC Year");
    //   document.getElementById("HSCYear").focus();
    //   return false;
    // }
    // if (hscoutoff == "") {
    //   alert("Please enter your HSC Marks Obtained");
    //   document.getElementById("HSCOutOf").focus();
    //   return false;
    // }

    // if (hscmark == "") {
    //   alert("Please enter your HSC Out of Marks");
    //   document.getElementById("HSCMark").focus();
    //   return false;
    // }

    // if (hscpercent == "") {
    //   alert("Please enter your HSC Percentage");
    //   document.getElementById("HSCPercent").focus();
    //   return false;
    // }

    if (CetRollNo == "" || CetRollNo == 0) {
      alert("Please enter your Application No/Roll No.");
      document.getElementById("mhtcetappno").focus();
      return false;
    }

    if (CetYear == 0 || CetYear == "") {
      alert("Please enter your MHTCET Year of Passing.");
      document.getElementById("mhtcetyrofpass").focus();
      return false;
    }

    if (CetMathScr == 0 || CetMathScr == "") {
      alert("Please enter your MHTCET Mathematics Marks.");
      document.getElementById("mhtcetmathsscore").focus();
      return false;
    }

    if (CetPhyScr == 0) {
      alert("Please enter your MHTCET Physics Marks.");
      document.getElementById("mhtcetphysics").focus();
      return false;
    }

    if (CetChemScr == 0) {
      alert("Please enter your MHTCET Chemistry Marks.");
      document.getElementById("mhtcetchemistry").focus();
      return false;
    }

    if (CetTotal == 0) {
      alert("Please enter your MHTCET Total.");
      document.getElementById("mhtcetttlscore").focus();
      return false;
    }

    if (JeeRollNo == 0 || JeeRollNo == "") {
      alert("Please enter your JEE Application No/Roll No..");
      document.getElementById("JEERollno").focus();
      return false;
    }

    if (JeeYear == 0 || JeeYear == "") {
      alert("Please enter your JEE Year of Passing.");
      document.getElementById("JEEyrofpass").focus();
      return false;
    }

    if (JeeMathScr == 0 || JeeMathScr == "") {
      alert("Please enter your Mathematics Marks.");
      document.getElementById("JEEmathsscore").focus();
      return false;
    }

    if (JeePhyScr == 0 || JeePhyScr == "") {
      alert("Please enter your JEE Physics Marks.");
      document.getElementById("JEEphysics").focus();
      return false;
    }

    if (JeeChemScr == 0 || JeeChemScr == "") {
      alert("Please enter your JEE Chemistry Marks.");
      document.getElementById("JEEchemscore").focus();
      return false;
    }

    if (JeeTotal == 0 || JeeTotal == "") {
      alert("Please enter your JEE Total Score");
      document.getElementById("JEEttlscore").focus();
      return false;
    }

    handleSubmit();
    document.getElementById("formname").reset();
  };

  let getUserData = async (AId) => {
    try {
      const user = await axios.get(
        `https://localhost:44312/api/AdmissionFormGetByAId?AId=${params.id}`
      );
      // console.log(user.data);
      setstudentData({
        ...studentData,
        AId: user.data.data.AId,
        FullName: user.data.data.FullName,
        Branch: user.data.data.Branch,
        DOB: user.data.data.DOB,
        StudentPhoto: user.data.data.StudentPhoto,
        PhotoSign: user.data.data.PhotoSign,
        Gender: user.data.data.Gender,
        AdharcardNo: user.data.data.AdharcardNo,
        ContactStudent: user.data.data.ContactStudent,
        ContactParents: user.data.data.ContactParents,
        Nationality: user.data.data.Nationality,
        Bloodgrp: user.data.data.Bloodgrp,
        Email: user.data.data.Email,
        FatherName: user.data.data.FatherName,
        Occupation: user.data.data.Occupation,
        MotherName: user.data.data.MotherName,
        Category: user.data.data.Category,
        MinorityTypeCandidature: user.data.data.MinorityTypeCandidature,
        DisabilityTypeCandidature: user.data.data.DisabilityTypeCandidature,
        DefenceTypeCandidature: user.data.data.DefenceTypeCandidature,
        CorrespondenceAddress: user.data.data.CorrespondenceAddress,
        CCityVillage: user.data.data.CCityVillage,
        CArea: user.data.data.CArea,
        CPincode: user.data.data.CPincode,
        CTaluka: user.data.data.CTaluka,
        CDistrict: user.data.data.CDistrict,
        CState: user.data.data.CState,
        PermanentAddress: user.data.data.PermanentAddress,
        PCityVillage: user.data.data.PCityVillage,
        PArea: user.data.data.PArea,
        PPincode: user.data.data.PPincode,
        PTaluka: user.data.data.PTaluka,
        PDistrict: user.data.data.PDistrict,
        PState: user.data.data.PState,
        YrOfPassingSSC: user.data.data.YrOfPassingSSC,
        ObtainedMarksSSC: user.data.data.ObtainedMarksSSC,
        MarksOutOfSSC: user.data.data.MarksOutOfSSC,
        PercentageOfMarksSSC: user.data.data.PercentageOfMarksSSC,
        YrOfPassingHSC: user.data.data.YrOfPassingHSC,
        ObtainedMarksHSC: user.data.data.ObtainedMarksHSC,
        MarksOutOfHSC: user.data.data.MarksOutOfHSC,
        PercentageOfMarksHSC: user.data.data.PercentageOfMarksHSC,
        YrOfPassingOther: user.data.data.YrOfPassingOther,
        ObtainedMarksOther: user.data.data.ObtainedMarksOther,
        MarksOutOfOther: user.data.data.MarksOutOfOther,
        PercentageOfMarksOther: user.data.data.PercentageOfMarksOther,
        ApplicationNoMHTCET: user.data.data.ApplicationNoMHTCET,
        YearOfPassingMHTCET: user.data.data.YearOfPassingMHTCET,
        MathematicsScoreMHTCET: user.data.data.MathematicsScoreMHTCET,
        PhysicsScoreMHTCET: user.data.data.PhysicsScoreMHTCET,
        ChemistryScoreMHTCET: user.data.data.ChemistryScoreMHTCET,
        TotalScoreMHTCET: user.data.data.TotalScoreMHTCET,
        ApplicationNoJEEMAins: user.data.data.ApplicationNoJEEMAins,
        YearOfPassingJEEMAins: user.data.data.YearOfPassingJEEMAins,
        MathematicsScoreJEEMAins: user.data.data.MathematicsScoreJEEMAins,
        PhysicsScoreJEEMAins: user.data.data.PhysicsScoreJEEMAins,
        ChemistryScoreJEEMAins: user.data.data.ChemistryScoreJEEMAins,
        TotalScoreJEEMAins: user.data.data.TotalScoreJEEMAins,
        AdmissionLetter: user.data.data.AdmissionLetter,
        SSCMarksheet: user.data.data.SSCMarksheet,
        HSCMarksheet: user.data.data.HSCMarksheet,
        MHTCETScoreCard: user.data.data.MHTCETScoreCard,
        JEEMains: user.data.data.JEEMains,
        DipBSC: user.data.data.DipBSC,
        LeavingTransferCert: user.data.data.LeavingTransferCert,
        NationalityDomicileBirt: user.data.data.NationalityDomicileBirt,
        GAPCert: user.data.data.GAPCert,
        CasteCertificate: user.data.data.CasteCertificate,
        CasteValidityCertificate: user.data.data.CasteValidityCertificate,
        Noncreamylayer: user.data.data.Noncreamylayer,
        IncomeCerificate: user.data.data.IncomeCerificate,
        CertiDefense: user.data.data.CertiDefense,
        DisabilityCert: user.data.data.DisabilityCert,
        AdharCard: user.data.data.AdharCard,
        Remark: user.data.data.Remark,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.warn(`${error.message}`);
    }
  };

  const handelImgUpdate = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setstudentData({ ...studentData, StudentPhoto: e.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (AId) => {
    // e.preventDefault();
    axios
      .put(
        `https://localhost:44312/api/AdmissionFormUpdateAdmissionData/${params.id}`,
        studentData
      )
      .then((res) => {
        setLoading(false);
        // console.log("updated data:", res.data);
        toast.success(`${res.data.Message}`);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.warn(`${error.message}`);
      });
  };

  return (
    <>
      {/*************** First level Form start Here *******************/}
      <ToastContainer />
      <div>Update Page</div>
      {isLoading ? (
        <img src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif" />
      ) : (
        <form className="form-container mt-5" name="formname" id="formname">
          <div className="admission-section">
            <section>
              <div className="container-fluid">
                <div className="form-heading mt-3 mb-3">
                  <h4>Academic year : 2023-2024</h4>
                  <h6 className="m-3">
                    Admission form for first/direct second year - B.tech
                    (engineering)
                  </h6>
                </div>

                <div className="container">
                  <div className="row">
                    <div className="form-left-container col-md-8">
                      <div className="branch input-wrapper">
                        <label className="">Branch : </label>
                        <select
                          id="branchs"
                          name="branch"
                          required
                          className="input-container form-select form-control"
                          value={studentData.Branch}
                          onChange={(e) =>
                            setstudentData({
                              ...studentData,
                              Branch: e.target.value.toUpperCase(),
                            })
                          }
                        >
                          <option value="0">Select Branch</option>
                          <option value="CSE">CSE</option>
                          <option value="CIVIL">Civil</option>
                          <option value="E&TC">E & TC</option>
                          <option value="MECH">Mech</option>
                          <option value="ELECTRICAL">Electrical</option>
                        </select>
                      </div>
                      <div className="input-wrapper">
                        <label className="form-label">
                          Student's Full Name :{" "}
                        </label>

                        <div className="input-container">
                          <input
                            type="text"
                            required
                            id="studFullName"
                            name="studFullName"
                            className="form-control"
                            value={studentData.FullName}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                FullName: e.target.value.toUpperCase(),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper">
                        <label className="form-label">Date of Birth : </label>

                        <div className="input-container">
                          <input
                            type="date"
                            required
                            id="studDob"
                            name="studDob"
                            className="form-control"
                            value={studentData.DOB}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                DOB: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper">
                        <label>Gender : </label>
                        <div className="gender-container">
                          <label className="mr-5">Male</label>
                          <input
                            type="checkbox"
                            id="studGender"
                            name="studGender"
                            className="form-check-input"
                            checked={studentData.Gender == true}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                Gender: !studentData.Gender,
                              })
                            }
                          />
                        </div>

                        <div className="gender-container">
                          <label className="mr-5">Female</label>
                          <input
                            id="studGender"
                            type="checkbox"
                            className="form-check-input"
                            name="studGender"
                            checked={studentData.Gender == false}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                Gender: !studentData.Gender,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper">
                        <label className="form-label">Adhar Card No : </label>

                        <div className="input-container">
                          <input
                            type="number"
                            required
                            id="studAdhar"
                            name="studAdhar"
                            className="form-control"
                            value={studentData.AdharcardNo}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                AdharcardNo: e.target.value,
                              })
                            }
                            onKeyPress={(event) => {
                              if (!/[.0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          />
                        </div>
                      </div>

                      <div className="input-wrapper float-left">
                        <label className="form-label">
                          Contact No.(Student) :{" "}
                        </label>

                        <div className="input-container">
                          <input
                            type="number"
                            required
                            id="studContact"
                            name="studContact"
                            className="form-control"
                            value={studentData.ContactStudent}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                ContactStudent: e.target.value,
                              })
                            }
                            onKeyPress={(event) => {
                              if (!/[.0-9]/.test(event.key));
                            }}
                          />
                        </div>
                      </div>

                      <div className="input-wrapper float-left">
                        <label className="form-label">
                          Contact No.(Parent) :{" "}
                        </label>

                        <div className="input-container">
                          <input
                            type="number"
                            required
                            id="parentContact"
                            name="parentContact"
                            onKeyPress={(event) => {
                              if (!/[.0-9]/.test(event.key));
                            }}
                            className="form-control"
                            value={studentData.ContactParents}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                ContactParents: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper float-left">
                        <label className="form-label">Email Id : </label>

                        <div className="input-container">
                          <input
                            type="email"
                            id="email"
                            required
                            name="studEmail"
                            className="form-control"
                            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                            value={studentData.Email}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                Email: e.target.value.toUpperCase(),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper float-left">
                        <label className="form-label">Nationality : </label>

                        <div className="input-container">
                          <input
                            type="text"
                            required
                            id="studNationality"
                            name="studNationality"
                            className="form-control"
                            value={studentData.Nationality}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                Nationality: e.target.value.toUpperCase(),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper float-left">
                        <label className="form-label">Blood Group : </label>

                        <div className="input-container">
                          <input
                            type="text"
                            required
                            id="studBloodGroup"
                            name="studBloodGroup"
                            className="form-control"
                            value={studentData.Bloodgrp}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                Bloodgrp: e.target.value.toUpperCase(),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper float-left">
                        <label className="form-label">Father's Name : </label>

                        <div className="input-container">
                          <input
                            type="text"
                            required
                            id="studFatherName"
                            name="studFatherName"
                            className="form-control"
                            value={studentData.FatherName}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                FatherName: e.target.value.toUpperCase(),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper float-left">
                        <label className="form-label">
                          Father's Occupation :{" "}
                        </label>

                        <div className="input-container">
                          <input
                            type="text"
                            required
                            id="studFatherOccupation"
                            name="studFatherOccupation"
                            className="form-control"
                            value={studentData.Occupation}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                Occupation: e.target.value.toUpperCase(),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper float-left">
                        <label className="form-label">Mother's Name : </label>

                        <div className="input-container">
                          <input
                            type="text"
                            id="studMotherName"
                            required
                            name="studMotherName"
                            className="form-control"
                            value={studentData.MotherName}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                MotherName: e.target.value.toUpperCase(),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="category input-wrapper">
                        <label className="">Category : </label>
                        <select
                          id="category"
                          name="category"
                          value={studentData.Category}
                          className="input-container form-select form-control"
                          onChange={(e) =>
                            setstudentData({
                              ...studentData,
                              Category: e.target.value.toUpperCase(),
                            })
                          }
                        >
                          <option value="0">Select Category</option>
                          <option value="SC">SC</option>
                          <option value="OPEN">Open</option>
                          <option value="ST">ST</option>
                          <option value="OBC">OBC</option>
                          <option value="SBC">SBC</option>
                          <option value="VJ/DT">VJ/DT</option>
                          <option value="NT-A">NT-A</option>
                          <option value="NT-B">NT-B</option>
                          <option value="NT-C">NT-C</option>
                          <option value="NT-D">NT-D</option>
                          <option value="EWS">EWS</option>
                          <option value="MINORITY">MINORITY</option>
                        </select>
                      </div>
                      <div className="minority mt-3">
                        <label className="mr-5">
                          Do you belong to Minority Type Candidature? :{" "}
                        </label>

                        <div className="checkbox-container">
                          <label className="mr-5">Yes</label>
                          <input
                            type="checkbox"
                            id="MinorityTypeCandidature"
                            name="MinorityTypeCandidature"
                            checked={
                              studentData.MinorityTypeCandidature == true
                            }
                            className="form-check-input"
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                MinorityTypeCandidature:
                                  !studentData.MinorityTypeCandidature,
                              })
                            }
                          />
                        </div>

                        <div className="checkbox-container">
                          <label className="mr-5">No</label>
                          <input
                            type="checkbox"
                            id="MinorityTypeCandidature"
                            name="MinorityTypeCandidature"
                            className="form-check-input"
                            checked={
                              studentData.MinorityTypeCandidature == false
                            }
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                MinorityTypeCandidature:
                                  !studentData.MinorityTypeCandidature,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="minority mt-3">
                        <label className="mr-5">
                          Do You belong to Person with Disability Type
                          Candidature? :{" "}
                        </label>

                        <div className="checkbox-container">
                          <label className="mr-5">Yes</label>
                          <input
                            type="checkbox"
                            id="DisabilityTypeCandidature"
                            className="form-check-input"
                            name="DisabilityTypeCandidature"
                            checked={
                              studentData.DisabilityTypeCandidature == true
                            }
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                DisabilityTypeCandidature:
                                  !studentData.DisabilityTypeCandidature,
                              })
                            }
                          />
                        </div>

                        <div className="checkbox-container">
                          <label className="mr-5">No</label>
                          <input
                            type="checkbox"
                            id="DisabilityTypeCandidature"
                            className="form-check-input"
                            name="DisabilityTypeCandidature"
                            checked={
                              studentData.DisabilityTypeCandidature == false
                            }
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                DisabilityTypeCandidature:
                                  !studentData.DisabilityTypeCandidature,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="minority mt-3">
                        <label className="mr-5">
                          Do You belong to Defence Type Candidature? :{" "}
                        </label>

                        <div className="checkbox-container">
                          <label className="mr-5">Yes</label>
                          <input
                            type="checkbox"
                            id="DefenceTypeCandidature"
                            className="form-check-input"
                            name="DefenceTypeCandidature"
                            checked={studentData.DefenceTypeCandidature == true}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                DefenceTypeCandidature:
                                  !studentData.DefenceTypeCandidature,
                              })
                            }
                          />
                        </div>

                        <div className="checkbox-container">
                          <label className="mr-5">No</label>
                          <input
                            type="checkbox"
                            id="DefenceTypeCandidature"
                            className="form-check-input"
                            name="DefenceTypeCandidature"
                            checked={
                              studentData.DefenceTypeCandidature == false
                            }
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                DefenceTypeCandidature:
                                  !studentData.DefenceTypeCandidature,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper">
                        <label className="form-label">
                          Correspondence Address :{" "}
                        </label>

                        <div className="input-container">
                          <textarea
                            type="text"
                            required
                            id="studCAddress"
                            name="studCAddress"
                            className="form-control"
                            value={studentData.CorrespondenceAddress}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                CorrespondenceAddress:
                                  e.target.value.toUpperCase(),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper">
                        <label className="form-label">City/Village : </label>

                        <div className="input-container">
                          <input
                            type="text"
                            required
                            id="studCCity"
                            name="studCCity"
                            className="form-control"
                            value={studentData.CCityVillage}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                CCityVillage: e.target.value.toUpperCase(),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper">
                        <label>Area : </label>
                        <div className="gender-container">
                          <label className="mr-5">Urban</label>
                          <input
                            type="checkbox"
                            id="CArea"
                            name="CArea"
                            className="form-check-input"
                            checked={studentData.CArea == true}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                CArea: !studentData.CArea,
                              })
                            }
                          />
                        </div>

                        <div className="gender-container">
                          <label className="mr-5">Rural</label>
                          <input
                            type="checkbox"
                            id="CArea"
                            name="CArea"
                            className="form-check-input"
                            checked={studentData.CArea == false}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                CArea: !studentData.CArea,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper">
                        <label className="form-label">Pincode : </label>

                        <div className="input-container">
                          <input
                            type="text"
                            required
                            id="studCPincode"
                            name="studCPincode"
                            className="form-control"
                            value={studentData.CPincode}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                CPincode: e.target.value,
                              })
                            }
                            onKeyPress={(event) => {
                              if (!/[.0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          />
                        </div>
                      </div>

                      <div className="input-wrapper">
                        <label className="form-label">Taluka : </label>

                        <div className="input-container">
                          <input
                            type="text"
                            id="studCTaluka"
                            required
                            name="studCTaluka"
                            className="form-control"
                            value={studentData.CTaluka}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                CTaluka: e.target.value.toUpperCase(),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper">
                        <label className="form-label">District : </label>

                        <div className="input-container">
                          <input
                            type="text"
                            required
                            id="studCDistrict"
                            name="studCDistrict"
                            className="form-control"
                            value={studentData.CDistrict}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                CDistrict: e.target.value.toUpperCase(),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper">
                        <label className="form-label">State : </label>

                        <div className="input-container">
                          <input
                            type="text"
                            required
                            id="studCState"
                            name="studCState"
                            className="form-control"
                            value={studentData.CState}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                CState: e.target.value.toUpperCase(),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper">
                        <label className="form-label">
                          Permanent Address :{" "}
                        </label>

                        <div className="input-container">
                          <textarea
                            type="text"
                            required
                            id="studPAddress"
                            name="studPAddress"
                            className="form-control"
                            value={studentData.PermanentAddress}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                PermanentAddress: e.target.value.toUpperCase(),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper">
                        <label className="form-label">City/Village : </label>

                        <div className="input-container">
                          <input
                            type="text"
                            id="studPCity"
                            required
                            name="studPCity"
                            className="form-control"
                            value={studentData.PCityVillage}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                PCityVillage: e.target.value.toUpperCase(),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper">
                        <label>Area : </label>
                        <div className="gender-container">
                          <label className="mr-5">Urban</label>
                          <input
                            type="checkbox"
                            id="Parea"
                            name="Parea"
                            className="form-check-input"
                            checked={studentData.PArea == true}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                PArea: !studentData.PArea,
                              })
                            }
                          />
                        </div>

                        <div className="gender-container">
                          <label className="mr-5">Rural</label>
                          <input
                            type="checkbox"
                            id="Parea"
                            name="Parea"
                            className="form-check-input"
                            checked={studentData.PArea == false}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                PArea: !studentData.PArea,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper">
                        <label className="form-label">Pincode : </label>

                        <div className="input-container">
                          <input
                            type="text"
                            id="studPPincode"
                            required
                            name="studPPincode"
                            className="form-control"
                            value={studentData.PPincode}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                PPincode: e.target.value,
                              })
                            }
                            onKeyPress={(event) => {
                              if (!/[.0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          />
                        </div>
                      </div>

                      <div className="input-wrapper">
                        <label className="form-label">Taluka : </label>

                        <div className="input-container">
                          <input
                            type="text"
                            required
                            id="studPTaluka"
                            name="studPTaluka"
                            className="form-control"
                            value={studentData.PTaluka}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                PTaluka: e.target.value.toUpperCase(),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper">
                        <label className="form-label">District : </label>

                        <div className="input-container">
                          <input
                            type="text"
                            required
                            id="studPDistrict"
                            name="studPDistrict"
                            className="form-control"
                            value={studentData.PDistrict}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                PDistrict: e.target.value.toUpperCase(),
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="input-wrapper">
                        <label className="form-label">State : </label>

                        <div className="input-container">
                          <input
                            type="text"
                            id="studPState"
                            required
                            name="studPState"
                            className="form-control"
                            value={studentData.PState}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                PState: e.target.value.toUpperCase(),
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-right-container col-md-4">
                      <div id="registerImage">
                        <img
                          id="img"
                          name="img"
                          src={studentData.StudentPhoto}
                          alt="Profile Picture"
                        />
                        <input
                          type="file"
                          id="profile"
                          name="profile"
                          accept="image/*"
                          onChange={(e) => handelImgUpdate(e)}
                        />
                      </div>

                      <input
                        type="text"
                        name="studSign"
                        id="studSign"
                        onChange={(e) =>
                          setstudentData({
                            ...studentData,
                            PhotoSign: e.target.value.toUpperCase(),
                          })
                        }
                        placeholder="Sign"
                        value={studentData.PhotoSign}
                        className="form-control mt-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Academic year Form Start*/}

            <section>
              <div className="container ">
                <div className=" overflow-hidden table-responsive">
                  <h4
                    className="text-center p-2"
                    style={{
                      border: "2px",
                      backgroundColor: "gray",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
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
                          <input
                            type="text"
                            id="SSCYear"
                            name="SSCYear"
                            className="form-control"
                            value={studentData.YrOfPassingSSC}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                YrOfPassingSSC: e.target.value,
                              })
                            }
                            onKeyPress={(event) => {
                              if (!/[.0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          ></input>
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            id="SSCMark"
                            name="SSCMark"
                            className="form-control"
                            value={studentData.ObtainedMarksSSC}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                ObtainedMarksSSC: e.target.value,
                              })
                            }
                            onKeyPress={(event) => {
                              if (!/[.0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          ></input>
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            id="SSCOutOf"
                            name="SSCOutOf"
                            className="form-control"
                            value={studentData.MarksOutOfSSC}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                MarksOutOfSSC: e.target.value,
                              })
                            }
                            onKeyPress={(event) => {
                              if (!/[.0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          ></input>
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            id="SSCPercent"
                            name="SSCPercent"
                            className="form-control"
                            value={studentData.PercentageOfMarksSSC}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                PercentageOfMarksSSC: e.target.value,
                              })
                            }
                            onKeyPress={(event) => {
                              if (!/[.0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          ></input>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>H.S.C</TableCell>
                        <TableCell>
                          <input
                            type="text"
                            id="HSCYear"
                            className="form-control"
                            value={studentData.YrOfPassingHSC}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                YrOfPassingHSC: e.target.value,
                              })
                            }
                            onKeyPress={(event) => {
                              if (!/[.0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          ></input>
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            id="HSCMark"
                            className="form-control"
                            value={studentData.ObtainedMarksHSC}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                ObtainedMarksHSC: e.target.value,
                              })
                            }
                            onKeyPress={(event) => {
                              if (!/[.0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          ></input>
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            id="HSCOutOf"
                            className="form-control"
                            value={studentData.MarksOutOfHSC}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                MarksOutOfHSC: e.target.value,
                              })
                            }
                            onKeyPress={(event) => {
                              if (!/[.0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          ></input>
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            id="HSCPercent"
                            className="form-control"
                            value={studentData.PercentageOfMarksHSC}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                PercentageOfMarksHSC: e.target.value,
                              })
                            }
                            onKeyPress={(event) => {
                              if (!/[.0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          ></input>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Diploma / B.Sc / D.Voc.</TableCell>
                        <TableCell>
                          <input
                            type="text"
                            className="form-control"
                            value={studentData.YrOfPassingOther}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                YrOfPassingOther: e.target.value,
                              })
                            }
                            onKeyPress={(event) => {
                              if (!/[.0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          ></input>
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            className="form-control"
                            value={studentData.ObtainedMarksOther}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                ObtainedMarksOther: e.target.value,
                              })
                            }
                            onKeyPress={(event) => {
                              if (!/[.0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          ></input>
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            className="form-control"
                            value={studentData.MarksOutOfOther}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                MarksOutOfOther: e.target.value,
                              })
                            }
                            onKeyPress={(event) => {
                              if (!/[.0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          ></input>
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            className="form-control"
                            value={studentData.PercentageOfMarksOther}
                            onChange={(e) =>
                              setstudentData({
                                ...studentData,
                                PercentageOfMarksOther: e.target.value,
                              })
                            }
                            onKeyPress={(event) => {
                              if (!/[.0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          ></input>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <hr />

                <div className=" overflow-hidden table-responsive">
                  <h4
                    className="text-center p-2"
                    style={{
                      border: "2px",
                      backgroundColor: "gray",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    Marks Obtained in MHT-CET and/or JEE Mains Examination
                  </h4>
                  <div className="row">
                    <div className="col-lg-6">
                      <h4
                        className="text-center p-2"
                        style={{
                          border: "2px",
                          backgroundColor: "gray ",
                          color: "white",
                          borderRadius: "10px",
                        }}
                      >
                        MHT-CET
                      </h4>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell>Application/Roll No.</TableCell>
                            <TableCell>
                              <input
                                type="text"
                                id="mhtcetappno"
                                className="form-control"
                                name="mhtcetappno"
                                value={studentData.ApplicationNoMHTCET}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    ApplicationNoMHTCET: e.target.value,
                                  })
                                }
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Year of Passing</TableCell>
                            <TableCell>
                              <input
                                type="text"
                                id="mhtcetyrofpass"
                                className="form-control"
                                name="mhtcetyrofpass"
                                value={studentData.YearOfPassingMHTCET}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    YearOfPassingMHTCET: e.target.value,
                                  })
                                }
                                onKeyPress={(event) => {
                                  if (!/[.0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Mathematics % Score</TableCell>
                            <TableCell>
                              <input
                                type="text"
                                id="mhtcetmathsscore"
                                className="form-control"
                                name="mhtcetmathsscore"
                                value={studentData.MathematicsScoreMHTCET}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    MathematicsScoreMHTCET: e.target.value,
                                  })
                                }
                                onKeyPress={(event) => {
                                  if (!/[.0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Physics % Score</TableCell>
                            <TableCell>
                              <input
                                type="text"
                                id="mhtcetphysics"
                                className="form-control"
                                name="mhtcetphysics"
                                value={studentData.PhysicsScoreMHTCET}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    PhysicsScoreMHTCET: e.target.value,
                                  })
                                }
                                onKeyPress={(event) => {
                                  if (!/[.0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Chemistry % Score</TableCell>
                            <TableCell>
                              <input
                                type="text"
                                id="mhtcetchemistry"
                                className="form-control"
                                name="mhtcetchemistry"
                                value={studentData.ChemistryScoreMHTCET}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    ChemistryScoreMHTCET: e.target.value,
                                  })
                                }
                                onKeyPress={(event) => {
                                  if (!/[.0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Total % Score</TableCell>
                            <TableCell>
                              <input
                                type="text"
                                id="mhtcetttlscore"
                                className="form-control"
                                name="mhtcetttlscore"
                                value={studentData.TotalScoreMHTCET}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    TotalScoreMHTCET: e.target.value,
                                  })
                                }
                                onKeyPress={(event) => {
                                  if (!/[.0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              ></input>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    <div className="col-lg-6">
                      <h4
                        className="text-center p-2"
                        style={{
                          border: "2px",
                          backgroundColor: "gray",
                          color: "white",
                          borderRadius: "10px",
                        }}
                      >
                        JEE Mains Examination
                      </h4>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell>Application/Roll No.</TableCell>
                            <TableCell>
                              <input
                                type="text"
                                id="JEERollno"
                                className="form-control"
                                name="JEERollno"
                                value={studentData.ApplicationNoJEEMAins}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    ApplicationNoJEEMAins: e.target.value,
                                  })
                                }
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Year of Passing</TableCell>
                            <TableCell>
                              <input
                                type="text"
                                id="JEEyrofpass"
                                className="form-control"
                                name="JEEyrofpass"
                                value={studentData.YearOfPassingJEEMAins}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    YearOfPassingJEEMAins: e.target.value,
                                  })
                                }
                                onKeyPress={(event) => {
                                  if (!/[.0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Mathematics % Score</TableCell>
                            <TableCell>
                              <input
                                type="text"
                                id="JEEmathsscore"
                                className="form-control"
                                name="JEEmathsscore"
                                value={studentData.MathematicsScoreJEEMAins}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    MathematicsScoreJEEMAins: e.target.value,
                                  })
                                }
                                onKeyPress={(event) => {
                                  if (!/[.0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Physics % Score</TableCell>
                            <TableCell>
                              <input
                                type="text"
                                id="JEEphysics"
                                className="form-control"
                                name="JEEphysics"
                                value={studentData.PhysicsScoreJEEMAins}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    PhysicsScoreJEEMAins: e.target.value,
                                  })
                                }
                                onKeyPress={(event) => {
                                  if (!/[.0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Chemistry % Score</TableCell>
                            <TableCell>
                              <input
                                type="text"
                                id="JEEchemscore"
                                className="form-control"
                                name="JEEchemscore"
                                value={studentData.ChemistryScoreJEEMAins}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    ChemistryScoreJEEMAins: e.target.value,
                                  })
                                }
                                onKeyPress={(event) => {
                                  if (!/[.0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Total % Score</TableCell>
                            <TableCell>
                              <input
                                type="text"
                                id="JEEttlscore"
                                className="form-control"
                                name="JEEttlscore"
                                value={studentData.TotalScoreJEEMAins}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    TotalScoreJEEMAins: e.target.value,
                                  })
                                }
                                onKeyPress={(event) => {
                                  if (!/[.0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              ></input>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>

                <hr />

                <div className=" overflow-hidden table-responsive">
                  <h4
                    className="text-center p-2"
                    style={{
                      border: "2px",
                      backgroundColor: "gray",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    List of Document attached (Original Set and attested Copies
                    in 05 Sets)
                  </h4>
                  <div className="row">
                    <div className="col-lg-6">
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell>Sr No.</TableCell>
                            <TableCell>Document Details </TableCell>
                            <TableCell>if Yes</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>
                              Admission Letter / Seat Acceptance Letter
                            </TableCell>
                            <TableCell>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={studentData.AdmissionLetter}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    AdmissionLetter:
                                      !studentData.AdmissionLetter,
                                  })
                                }
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>S.S.C (Std. X) Mark Sheet</TableCell>
                            <TableCell>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={studentData.SSCMarksheet}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    SSCMarksheet: !studentData.SSCMarksheet,
                                  })
                                }
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>3</TableCell>
                            <TableCell>H.S.C (Std. XII) Mark Sheet</TableCell>
                            <TableCell>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={studentData.HSCMarksheet}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    HSCMarksheet: !studentData.HSCMarksheet,
                                  })
                                }
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>4</TableCell>
                            <TableCell>MHT-CET Score Card</TableCell>
                            <TableCell>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={studentData.MHTCETScoreCard}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    MHTCETScoreCard:
                                      !studentData.MHTCETScoreCard,
                                  })
                                }
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>5</TableCell>
                            <TableCell>
                              JEE Mains Score Card (if applicable)
                            </TableCell>
                            <TableCell>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={studentData.JEEMains}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    JEEMains: !studentData.JEEMains,
                                  })
                                }
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>6</TableCell>
                            <TableCell>
                              Diploma / B.Sc. / D.Voc Mark Sheet (if applicable)
                            </TableCell>
                            <TableCell>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={studentData.DipBSC}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    DipBSC: !studentData.DipBSC,
                                  })
                                }
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>7</TableCell>
                            <TableCell>
                              Leaving Certificate / Transfer Certificate
                            </TableCell>
                            <TableCell>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={studentData.LeavingTransferCert}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    LeavingTransferCert:
                                      !studentData.LeavingTransferCert,
                                  })
                                }
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>8</TableCell>
                            <TableCell>
                              Indian Nationality / Domicile / Birth Certificate
                            </TableCell>
                            <TableCell>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={studentData.NationalityDomicileBirt}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    NationalityDomicileBirt:
                                      !studentData.NationalityDomicileBirt,
                                  })
                                }
                              ></input>
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
                            <TableCell>if Yes</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>9</TableCell>
                            <TableCell>
                              Gap Certificate (if applicable)
                            </TableCell>
                            <TableCell>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={studentData.GAPCert}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    GAPCert: !studentData.GAPCert,
                                  })
                                }
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>10</TableCell>
                            <TableCell>Cast Certificate</TableCell>
                            <TableCell>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={studentData.CasteCertificate}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    CasteCertificate:
                                      !studentData.CasteCertificate,
                                  })
                                }
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>11</TableCell>
                            <TableCell>Cast Validity Certificate</TableCell>
                            <TableCell>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={studentData.CasteValidityCertificate}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    CasteValidityCertificate:
                                      !studentData.CasteValidityCertificate,
                                  })
                                }
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>12</TableCell>
                            <TableCell>Non-Creamy Layer Certificate</TableCell>
                            <TableCell>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={studentData.Noncreamylayer}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    Noncreamylayer: !studentData.Noncreamylayer,
                                  })
                                }
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>13</TableCell>
                            <TableCell>
                              Income Certificate (if applicable scholarship
                              student)
                            </TableCell>
                            <TableCell>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={studentData.IncomeCerificate}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    IncomeCerificate:
                                      !studentData.IncomeCerificate,
                                  })
                                }
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>14</TableCell>
                            <TableCell>
                              Certificate of Defence Service
                            </TableCell>
                            <TableCell>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={studentData.CertiDefense}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    CertiDefense: !studentData.CertiDefense,
                                  })
                                }
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>15</TableCell>
                            <TableCell>
                              Certificate of Physical Disability
                            </TableCell>
                            <TableCell>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={studentData.DisabilityCert}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    DisabilityCert: !studentData.DisabilityCert,
                                  })
                                }
                              ></input>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>16</TableCell>
                            <TableCell>Adhar Card Xerox</TableCell>
                            <TableCell>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={studentData.AdharCard}
                                onChange={(e) =>
                                  setstudentData({
                                    ...studentData,
                                    AdharCard: !studentData.AdharCard,
                                  })
                                }
                              ></input>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="d-flex justify-content-center m-4">
                  <textarea
                    placeholder="Remark (if any)"
                    rows="5"
                    cols="80"
                    value={studentData.Remark}
                    onChange={(e) =>
                      setstudentData({
                        ...studentData,
                        Remark: e.target.value.toUpperCase(),
                      })
                    }
                  ></textarea>
                </div>
              </div>
            </section>

            {/* Undertaking form start here */}
            {/* <section>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="heading mt-3">Undertaking</h2>

                    <ul>
                      <li>To,</li>
                      <li>The Principle,</li>
                      <li>Sanjay Ghodawat Institute,Atigre</li>
                      <li>Respected Sir,</li>
                    </ul>
                    <p className="mt-3">
                      I
                      -----------------------------------------------------------------------------------------------------------------------------
                      The underSigned, admitted to FE/DSE (Branch:
                      -----------------------------) for the year 2023-2024
                      hereby undertake that-
                    </p>

                    <ul className="undertaking-terms">
                      <li>
                        The above information is correct to the best of my
                        knowledge and belief.
                      </li>
                      <li>
                        I will confirm my DTE Online Admission within time given
                        by DTE and in case failed to do so I am responsible for
                        consequences.
                      </li>
                      <li>
                        I will be fully responsible for producing all the
                        required Original documents for my eligibility,for the
                        course to which I am admitted, and failure to do so by
                        prescribed end date will lead to automatic cancellation
                        of my admission without any liability of any nature to
                        the collage.
                      </li>
                      <li>
                        I will pay full fees of the institute at the time of
                        admission and the charges which Government of
                        Maharashtra/ DBATU,Lonere may levy from time, by due
                        dates and in the event of failure on my part, the
                        Principal of the collage may take such action against
                        me.
                      </li>
                      <li>
                        In case of any increase in fee by Shikshan Samitee, I am
                        bound to pay the same to institute.I am aware that if I
                        do not pay all the fees in time, I will not permitted to
                        appear for the University Examination.
                      </li>
                      <li>
                        I hereby agree to confirm to the rules and regulations
                        at present in force or that may hereafter be made by
                        UGC,DTE,DBATU Lonere, Institute, and/or Govt.I undertake
                        that so long as I am a student of the collage, I will do
                        nothing either inside the collage or outsite the collage
                        that will interfere with its orderly governance and
                        discilpine. I will fulfil attendance criteria to become
                        eligible to appear for the exam. If at any time in
                        future it is found that I have produced false
                        information or concealed any facts;my admission is
                        deemed to cancelled.
                      </li>
                      <li>
                        I know that as per UGC Regulations on Curbing the
                        Menance of Ragging in Higher Educational Institutions,
                        2009 is strictly prohibited in collage campus and
                        hostel, If I am found in such a case, the necessary
                        disciplinary action taken by the college will be binding
                        on me and I will submit Affidavit of student and Parents
                        as per Annexure I and II.
                      </li>
                    </ul>

                    <p className="mb-3">Date : --------------------</p>
                    <p>Place : ----------------------</p>

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
                  मी या शाखेत प्रवेश घेतला असून मी असे लिहून देतो / देते की
                  खालील सर्व मुद्दे शासन निर्णय क्र. २०१६ / प्र.क्र. २२१ /
                  शिक्षण- १ दि. ३१ मार्च २०१६ मधील आहेत. या निर्णयाची पुर्ण
                  कल्पना मला व माझ्या पालकांना मिळाली आहे.
                  <br />
                  <br />
                  १. विद्यार्थ्याची शैक्षणिक वर्षातील उपस्थिती ही कमीतकमी ७५
                  टक्के किंवा त्यापेक्षा जास्त असणे बंधनकारक आहे.
                  <br />
                  <br />
                  २. विद्यार्थ्याने शैक्षणिक वर्षातील दोन्ही.सेमिस्टरच्या
                  परीक्षा देणे बंधनकारक आहे.
                  <br />
                  <br />
                  ३. विद्यार्थ्याने शैक्षणिक वर्ष अर्धवट सोडल्यास शासनाची
                  कोणतीही शिष्यवृत्ती / सवलत मिळणार नाही. तसेच त्या काळात त्याला
                  कोणतीही शिष्यवृत्ती मिळाली असेल तर ती शासनास परत करावी लागेल.
                  <br />
                  <br />
                  ४. मुद्दा क्र. १ व २ नुसार विद्यार्थ्याने शैक्षणिक वर्ष पुर्ण
                  केले नाही तर शासनाची कोणतीही शिष्यवृत्तीची सवलत लागू होणार
                  नाही तसेच त्या दरम्यान शिष्यवृत्ती प्राप्त झाली असल्यास ती
                  शासनास परत करावी लागेल, व सदर विद्यार्थ्यास खुल्या प्रवर्गातील
                  फी भरावी लागेल.
                  <br />
                  <br />
                  ५. डिग्री कोर्स चार वर्षाचा आहे तो पुर्ण करण्यास विद्यार्थ्यास
                  अतिरिक्त वर्ष लागल्यास त्या विद्यार्थ्यास त्यावर्षीजी फी लागू
                  आहे ती भरणे बंधनकारक असेल.
                  <br />
                  <br />
                  वरील सर्व नियमं व निर्णय मी वाचले आहेत व ते मला मान्य आहेत.
                  वरील कोणताही प्रसंग माझ्या बाबतीत घडल्यास मी वरील नियमांच्या
                  अनुशंगाने कॉलेजची संपुर्ण फी खुल्या प्रवर्गातून भरण्यास तयार
                  आहे. माझी व माझ्य पालकांची या बाबत कोणतीही तक्रार असणार नाही
                </div>
                <div className="row m-5">
                  <p className="mb-3">Date : --------------------</p>
                  <p>Place : ----------------------</p>
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
            <button
              type="button"
              className="btn btn-success submit-button"
              onClick={() => {
                validate();
              }}
            >
              Save
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default UserEdit;
