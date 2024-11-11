export default function Alert({ status, message1, message2 }) {
  return (
    <>
      <div className={`alert alert-${status}`} role="alert">
        <strong>{message1} </strong>
        {message2}
      </div>
    </>
  );
}
