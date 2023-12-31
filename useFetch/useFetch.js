/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  useEffect(() => {
    getFetch();
  }, [url]);

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
