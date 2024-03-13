import { useState } from "react";
import Success from "./Success";
import Loading from "./Loading";

function Session03() {
  const [showOptions, setShowOptions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function DoctorSelector() {
    setShowOptions(true);
  }

  const FormDataCollect = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      doctor: formData.get("doctor"),
      where: formData.get("where"),
      when: formData.get("when"),
    };
    console.log(payload);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!response.ok) {
        throw new Error("failed to submit form");
      }
      setSuccess(true);
    } catch (error) {
      console.log("This error occur", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading ? <Loading /> : success ? <Success onSuccess={setSuccess} /> :
        <form
          className="border border-dark border-2 m-3 p-4 rounded"
          onSubmit={FormDataCollect}
        >
          <h1 className="font-weight-bold text-center mb-4 display-4">Book a Session</h1>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" name="firstName" required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" name="lastName" required />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Doctor</label>
            <select className="form-select" name="doctor" onChange={DoctorSelector} required>
              <option value="">Select a Doctor</option>
              <option value="Dr. Abhay">Dr. Abhay</option>
              <option value="Dr. Diksha">Dr. Diksha</option>
              <option value="Dr. Lappu">Dr. Lappu</option>
              <option value="Dr. Sanjay">Dr. Sanjay</option>
              <option value="Dr. Yashpal">Dr. Yashpal</option>
            </select>
          </div>
          {showOptions && (
            <div>
              <div className="mb-3">
                <label className="form-label">Where</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="where" value="Google Meet" id="googleMeet" />
                  <label className="form-check-label" htmlFor="googleMeet">
                    Google Meet
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="where" value="Phone" id="phone" />
                  <label className="form-check-label" htmlFor="phone">
                    Phone
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">When</label>
                <input type="datetime-local" className="form-control" name="when" required />
              </div>
            </div>
          )}
          <button className="btn btn-success" type="submit">
            Confirm Booking
          </button>
        </form>
      }
    </>
  );
}

export default Session03;
