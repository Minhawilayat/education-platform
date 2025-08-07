import { useState, useEffect } from 'react';
import { db, storage } from '../Services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const TestFirebase = () => {
  const [status, setStatus] = useState('Testing Firebase connection...');
  const [testResult, setTestResult] = useState('');

  useEffect(() => {
    testFirebaseConnection();
  }, []);

  const testFirebaseConnection = async () => {
    try {
      // Test Firestore
      const docRef = await addDoc(collection(db, 'test'), {
        message: 'Test message',
        timestamp: serverTimestamp()
      });
      console.log('Document written with ID: ', docRef.id);
      
      // Test Storage
      const storageRef = ref(storage, 'test/test.txt');
      const testFile = new Blob(['This is a test file'], { type: 'text/plain' });
      await uploadBytes(storageRef, testFile);
      const downloadURL = await getDownloadURL(storageRef);
      console.log('File available at', downloadURL);
      
      setStatus('Firebase connection successful!');
      setTestResult('Both Firestore and Storage are working correctly.');
    } catch (error) {
      console.error('Firebase connection error:', error);
      setStatus('Firebase connection failed!');
      setTestResult(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Firebase Connection Test</h2>
        <div className="text-center">
          <p className={`text-lg font-medium ${status.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            {testResult}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestFirebase;