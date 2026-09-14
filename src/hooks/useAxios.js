import { useState, useCallback } from 'react';
import apiClient from '../api/axios';

export const useAxios = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async ({ url, method = 'GET', data = null, headers = {} }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient({
        url,
        method,
        data,
        headers,
      });
      setData(response.data);
      return response.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.detail ||
        err.response?.data?.message ||
        err.message ||
        'Something went wrong';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, error, loading, request };
};