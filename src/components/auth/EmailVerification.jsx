import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import userService from '../../services/UserServices'

const EmailVerification = () => {
  const [verificationStatus, setVerificationStatus] = useState('')
  const { verificationCode } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (verificationCode) {
      verifyEmail(verificationCode)
    }
  }, [verificationCode])

  const verifyEmail = async (code) => {
    try {
      const response = await userService.emailVerification(code)
      console.log(response)
      setVerificationStatus(response.data.message)
    } catch (error) {
      setVerificationStatus(error.response.data.message || 'An error occurred during verification.')
    }
  }
  return (
    <div>
      <h1>Email Verification</h1>
    </div>
  )
}
export default EmailVerification
