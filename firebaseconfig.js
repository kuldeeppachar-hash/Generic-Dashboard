// ===== GENERIC DASHBOARD FIREBASE CONFIG =====

const firebaseConfig = {
  apiKey: "AIzaSyCpleadoQKQStNOjk-Tq9Yqy6uGLVpdKi8",
  authDomain: "generic-dashboard-b0355.firebaseapp.com",
  databaseURL: "https://generic-dashboard-b0355-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "generic-dashboard-b0355",
  storageBucket: "generic-dashboard-b0355.firebasestorage.app",
  messagingSenderId: "180109315889",
  appId: "1:180109315889:web:9d91bc775c06ace2a7ea10",
  measurementId: "G-4LM4R78GRN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const auth = firebase.auth();

console.log("✓ Generic Dashboard Firebase Connected");