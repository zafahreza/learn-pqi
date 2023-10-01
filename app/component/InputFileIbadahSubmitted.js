import React, { useState, useEffect } from 'react';

export default function InputFileIbadahSubmitted() {

    const [files, setFiles] = useState([]);
    const [teks, setTeks] = useState("Anda tidak mengunggah tugas");


    const handleFileChange = (e) => {
      const newFiles = [...files, ...e.target.files];
      setFiles(newFiles);
    };
  
    useEffect(() => {
        if (files.length === 0){
            const newTeks = "Anda tidak mengunggah tugas"
            setTeks(newTeks);
        } else{
            const newTeks = ""
            setTeks(newTeks);
        }
      });

    const handleRemoveFile = (index) => {
      const newFiles = [...files];
      newFiles.splice(index, 1);
      setFiles(newFiles);
    };

    const handleSubmit = () => {
        document.getElementById("sendTaskPopup").classList.remove("hidden");
    }

    const handleClose = () => {
        document.getElementById("sendTaskPopup").classList.add("hidden");
    }

    const HandleSubmit = () => {
        if(document.getElementById("sendButton").innerHTML === "Ya"){
            HandleSubmitted();
        } else if(document.getElementById("sendButton").innerHTML === "Kirim"){
            handleSubmitted();
        }
    }

    const HandleSubmitted = () => {
        document.getElementById("sendTaskPopup").classList.add("hidden");
        document.getElementById("SendButton").innerHTML = "Tandai Selesai";
        document.getElementById("LabelPengumpulanTugas").classList.remove("hidden");
        document.getElementById("sendTaskTitle").innerHTML = "Kirim Tugas?";
        document.getElementById("sendTaskSubtitle").innerHTML = "Tugas yang sudah selesai akan dikumpulkan.";
        document.getElementById("sendButton").innerHTML = "Kirim";
        document.getElementById("SelesaiText").classList.add("hidden");
        document.getElementById("removeFileButton").classList.remove("hidden");
    }

    const handleSubmitted = () => {
        document.getElementById("sendTaskPopup").classList.add("hidden");
        document.getElementById("SendButton").innerHTML = "Batal Kirim";
        document.getElementById("LabelPengumpulanTugas").classList.add("hidden");
        document.getElementById("sendTaskTitle").innerHTML = "Batal Kirim?";
        document.getElementById("sendTaskSubtitle").innerHTML = "Batal untuk mengubah<br/>pengunggahan. Kirim kembali<br/>setelah selesai mengubah<br/>pengunggahan.";
        document.getElementById("sendButton").innerHTML = "Ya";
        document.getElementById("SelesaiText").classList.remove("hidden");
        document.getElementById("removeFileButton").classList.add("hidden");
    }

    return (
        <div className='min-w-[395px] border-[1px] rounded-[15px] border-black border-opacity-50 p-6 flex flex-col gap-[25px]'>
            <div className='flex justify-between'>
                <p className='font-[400] text-xl'>Kumpulkan Tugas</p>
                <p id='SelesaiText' className='font-[600] text-[20px] text-[#0078CE]'>Selesai</p>
            </div>
                <p className='align-center'>{teks}</p>
                {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between gap-2 pt-5 pb-5 pl-5 pr-5 border-[1px] border-black border-opacity-40 rounded-[10px]">
                    <div className='flex gap-5'>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                            <path stroke="black" stroke-linejoin="round" stroke-width="2" d="M6 1v4a1 1 0 0 1-1 1H1m14-4v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z"/>
                        </svg>
                        <span>{file.name}</span>
                    </div>
                    <button
                        onClick={() => handleRemoveFile(index)}
                        className="text-red-500"
                        id='removeFileButton'
                        >
                        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.0625 21.5625L8.9375 8.4375M22.0625 8.4375L8.9375 21.5625" stroke="black" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                ))}
                <input
                    type="file"
                    onChange={handleFileChange}
                    multiple
                    accept="image/*"
                    id='PengumpulanTugas'
                    hidden
                    />
                <label id='LabelPengumpulanTugas' for="PengumpulanTugas" className='LabelPengumpulanTugas flex hidden'>Tambahkan File +</label>
                <button type='button' id='SendButton' className='w-full h-11 bg-[#00438F] rounded-[10px] text-[white] font-[500] text-[16px]' onClick={handleSubmit}>Batal Kirim</button>
                <div id='sendTaskPopup' className='fixed w-screen h-screen z-[99999] bg-[#C1E3FB] left-0 top-0 bg-opacity-60 flex justify-center items-center hidden'>
                    <div className='absolute w-[319px] rounded-[10px] bg-white px-5 py-6 flex flex-col gap-[15px]'>
                        <p id='sendTaskTitle' className='font-[600] text-[24px] text-[#090A0A] text-center'>Batal Kirim?</p>
                        <p id='sendTaskSubtitle' className='font-[400] text-[16px] text-[#090A0A] text-center opacity-60'>Batal untuk mengubah<br/>pengunggahan. Kirim kembali<br/>setelah selesai mengubah<br/>pengunggahan.</p>
                        <button id='sendButton' className='w-full h-[43px] bg-[#00348F] rounded-[10px] font-[700] text-[18px] text-white' onClick={HandleSubmit}>Ya</button>
                        <button className='w-full h-[43px] bg-white rounded-[10px] font-[700] text-[18px] text-black border-[1px] border-[#00438F]' onClick={handleClose}>Batal</button>
                    </div>
                </div>
        </div>
    )
}
