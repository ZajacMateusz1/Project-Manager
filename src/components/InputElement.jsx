export default function InputElement({ children, type, id, multiline }) {
  let styles = "border-[#333] border rounded-sm p-1";
  return (
    <div className="input flex flex-col p-2">
      <label className="m-1 uppercase font-semibold" htmlFor={id}>
        {children}
      </label>
      {multiline ? (
        <textarea className={`${styles}`} id={id} name={id} rows="2"></textarea>
      ) : (
        <input type={type} id={id} name={id} className={`${styles}`} />
      )}
    </div>
  );
}
