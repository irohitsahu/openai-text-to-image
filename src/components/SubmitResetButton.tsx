import React from "react";

type ButtonProps = {
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleReset: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isButtonDisabled: boolean;
  loading: boolean;
};

const SubmitResetButton = ({
  loading,
  isButtonDisabled,
  handleReset,
  handleSubmit,
}: ButtonProps) => {
  return (
    <>
      <button
        disabled={isButtonDisabled}
        onClick={handleSubmit}
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
    </>
  );
};

export default SubmitResetButton;
