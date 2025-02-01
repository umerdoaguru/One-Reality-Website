import axios from "axios";
import cogoToast from "cogo-toast";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const AdminResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(true);
  const [showVerify, setShowVerify] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("https://one-realty.in/api/sendOtp-superadmin", { email });
      cogoToast.success("OTP sent to your email");
      setShowOtp(false);
      setShowVerify(true);
      setShowReset(false);
    } catch (error) {
      cogoToast.error(error?.response?.data?.message || "Something went wrong");
    }
    setLoading(false);
  };

  const verifyOtpAdmin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("https://one-realty.in/api/verifyOtp-superadmin", { email, otp });
      setShowOtp(false);
      setShowVerify(false);
      setShowReset(true);
    } catch (error) {
      cogoToast.error("Wrong OTP!");
    }
    setLoading(false);
  };

  const changePassword = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.put("https://one-realty.in/api/resetPassword-superadmin", { email, password: newPassword });
      cogoToast.success("Password updated successfully");
      navigate("/admin");
    } catch (error) {
      cogoToast.error(error?.response?.data?.message || "Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center mx-2">
        <div className="col-lg-4 border rounded-4 mb-2 p-4 ">
          <h1 className="text-center">Reset Password</h1>

          {showOtp && (
            <form onSubmit={sendOtp}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success w-100" disabled={loading}>
                  {loading ? "Sending OTP..." : "Send OTP"}
                </button>
              </div>
            </form>
          )}

          {showVerify && (
            <form onSubmit={verifyOtpAdmin}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">OTP</label>
                <input
                  type="text"
                  className="form-control"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success w-100" disabled={loading}>
                  {loading ? "Verifying OTP..." : "Verify OTP"}
                </button>
              </div>
            </form>
          )}

          {showReset && (
            <form onSubmit={changePassword}>
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <button
                    className="btn btn-outline-secondary border"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success w-100" disabled={loading}>
                  {loading ? "Resetting Password..." : "Reset Password"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminResetPassword;
