const apiKey = import.meta.env.VITE_RAPID_API_OPENAI_IMAGE;

export const fetchImage = async (
  prompt: string,
  url: string,
  onProgress: (progress: number) => void
): Promise<string> => {
  const fetchData = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "x-rapidapi-key": apiKey || "",
        "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: prompt, width: 512, height: 512 }),
    });

    if (response.ok) {
      const data = await response.json();

      if (data && data.generated_image) {
        return data.generated_image;
      }

      throw new Error("Unexpected server response");
    } else {
      throw new Error(response.statusText);
    }
  };

  // Simulate progress updates
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    if (progress <= 90) {
      onProgress(progress);
    }
  }, 500);

  try {
    const result = await fetchData();
    clearInterval(interval);
    onProgress(100);
    return result;
  } catch (error) {
    clearInterval(interval);
    onProgress(100); // Ensure progress is completed in case of an error
    throw error;
  }
};
