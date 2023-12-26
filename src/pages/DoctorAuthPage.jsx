import React, { useState, useEffect } from 'react'

const URL = 'http://localhost:3001/api/roles'

const DoctorAuthPage = () => {
  const [roles, setRoles] = useState([])

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await fetch(URL) // Đường dẫn API để lấy danh sách roles từ server
        const data = await response.json()
        setRoles(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchRoles()
  }, [])

  return (
    <div>
      <h2>Danh sách name trong roles:</h2>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>{role.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default DoctorAuthPage
