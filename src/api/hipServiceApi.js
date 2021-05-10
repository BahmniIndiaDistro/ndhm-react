import axios from 'axios';

const hipServiceUrl = localStorage.getItem("hipServiceUrl");
const bahmniUrl = localStorage.getItem("bahmniUrl");
const headers = {
    'Content-Type': 'application/json'
};

export const getAuthModes = async (healthId) => {
    const data = {
        "healthId": healthId,
        "purpose": "KYC_AND_LINK"
    };
   //const response = await axios.post(hipServiceUrl + "/fetch-modes", data, headers);
   return ["MOBILE_OTP", "AADHAR_OTP"];
};

export const authInit = async (healthId, authMode) => {
    const data = {
        "healthId": healthId,
        "authMode": authMode,
        "purpose": "KYC_AND_LINK"
    };

    //const response = await axios.post(hipServiceUrl + "/auth/init", data, headers);
    return {};
};

export const authConfirm = async (healthId, otp) => {
    const data = {
        "authCode": otp,
        "healthId": healthId
    };
    // const response = await axios.post(hipServiceUrl + "/auth/confirm" ,data, headers);
    return {
        gender: "M",
        name: "Surya pal",
        yearOfBirth: "2002",
        address: {
            line: "line",
            district: "sklm",
            state: "AP",
            pincode: "532474"
        }
    };
}

export const fetchPatientDetailsFromBahmni = async (patient) => {
    const params = {
        "patientName": patient.name,
        "patientYearOfBirth": patient.yearOfBirth,
        "patientGender": patient.gender
    }
    const response = await axios.get(bahmniUrl + "/existingPatients", {params}, headers);
    return response.data;
}
