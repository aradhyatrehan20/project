
import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleReservation = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!firstName || !lastName || !email || !date || !time || !phone) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:4000/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message); // Show success toast
      // Reset the form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      navigate("/success"); // Navigate to success page after successful reservation
    } catch (error) {
      // Check for error response and handle accordingly
      const errorMessage = error.response?.data?.message || "An error occurred.";
      toast.error(errorMessage);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form onSubmit={handleReservation}> {/* Use onSubmit instead of onClick */}
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button type="submit">
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
