import { FormEvent, useState } from "react";

const useFetchAiData = (
  query: string,
  host: string,
  url: string,
  apiKey: string
) => {
  const [response, setResponse] = useState("");
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (query === "") {
      setError("Enter text to summarize");
      return;
    }
    setLoading(true);
    setResponse("");
    setError(null);

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": host,
      },
      body: JSON.stringify({ text: query }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setResponse(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    query,
    response,
    error,
    loading,
    handleSubmit,
  };
};

export default useFetchAiData;
