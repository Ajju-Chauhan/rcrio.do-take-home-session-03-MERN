function Success({ onSuccess }) {
    const handleCancelAppointment = () => {
      onSuccess(false);
    };
    return (
      <>
        <div className="border  border-2 m-4px mt-5 w-30 h-400px d-flex flex-column justify-content-center align-items-center">
          <h1 className="m-1">Appointment booked successfully.....</h1>
          <button className="btn btn-danger m-5" onClick={handleCancelAppointment}>
            Cancel appointment
          </button>
        </div>
      </>
    );
  }
export default Success;
  