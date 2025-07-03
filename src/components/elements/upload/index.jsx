

// import React, { useRef, useState } from 'react';
// import { FaRegFileAlt, FaTimes, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
// import { MdOutlineRefresh, MdClearAll } from 'react-icons/md';
// import '../../../common/style/country.css';
// import SearchingGif from '../../../assets/gif/searching.gif';

// const Upload = ({ country, stayDays }) => {
//   const ref = useRef(null);
//   const [files, setFiles] = useState([]);
//   const [status, setStatus] = useState('idle');
//   const [privacyChecked, setPrivacyChecked] = useState(false);
//   const [highlight, setHighlight] = useState(false);
//   const [hoveredFile, setHoveredFile] = useState(null);
//   const [notification, setNotification] = useState(null);

//   const showNotification = (type, message) => {
//     setNotification({ type, message });
//     setTimeout(() => setNotification(null), 8000);
//   };

//   const pickFile = () => {
//     if (!privacyChecked) {
//       setHighlight(true);
//       showNotification('error', 'Please agree to the Privacy Policy');
//       setTimeout(() => setHighlight(false), 1000);
//       return;
//     }
//     ref.current.click();
//   };

//   const onChange = (e) => {
//     const f = e.target.files[0];
//     setStatus('idle');

//     if (!f) return;

//     if (f.type !== 'application/pdf') {
//       showNotification('error', 'Only PDF files are allowed');
//       return;
//     }

//     if (f.size > 10 * 1024 * 1024) {
//       showNotification('error', 'File size exceeds 10MB limit');
//       return;
//     }

//     setFiles((prev) => {
//       const isDuplicate = prev.some((file) => file.name === f.name && file.size === f.size);
//       if (isDuplicate) {
//         showNotification('warning', 'This file has already been added');
//         return prev;
//       }
//       showNotification('success', 'File added successfully');
//       return [...prev, f];
//     });
//   };

//   const removeFile = (name) => {
//     setFiles((prev) => prev.filter((f) => f.name !== name));
//     showNotification('info', 'File removed');
//   };

//   const clearAllFiles = () => {
//     setFiles([]);
//     showNotification('info', 'All files cleared');
//   };

//   const refreshUpload = () => {
//     setStatus('idle');
//     setFiles([]);
//     showNotification('info', 'Upload reset');
//   };

//   const handleSubmit = async () => {
//     if (!privacyChecked) {
//       setHighlight(true);
//       showNotification('error', 'Please agree to the Privacy Policy');
//       setTimeout(() => setHighlight(false), 800);
//       return;
//     }
//     if (files.length === 0) {
//       showNotification('error', 'Please add at least one file');
//       return;
//     }

//     setStatus('uploading');
//     showNotification('info', 'Uploading files...');

//     try {
//       const apiBase = import.meta.env.VITE_API_URL;
//       const formData = new FormData();
//       files.forEach((f) => formData.append('file', f));
//       formData.append('country', country);
//       formData.append('stayDays', stayDays);

//       const res = await fetch(`${apiBase}/statements/evaluate/pdf`, {
//         method: 'POST',
//         body: formData,
//       });

//       const responseData = await res.json(); 

//       if (!res.ok || (responseData.message && responseData.message.includes('Minimum tələb olunan tarix aralığı yoxdur'))) {
//         setStatus('error');
//         showNotification('error', responseData.message || 'Minimum required date range not available. Minimum: 90 days');
//         return;
//       }

//       setStatus('success');
//       showNotification('success', responseData.message || 'Upload successful!');
//       setFiles([]);
//     } catch (error) {
//       console.error('Upload error:', error);
//       setStatus('error');
//       showNotification('error', error.message || 'Upload failed. Please try again.');
//     }
//   };

//   return (
//     <div className="Upload-Group">
//       <div className="upload-container">
//         <h2 className="upload-title">Document Scan</h2>

//         <div className={`upload-box ${status}`}>
//           {(status === 'success' || status === 'error') && (
//             <button 
//               className="refresh-upload-btn"

//               onClick={refreshUpload}
//               title="Reset upload"
//             >
//               <MdOutlineRefresh />
//             </button>
//           )}

//           <div className="upload-icon-container">
//             {status === 'uploading' ? (
//               <div className="upload-spinner"></div>
//             ) : status === 'success' ? (
//               <FaCheck className="upload-icon success" />
//             ) : status === 'error' ? (
//               <FaExclamationTriangle className="upload-icon error" />
//             ) : (
//               <img
//                 src={SearchingGif}
//                 className="upload-gif"
//                 alt="Searching documents"
//               />
//             )}
//           </div>

//           <p className="upload-instruction">
//             {status === 'uploading'
//               ? 'Processing your documents...'
//               : status === 'success'
//                 ? 'Documents processed successfully!'
//                 : status === 'error'
//                   ? 'Document processing failed'
//                   : 'Drag and drop your documents here'}
//           </p>

//           <span className="upload-divider">— OR —</span>
//           <button
//             className={`browse-btn ${status === 'uploading' ? 'disabled' : ''}`}
//             onClick={pickFile}
//             disabled={status === 'uploading'}
//           >
//             Browse Files
//           </button>

//           <div className={`privacy-checkbox-inside ${highlight ? 'highlight' : ''}`}>
//             <input
//               type="checkbox"
//               id="privacy-checkbox"
//               checked={privacyChecked}
//               onChange={() => setPrivacyChecked(!privacyChecked)}
//             />
//             <label htmlFor="privacy-checkbox">
//               I agree to the{' '}
//               <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
//                 Privacy Policy
//               </a>
//             </label>
//           </div>

//           <input
//             type="file"
//             accept=".pdf"
//             ref={ref}
//             onChange={onChange}
//             style={{ display: 'none' }}
//             disabled={status === 'uploading'}
//           />

//           {files.length > 0 && (
//             <div className="file-list-container">
//               <div className="file-list-header">
//                 <span>Selected files ({files.length})</span>
//                 <button
//                   onClick={clearAllFiles}
//                   className="clear-all-btn"
//                   title="Clear all files"
//                   disabled={status === 'uploading'}
//                 >
//                   <MdClearAll />
//                   <span>Clear All</span>
//                 </button>
//               </div>
//               <div className="file-list">
//                 {files.map((f, i) => (
//                   <div
//                     className={`file-entry ${status === 'uploading' ? 'disabled' : ''}`}
//                     key={i}
//                     onMouseEnter={() => setHoveredFile(f.name)}
//                     onMouseLeave={() => setHoveredFile(null)}
//                   >
//                     <FaRegFileAlt className="item-icon" />
//                     <span className="item-name">{f.name}</span>
//                     <span className="file-size">{(f.size / 1024 / 1024).toFixed(2)} MB</span>
//                     {(hoveredFile === f.name || files.length === 1) && (
//                       <button
//                         className="delete-btn"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           removeFile(f.name);
//                         }}
//                         title="Remove file"
//                         disabled={status === 'uploading'}
//                       >
//                         <FaTimes />
//                       </button>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {files.length > 0 && (
//             <button
//               className={`upload-submit-btn ${status}`}
//               onClick={handleSubmit}
//               disabled={status === 'uploading'}
//             >
//               {status === 'uploading' ? (
//                 <>
//                   <div className="btn-spinner"></div>
//                   Uploading...
//                 </>
//               ) : (
//                 `Upload ${files.length > 1 ? 'Files' : 'File'}`
//               )}
//             </button>
//           )}
//         </div>

//         {notification && (
//           <div className={`notification ${notification.type} ${notification ? 'show' : ''}`}>
//             <div className="notification-icon">
//               {notification.type === 'success' && <FaCheck />}
//               {notification.type === 'error' && <FaTimes />}
//               {notification.type === 'warning' && <FaExclamationTriangle />}
//               {notification.type === 'info' && <FaRegFileAlt />}
//             </div>
//             <div className="notification-content">
//               <p>{notification.message}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Upload;

import React, { useRef, useState, useCallback } from 'react';
import { FaRegFileAlt, FaTimes, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import { MdOutlineRefresh, MdClearAll } from 'react-icons/md';
import '../../../common/style/country.css';
import SearchingGif from '../../../assets/gif/searching.gif';

const Upload = ({ country, stayDays }) => {
  const ref = useRef(null);
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState('idle');
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const [hoveredFile, setHoveredFile] = useState(null);
  const [notification, setNotification] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 40000);
  };

  const pickFile = () => {
    if (!privacyChecked) {
      setHighlight(true);
      showNotification('error', 'Please agree to the Privacy Policy');
      setTimeout(() => setHighlight(false), 1000);
      return;
    }
    ref.current.click();
  };

  const validateFile = (file) => {
    if (file.type !== 'application/pdf') {
      showNotification('error', 'Only PDF files are allowed');
      return false;
    }

    if (file.size > 10 * 1024 * 1024) {
      showNotification('error', 'File size exceeds 10MB limit');
      return false;
    }

    const isDuplicate = files.some((f) => f.name === file.name && f.size === file.size);
    if (isDuplicate) {
      showNotification('warning', 'This file has already been added');
      return false;
    }

    return true;
  };

  const addFiles = useCallback((newFiles) => {
    setStatus('idle');
    const validFiles = Array.from(newFiles).filter(validateFile);

    if (validFiles.length > 0) {
      setFiles((prev) => [...prev, ...validFiles]);
      showNotification('success', 'File(s) added successfully');
    }
  }, [files]);

  const onChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;
    addFiles(e.target.files);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!privacyChecked) return;
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (!privacyChecked) {
      setHighlight(true);
      showNotification('error', 'Please agree to the Privacy Policy');
      setTimeout(() => setHighlight(false), 1000);
      return;
    }

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addFiles(e.dataTransfer.files);
    }
  };

  const removeFile = (name) => {
    setFiles((prev) => prev.filter((f) => f.name !== name));
    showNotification('info', 'File removed');
  };

  const clearAllFiles = () => {
    setFiles([]);
    showNotification('info', 'All files cleared');
  };

  const refreshUpload = () => {
    setStatus('idle');
    setFiles([]);
    showNotification('info', 'Upload reset');
  };
  
  
const handleSubmit = async () => {
  if (!privacyChecked) {
    setHighlight(true);
    showNotification('error', 'Please agree to the Privacy Policy');
    setTimeout(() => setHighlight(false), 800);
    return;
  }
  if (files.length === 0) {
    showNotification('error', 'Please add at least one file');
    return;
  }

  setStatus('uploading');
  showNotification('info', 'Uploading files...');

  try {
    const apiBase = import.meta.env.VITE_API_URL;
    const formData = new FormData();
    files.forEach((f) => formData.append('file', f));
    formData.append('country', country);
    formData.append('stayDays', stayDays);

    const res = await fetch(`${apiBase}/statements/evaluate/pdf`, {
      method: 'POST',
      body: formData,
    });

    const responseData = await res.json();

    // First check for insufficient funds error
    if (responseData.message && responseData.message.includes('Ortalama gündəlik kredit ölkə üçün tələb olunan minimumdan azdır')) {
      const numberPattern = /(\d+\.?\d*)/g;
      const numbers = responseData.message.match(numberPattern);
      
      let requiredAmount = 'unknown';
      let yourAmount = 'unknown';
      
      if (numbers && numbers.length >= 2) {
        requiredAmount = numbers[0];
        yourAmount = numbers[1];
      }
      
      setStatus('error');
      showNotification('error', 
        `Average daily expense is below the required minimum. Required: ${requiredAmount} AZN, Yours: ${yourAmount} AZN`
      );
      return;
    }

    // Then check for other errors
    if (!res.ok) {
      setStatus('error');
      showNotification('error', responseData.message || 'Upload failed. Please try again.');
      return;
    }

    // Only show success if everything is okay
    setStatus('success');
    showNotification('success', responseData.message || 'Upload successful!');
    setFiles([]);
  } catch (error) {
    console.error('Upload error:', error);
    setStatus('error');
    showNotification('error', error.message || 'Upload failed. Please try again.');
  }
};

  return (
    <div className="Upload-Group">
      <div className="upload-container">
        <h2 className="upload-title">Document Scan</h2>

        <div
          className={`upload-box ${status} ${isDragging ? 'dragging' : ''}`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {(status === 'success' || status === 'error') && (
            <button
              className="refresh-upload-btn"
              onClick={refreshUpload}
              title="Reset upload"
            >
              <MdOutlineRefresh />
            </button>
          )}

          <div className="upload-icon-container">
            {status === 'uploading' ? (
              <div className="upload-spinner"></div>
            ) : status === 'success' ? (
              <FaCheck className="upload-icon success" />
            ) : status === 'error' ? (
              <FaExclamationTriangle className="upload-icon error" />
            ) : isDragging ? (
              <div className="upload-drop-hint">Drop files here</div>
            ) : (
              <img
                src={SearchingGif}
                className="upload-gif"
                alt="Searching documents"
              />
            )}
          </div>



          <p className="upload-instruction">
            {status === 'uploading'
              ? 'Processing your documents...'
              : status === 'success'
                ? 'Documents processed successfully!'
                : status === 'error'
                  ? 'Document processing failed'
                  : isDragging
                    ? 'Drop your PDF files here'
                    : 'Drag and drop your documents here'}
          </p>

          <span className="upload-divider">— OR —</span>
          <button
            className={`browse-btn ${status === 'uploading' ? 'disabled' : ''}`}
            onClick={pickFile}
            disabled={status === 'uploading'}
          >
            Browse Files
          </button>

          <div className={`privacy-checkbox-inside ${highlight ? 'highlight' : ''}`}>
            <input
              type="checkbox"
              id="privacy-checkbox"
              checked={privacyChecked}
              onChange={() => setPrivacyChecked(!privacyChecked)}
            />
            <label htmlFor="privacy-checkbox">
              I agree to the{' '}
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </label>
          </div>

          <input
            type="file"
            accept=".pdf"
            ref={ref}
            onChange={onChange}
            style={{ display: 'none' }}
            disabled={status === 'uploading'}
          />

          {files.length > 0 && (
            <div className="file-list-container">
              <div className="file-list-header">
                <span>Selected files ({files.length})</span>
                <button
                  onClick={clearAllFiles}
                  className="clear-all-btn"
                  title="Clear all files"
                  disabled={status === 'uploading'}
                >
                  <MdClearAll />
                  <span>Clear All</span>
                </button>
              </div>
              <div className="file-list">
                {files.map((f, i) => (
                  <div
                    className={`file-entry ${status === 'uploading' ? 'disabled' : ''}`}
                    key={i}
                    onMouseEnter={() => setHoveredFile(f.name)}
                    onMouseLeave={() => setHoveredFile(null)}
                  >
                    <FaRegFileAlt className="item-icon" />
                    <span className="item-name">{f.name}</span>
                    <span className="file-size">{(f.size / 1024 / 1024).toFixed(2)} MB</span>
                    {(hoveredFile === f.name || files.length === 1) && (
                      <button
                        className="delete-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile(f.name);
                        }}
                        title="Remove file"
                        disabled={status === 'uploading'}
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {files.length > 0 && (
            <button
              className={`upload-submit-btn ${status}`}
              onClick={handleSubmit}
              disabled={status === 'uploading'}
            >
              {status === 'uploading' ? (
                <>
                  <div className="btn-spinner"></div>
                  Uploading...
                </>
              ) : (
                `Upload ${files.length > 1 ? 'Files' : 'File'}`
              )}
            </button>
          )}
        </div>

        {notification && (
          <div className={`notification ${notification.type} ${notification ? 'show' : ''}`}>
            <div className="notification-icon">
              {notification.type === 'success' && <FaCheck />}
              {notification.type === 'error' && <FaTimes />}
              {notification.type === 'warning' && <FaExclamationTriangle />}
              {notification.type === 'info' && <FaRegFileAlt />}
            </div>
            <div className="notification-content">
              <p>{notification.message}</p>
            </div>
            <button
              className="notification-close-btn"
              onClick={() => setNotification(null)}
              title="Close notification"
            >
              <FaTimes />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;