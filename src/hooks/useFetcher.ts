import { useState } from "react";
import { fetchImage } from "../utils/imageFetcher";

const apiEndpoint = "https://chatgpt-42.p.rapidapi.com/texttoimage";

export function useImageFetcher() {
  const [inputValue, setInputValue] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<null | string>(null);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    setProgress(0);
    setError(null);

    try {
      const url = await fetchImage(inputValue, apiEndpoint, setProgress);
      setImageURL(url);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setImageURL("");
    setLoading(false);
    setProgress(0);
    setInputValue("");
  };

  return {
    inputValue,
    imageURL,
    loading,
    error,
    progress,
    setInputValue,
    handleSubmit,
    handleReset,
  };
}
