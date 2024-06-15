import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const uploadCSV = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const endpoint = '/api/upload_csv'; // Update with your actual endpoint

  try {
    const response = await axios.post(endpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Upload successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

export const useCSVUploader = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      uploadCSV(file)
        .then(() => {
          console.log('File uploaded successfully!');
          // Handle success (if needed)
        })
        .catch(error => {
          console.error('Error uploading the file:', error);
          // Handle error (if needed)
        });
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop
  });

  return { getRootProps, getInputProps };
};
