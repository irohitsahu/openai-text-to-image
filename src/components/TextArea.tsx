type TextAreaProps = {
  onInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputValue: string;
};

export default function TextArea({ inputValue, onInputChange }: TextAreaProps) {
  return (
    <textarea
      id="prompt"
      placeholder="Enter Your Prompt"
      value={inputValue}
      onChange={onInputChange}
      className="bg-[#393E46] border border-[#EEEEEE] rounded-md p-2 font-mono shadow-lg w-full sm:min-h-60"
    />
  );
}
