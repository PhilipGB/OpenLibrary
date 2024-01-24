function TextInput({
  name,
  value,
  onChange,
}: {
  name: string;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <label className='text-sm font-medium'>
      {name}
      <br />
      <input
        className='min-w-full text-lg p-2 border-2 rounded-md border-slate-400 focus:border-slate-500'
        type='text'
        id={name.toLowerCase()}
        name={name.toLowerCase()}
        value={value ?? ''}
        onChange={onChange}
      />
    </label>
  );
}

export default TextInput;
