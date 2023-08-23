import { FormEvent, useState } from "react";

const useFetchAiData = (
  query: string,
  host: string,
  url: string,
  apiKey: string
) => {
  const [responseText, setResponseText] = useState("");
  const [error, setError] = useState<null | string | unknown>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (query === "") {
      setError("No query is specified");
      return;
    }
    setLoading(true);
    setResponseText("");
    setError(null);

    const requestData = {
      query: query,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": host,
      },
      body: JSON.stringify(requestData),
    };

    try {
      const apiResponse = await fetch(url, options);
      const result = await apiResponse.text();
      const parsedResponse = JSON.parse(result);
      const cleanText = parsedResponse.response;
      setResponseText(cleanText);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    query,
    response: responseText,
    error,
    loading,
    handleSubmit,
  };
};

export default useFetchAiData;
