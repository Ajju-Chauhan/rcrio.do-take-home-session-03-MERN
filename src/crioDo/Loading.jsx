import 'bootstrap/dist/css/bootstrap.min.css';

function Loading() {
  return (
    <>
      <div className="border border-dark border-2 m-4 mt-5 p-4 text-center">
        <h1 className="mb-4">Book a Session</h1>
        <p className="mb-4">Fill in the form below to book a virtual session with your doctor</p>
        <h4 className="mb-0">Scheduling the appointment...</h4>
      </div>
    </>
  );
}

export default Loading;
