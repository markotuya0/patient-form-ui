import React, { useState } from "react";
import {
TextField,
Button,
Grid,
Container,
Typography,
FormControl,
Select,
MenuItem,
} from "@material-ui/core";

const PatientReferralForm = () => {
const [formData, setFormData] = useState({
patientName: "",
age: "",
gender: "",
reasonForReferral: "",
referredBy: "",
contactNumber: "",
email: "",
});

const handleChange = (event) => {
const { name, value } = event.target;
setFormData((prevFormData) => ({
...prevFormData,
[name]: value,
}));
};

const handleSubmit = (event) => {
event.preventDefault();
// Handle form submission logic here
console.log("Form Data:", formData);
};

return (
<Container maxWidth="sm">
<Typography variant="h4" align="center" gutterBottom>
Patient Referral Form
</Typography>
<form onSubmit={handleSubmit}>
<Grid container spacing={2}>
<Grid item xs={12}>
<TextField
           fullWidth
           variant="outlined"
           label="Patient Name"
           name="patientName"
           value={formData.patientName}
           onChange={handleChange}
         />
</Grid>
<Grid item xs={12}>
<TextField
           fullWidth
           variant="outlined"
           label="Age"
           name="age"
           value={formData.age}
           onChange={handleChange}
         />
</Grid>
<Grid item xs={12}>
<FormControl fullWidth variant="outlined">
<Select
             label="Gender"
             name="gender"
             value={formData.gender}
             onChange={handleChange}
           >
<MenuItem value="male">Male</MenuItem>
<MenuItem value="female">Female</MenuItem>
<MenuItem value="other">Other</MenuItem>
</Select>
</FormControl>
</Grid>
<Grid item xs={12}>
<TextField
           fullWidth
           variant="outlined"
           label="Reason for Referral"
           name="reasonForReferral"
           value={formData.reasonForReferral}
           onChange={handleChange}
           multiline
           rows={4}
         />
</Grid>
<Grid item xs={12}>
<TextField
           fullWidth
           variant="outlined"
           label="Referred By"
           name="referredBy"
           value={formData.referredBy}
           onChange={handleChange}
         />
</Grid>
<Grid item xs={12}>
<TextField
           fullWidth
           variant="outlined"
           label="Contact Number"
           name="contactNumber"
           value={formData.contactNumber}
           onChange={handleChange}
         />
</Grid>
<Grid item xs={12}>
<TextField
           fullWidth
           variant="outlined"
           label="Email"
           name="email"
           value={formData.email}
           onChange={handleChange}
         />
</Grid>
<Grid item xs={12}>
<Button type="submit" variant="contained" color="primary">
Submit
</Button>
</Grid>
</Grid>
</form>
</Container>
);
};

export default PatientReferralForm;
