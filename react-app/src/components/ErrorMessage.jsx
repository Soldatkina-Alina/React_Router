function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <strong>Ошибка: {message}</strong>
    </div>
  );
}
export default ErrorMessage;