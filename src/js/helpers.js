import { TIMEOUT_SEC } from './confing';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};


export const AJAX = async (URL, uploadedData = null)=>{
  try {
    const fetchDataPromise = uploadedData ? fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadedData),
    }) : fetch(URL);
    const response = await Promise.race([fetchDataPromise, timeout(TIMEOUT_SEC)]);
    const data = await response.json();
    if (!response.ok) throw new Error();
    return data;
  } catch (err) {
    throw err;
  }
}
