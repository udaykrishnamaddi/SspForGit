const InputWithLabel = ({ id, type, value, onChange, placeholder, label }) => {
    return (
      <div className="relative pt-2">
        <input
          autoComplete="off"
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          className="peer placeholder-transparent mb-4 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
          placeholder={placeholder}
        />
        <label
          htmlFor={id}
          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
        >
          {label}
        </label>
      </div>
    );
  };
   export default InputWithLabel;