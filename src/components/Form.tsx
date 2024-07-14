type FormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleReset: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputValue: string;
  isButtonDisabled: boolean;
  loading: boolean;
  progress: number;
};

export default function Form({
  inputValue,
  isButtonDisabled,
  loading,
  progress,
  onInputChange,
  handleSubmit,
  handleReset,
}: FormProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-6 w-full"
    >
      <textarea
        id="prompt"
        placeholder="Enter Your Prompt"
        value={inputValue}
        onChange={onInputChange}
        className="bg-[#393E46] border border-[#EEEEEE] rounded-md p-2 font-mono shadow-lg w-full"
      />
      <button
        type="submit"
        disabled={isButtonDisabled}
        className={`${
          isButtonDisabled
            ? "cursor-not-allowed text-slate-100/50 border-[#EEEEEE]/50 shadow-lg/80"
            : "bg-[#393E46] text-slate-100 border-[#EEEEEE] shadow-lg"
        } font-semibold border rounded-md py-2 px-4 w-3/4 transition-colors`}
      >
        {loading ? "Loading..." : "Generate"}
      </button>
      <button
        className={
          "bg-[#393E46] text-slate-100 border-[#EEEEEE] shadow-lg font-semibold border rounded-md py-2 px-4 w-3/4 transition-colors"
        }
        onClick={handleReset}
      >
        Reset
      </button>
      {loading && <div>Loading: {progress}%</div>}
    </form>
  );
}
