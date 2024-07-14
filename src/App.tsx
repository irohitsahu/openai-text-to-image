import Form from "./components/Form";
import ImageDisplay from "./components/ImageDisplay";
import { useImageFetcher } from "./hooks/useFetcher";

function App() {
  const {
    inputValue,
    imageURL,
    loading,
    error,
    progress,
    setInputValue,
    handleSubmit,
    handleReset,
  } = useImageFetcher();

  const isButtonDisabled = inputValue.length === 0 || loading;

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <main className="h-screen flex justify-center items-start">
        <div className="h-[calc(100%-100px)] w-[calc(100%-80px)] flex flex-col justify-start items-center gap-6 mx-auto rounded-xl rounded-t-none px-5 py-10 bg-[#00ADB5] prompt-wrapper">
          <h1 className="font-heading text-2xl text-center">
            Ignite Your Imagination
          </h1>
          <div className="flex flex-col justify-center items-center gap-6 w-full">
            <Form
              handleSubmit={handleSubmit}
              inputValue={inputValue}
              onInputChange={onInputChange}
              isButtonDisabled={isButtonDisabled}
              loading={loading}
              progress={progress}
              handleReset={handleReset}
            />
            <ImageDisplay imageURL={imageURL} loading={loading} error={error} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
