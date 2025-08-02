export default function InputElement({ children, type, id, multiline }) {
  return (
    <div className="input flex flex-col p-2">
      <label className="m-1 uppercase font-semibold" htmlFor={id}>
        {children}
      </label>
      {multiline ? (
        <textarea
          className="border-[#333] border rounded-sm"
          id={id}
          rows="2"
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          className="border-[#333] border rounded-sm"
        />
      )}
    </div>
  );
}
