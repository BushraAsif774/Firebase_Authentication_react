
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBbIpuIl7ryx1uqKNJNb3UPUX7KaFOi6sc",
  authDomain: "auth-dev-938fa.firebaseapp.com",
  projectId: "auth-dev-938fa",
  storageBucket: "auth-dev-938fa.appspot.com",
  messagingSenderId: "375791694940",
  appId: "1:375791694940:web:d90807c4a370fa6e7ae299"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth= getAuth(app);

export default app;