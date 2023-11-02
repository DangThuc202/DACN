import React, { useState, useEffect } from "react";

const URL = 'http://localhost:3001/api/roles';

const DoctorAuthPage = () => {

    fetch(URL)
        .then(res => res.json())
        .then(json => console.log(json))

    return (
        <div>
            {/* <p>Role: {role}</p> */}
        </div>
    );
};

export default DoctorAuthPage;