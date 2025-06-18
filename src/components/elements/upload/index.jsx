import React, { useRef, useState } from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import '../../../common/style/country.css';

const Upload = ( {country, stayDays }) => {
  const ref = useRef(null);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle');
  const [reasons, setReasons] = useState([]);
  // const [country, setCountry] = useState('');
  // const [stayDays, setStayDays] = useState('');

  const pickFile = () => ref.current.click();

   const onChange = async (e) => {
    const f = e.target.files[0];
    setFile(null);
    setStatus('idle');
    setReasons([]);

    if (!f) return;
    if (f.type !== 'application/pdf' || f.size > 10 * 1024 * 1024) {
      setStatus('error');
      setReasons([
        f.type !== 'application/pdf'
          ? 'Invalid file type'
          : 'File too large (max 10MB)',
      ]);
      setFile(f);
      return;
    }

    setFile(f);
    setStatus('uploading');

    try {
      const apiBase = import.meta.env.VITE_API_URL;
      const formData = new FormData();
      formData.append('file', f);
      formData.append('country', country);
      formData.append('stayDays', stayDays);

      for (const pair of formData.entries()) {
        console.log(`${pair[0]}:`, pair[1]);
      }

      const res = await fetch(`${apiBase}/statements/evaluate/pdf`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || 'Upload failed');
      }

      const json = await res.json();
      setStatus('success');
      setReasons([json.message]);
    } catch (error) {
      console.error('Upload error:', error);
      setStatus('error');
      setReasons([error.message || 'Network or server error']);
    }
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">Document Scan</h2>
      <div className={`upload-box ${status}`}>
        {status === 'uploading' || status === 'success' || status === 'error' ? (
          <>
            <FaRegFileAlt className="item-icon" />
            <span className="item-name">{file?.name}</span>
            <div className="progress-line" />
            <span className="status-text">
              {status === 'success'
                ? 'Upload Successful !'
                : status === 'uploading'
                  ? 'Uploading...'
                  : 'Upload failed! Please try again.'}
            </span>
            <span className="percent-text">
              {status === 'success' ? (
                '100%'
              ) : status === 'error' ? (
                <button onClick={pickFile} className="retry-btn">
                  Try Again
                </button>
              ) : (
                '...'
              )}
            </span>
            {status === 'error' && <MdDelete className="delete-icon" onClick={pickFile} />}
          </>
        ) : (
          <>
            <FaRegFileAlt className="upload-icon" />
            <p>Drag and drop a photo of your document here.</p>
            <span>— OR —</span>
            <button onClick={pickFile}>Browse Files</button>
          </>
        )}
        <input
          type="file"
          accept=".pdf"
          ref={ref}
          onChange={onChange}
          style={{ display: 'none' }}
        />
      </div>

      {reasons.length > 0 && (
        <ul className={`checklist ${status}`}>
          {reasons.map((r, i) => (
            <li key={i}>
              {status === 'success' ? <FiCheckCircle /> : <FiXCircle />}
              <span>{r}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Upload;