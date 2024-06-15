import React from 'react';
import { useCSVUploader } from './useCSVUploader';

const CSVUploader: React.FC = () => {
  const { getRootProps, getInputProps } = useCSVUploader();

  return (
    <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px' }}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop a CSV file here, or click to select one</p>
    </div>
  );
};

export default CSVUploader;

