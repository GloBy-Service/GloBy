// import React, { useState } from "react";
// import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf";
// import worker from "pdfjs-dist/legacy/build/pdf.worker.min?url";

// // Set worker path
// GlobalWorkerOptions.workerSrc = worker;

// const Upload = () => {
//   const [extractedData, setExtractedData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleFileUpload = async (event) => {
//     const file = event.target.files[0];
    
//     // Reset states
//     setError(null);
//     setExtractedData(null);
    
//     if (!file) {
//       setError("Please select a PDF file");
//       return;
//     }
    
//     if (file.type !== "application/pdf") {
//       setError("Invalid file type. Please upload a PDF file");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       // Read file as array buffer
//       const arrayBuffer = await file.arrayBuffer();
      
//       // Load PDF document
//       const pdf = await getDocument({
//         data: arrayBuffer,
//         cMapUrl: "node_modules/pdfjs-dist/cmaps/",
//         cMapPacked: true,
//       }).promise;

//       // Extract text from all pages
//       let fullText = "";
//       for (let i = 1; i <= pdf.numPages; i++) {
//         const page = await pdf.getPage(i);
//         const textContent = await page.getTextContent();
//         fullText += textContent.items.map(item => item.str).join(" ");
//       }

//       // Process extracted text
//       const result = processBankData(fullText);
//       setExtractedData(result);

//     } catch (err) {
//       console.error("PDF Processing Error:", err);
//       setError(err.message || "Failed to process PDF. The file may be corrupted or password protected.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const processBankData = (text) => {
//     const fieldPatterns = {
//       cardHolder: /Kart Sahibi[\s:]+([^\n]+)/i,
//       cardType: /Kartın Növü[\s:]+([^\n]+)/i,
//       cardNumber: /Kartın nömrəsi[\s:]+([^\n]+)/i,
//       accountNumber: /Hesab nömrəsi[\s:]+([^\n]+)/i,
//       accountCurrency: /Hesabın valyutası[\s:]+([^\n]+)/i,
//       accountHolder: /Hesab sahibi[\s:]+([^\n]+)/i,
//       statementPeriod: /Çıxarışın dövrü[\s:]+([^\n]+)/i,
//       creditLimit: /Kredit xəttinin limiti[\s:]+([^\n]+)/i,
//       currentBalance: /Cari balans[\s:]+([^\n]+)/i,
//       startingBalance: /Dövrün əvvəlinə balans[\s:]+([^\n]+)/i,
//       totalDeposits: /Dövr üzrə mədaxil məbləği[\s:]+([^\n]+)/i,
//       totalWithdrawals: /Dövr üzrə məxaric məbləği[\s:]+([^\n]+)/i,
//       endingBalance: /Dövrün sonuna balans[\s:]+([^\n]+)/i,
//       blockedDeposits: /Bloklanmış mədaxil məbləği[\s:]+([^\n]+)/i,
//       blockedWithdrawals: /Bloklanmış məxaric məbləği[\s:]+([^\n]+)/i
//     };

//     const result = {};
    
//     for (const [field, pattern] of Object.entries(fieldPatterns)) {
//       const match = text.match(pattern);
//       result[field] = match ? match[1].trim() : null;
//     }

//     return result;
//   };

//   return (
//     <div style={{ 
//       maxWidth: "800px",
//       margin: "0 auto",
//       padding: "20px",
//       fontFamily: "Arial, sans-serif"
//     }}>
//       <h2>Bank Statement Parser</h2>
      
//       <input
//         type="file"
//         accept="application/pdf"
//         onChange={handleFileUpload}
//         disabled={isLoading}
//         style={{
//           padding: "10px",
//           margin: "15px 0",
//           border: "1px solid #ddd",
//           borderRadius: "4px",
//           width: "100%"
//         }}
//       />
      
//       {isLoading && <div style={{ color: "#666", margin: "10px 0" }}>Processing PDF...</div>}
      
//       {error && (
//         <div style={{ 
//           color: "#d32f2f",
//           backgroundColor: "#fde8e8",
//           padding: "10px",
//           borderRadius: "4px",
//           margin: "10px 0"
//         }}>
//           Error: {error}
//         </div>
//       )}
      
//       {extractedData && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>Extracted Bank Data:</h3>
//           <pre style={{
//             backgroundColor: "#f5f5f5",
//             padding: "15px",
//             borderRadius: "8px",
//             overflowX: "auto",
//             whiteSpace: "pre-wrap"
//           }}>
//             {JSON.stringify(extractedData, null, 2)}
//           </pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Upload;
import React, { useState } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf";
import worker from "pdfjs-dist/legacy/build/pdf.worker.min?url";

GlobalWorkerOptions.workerSrc = worker;

const BankStatementParser = () => {
  const [bankData, setBankData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const extractTableData = (text) => {
    const result = {};
    
    // First section (Kart Melumatları)
    const cardSection = text.match(/Kart Melumatları([\s\S]+?)(?=#|$)/i);
    if (cardSection) {
      const cardFields = cardSection[1].split('\n').filter(line => line.includes('|'));
      
      cardFields.forEach(line => {
        const parts = line.split('|').map(part => part.trim()).filter(part => part);
        if (parts.length === 2) {
          const key = parts[0].replace(/\s+/g, ' ').trim();
          const value = parts[1].replace(/\s+/g, ' ').trim();
          
          // Map to your desired field names
          if (key === 'Kart Sahibi') result['Kart Sahibi'] = value;
          if (key === 'Kartın Növü') result['Kartın Növü'] = value;
          if (key === 'Kartın nömresi') result['Kartın nömrəsi'] = value;
          if (key === 'Hesab nömresi') result['Hesab nömrəsi'] = value;
          if (key === 'Hesabın valyutası') result['Hesabın valyutası'] = value;
          if (key === 'Hesab sahibi') result['Hesab sahibi'] = value;
        }
      });
    }

    // Second section (Kart hesabından çıkarış)
    const transactionSection = text.match(/Kart hesabından çıkarış([\s\S]+?)(?=#|$)/i);
    if (transactionSection) {
      const transactionFields = transactionSection[1].split('\n').filter(line => line.includes('|'));
      
      transactionFields.forEach(line => {
        const parts = line.split('|').map(part => part.trim()).filter(part => part);
        if (parts.length === 2) {
          const key = parts[0].replace(/\s+/g, ' ').trim();
          const value = parts[1].replace(/\s+/g, ' ').trim();
          
          // Map to your desired field names
          if (key === 'Çıkarışın dövrü') result['Çıxarışın dövrü'] = value;
          if (key === 'Kredit xettinin limiti') result['Kredit xəttinin limiti'] = value;
          if (key === 'Cari balans') result['Cari balans'] = value;
          if (key === 'Dövrün avveline balans') result['Dövrün əvvəlinə balans'] = value;
          if (key === 'Dövr üzre medaxil mebleği') result['Dövr üzrə mədaxil məbləği'] = value;
          if (key === 'Dövr üzre mexaric mebleği') result['Dövr üzrə məxaric məbləği'] = value;
          if (key === 'Dövrün sonuna balans') result['Dövrün sonuna balans'] = value;
          if (key === 'Bloklanmış medaxil mebleği') result['Bloklanmış mədaxil məbləği'] = value;
          if (key === 'Bloklanmış mexaric mebleği') result['Bloklanmış məxaric məbləği'] = value;
        }
      });
    }

    return result;
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    
    setError(null);
    setBankData(null);
    
    if (!file) {
      setError("Please select a PDF file");
      return;
    }
    
    if (file.type !== "application/pdf") {
      setError("Invalid file type. Please upload a PDF file");
      return;
    }

    setIsLoading(true);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await getDocument({
        data: arrayBuffer,
        cMapUrl: "node_modules/pdfjs-dist/cmaps/",
        cMapPacked: true,
      }).promise;

      let fullText = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        fullText += textContent.items.map(item => item.str).join(" ") + "\n";
      }

      const extractedData = extractTableData(fullText);
      setBankData(extractedData);

    } catch (err) {
      console.error("Error:", err);
      setError("Failed to process PDF. Please try another file.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h2>Bank Statement Parser</h2>
      
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileUpload}
        disabled={isLoading}
        style={{
          padding: "10px",
          margin: "15px 0",
          border: "1px solid #ddd",
          borderRadius: "4px",
          width: "100%"
        }}
      />
      
      {isLoading && <div style={{ color: "#666", margin: "10px 0" }}>Processing PDF...</div>}
      
      {error && (
        <div style={{ 
          color: "#d32f2f",
          backgroundColor: "#fde8e8",
          padding: "10px",
          borderRadius: "4px",
          margin: "10px 0"
        }}>
          Error: {error}
        </div>
      )}
      
      {bankData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Extracted Data:</h3>
          <pre style={{
            backgroundColor: "#f5f5f5",
            padding: "15px",
            borderRadius: "8px",
            overflowX: "auto"
          }}>
            {JSON.stringify(bankData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default BankStatementParser;