// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";

import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";
// import { getStorage, ref, getDownloadURL, uploadBytes } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js";

const XLSX = require('xlsx'); //Usado para salvar o arquivo em forma de buffer


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


export default function upload_file () {

    const firebaseConfig = {
        apiKey: "AIzaSyD2jmB43zoMeujyDmbM70mZtqIzMOlcdQk",
        authDomain: "bi-evopass.firebaseapp.com",
        projectId: "bi-evopass",
        storageBucket: "bi-evopass.appspot.com",
        messagingSenderId: "1011331879233",
        appId: "1:1011331879233:web:ba8afe34a4f5e2bc97d1c0",
        measurementId: "G-YSNGSQCKXB"
    };
      
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
      
      
      
   

        
    // Agora você pode manipular o conteúdo do arquivo .xlsx na variável 'buffer'
    // console.log(buffer);
    // Initialize Cloud Storage and get a reference to the service
    const storage = getStorage(app);
    
    
    
    const file_ref = ref(storage, 'foto_perfil/teste');
    
    
    // // 'file' comes from the Blob or File API
    // uploadBytes(file_ref, file).then((snapshot) => {
    //     console.log('Uploaded a blob or file!');
    // });


}










