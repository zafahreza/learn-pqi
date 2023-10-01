import React, { useState, useEffect } from 'react';

export default function InputFileHafalan() {

    const [files, setFiles] = useState([]);
    const [teks, setTeks] = useState("Anda tidak mengunggah tugas");
    const [isSubmited, setIsSubmited] = useState(false);
    const [sent, setSent] = useState("");

    const handleSent = (x) => {
        if (x === "hidden"){
            const newSent = x;
            setSent(newSent);
        }else{
            const newSent  = "";
            setSent(newSent);
        }
    }

    const handleFileChange = (e) => {
      const newFiles = [...files, ...e.target.files];
      setFiles(newFiles);
    };
  
    useEffect(() => {
        if (isSubmited) {
            if (files.length === 0){
                const newTeks = "Anda tidak mengunggah tugas"
                setTeks(newTeks);
            } else{
                const newTeks = ""
                setTeks(newTeks);
            }
        }else{
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
        setIsSubmited(false);
        document.getElementById("sendTaskPopup").classList.add("hidden");
        document.getElementById("SendButton").innerHTML = "Tandai Selesai";
        document.getElementById("LabelPengumpulanTugas").classList.remove("hidden");
        document.getElementById("sendTaskTitle").innerHTML = "Kirim Tugas?";
        document.getElementById("sendTaskSubtitle").innerHTML = "Tugas yang sudah selesai akan dikumpulkan.";
        document.getElementById("sendButton").innerHTML = "Kirim";
        document.getElementById("SelesaiText").classList.add("hidden");
        handleSent("");
    }

    const handleSubmitted = () => {
        setIsSubmited(true);
        document.getElementById("sendTaskPopup").classList.add("hidden");
        document.getElementById("SendButton").innerHTML = "Batal Kirim";
        document.getElementById("LabelPengumpulanTugas").classList.add("hidden");
        document.getElementById("sendTaskTitle").innerHTML = "Batal Kirim?";
        document.getElementById("sendTaskSubtitle").innerHTML = "Batal untuk mengubah<br/>pengunggahan. Kirim kembali<br/>setelah selesai mengubah<br/>pengunggahan.";
        document.getElementById("sendButton").innerHTML = "Ya";
        document.getElementById("SelesaiText").classList.remove("hidden");
        handleSent("hidden");
    }

    return (
        <div className='min-w-[395px] border-[1px] rounded-[15px] border-black border-opacity-50 p-6 flex flex-col gap-[25px]'>
            <div className='flex justify-between'>
                <p className='font-[400] text-xl'>Kumpulkan Tugas</p>
                <p id='SelesaiText' className='font-[600] text-[20px] text-[#0078CE] hidden'>Selesai</p>
            </div>
            <p className='text-center'>{teks}</p>
                {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between gap-2 pt-5 pb-5 pl-5 pr-5 border-[1px] border-black border-opacity-40 rounded-[10px]">
                    <div className='flex gap-5'>
                        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_70_1129)">
                            <path d="M0.5 5.9375C0.5 4.73 1.48 3.75 2.6875 3.75H28.3125C29.52 3.75 30.5 4.73 30.5 5.9375V24.0625C30.5 24.6427 30.2695 25.1991 29.8593 25.6093C29.4491 26.0195 28.8927 26.25 28.3125 26.25H2.6875C2.10734 26.25 1.55094 26.0195 1.1407 25.6093C0.730468 25.1991 0.5 24.6427 0.5 24.0625L0.5 5.9375ZM2.6875 5.625C2.60462 5.625 2.52513 5.65792 2.46653 5.71653C2.40792 5.77513 2.375 5.85462 2.375 5.9375V24.0625C2.375 24.235 2.515 24.375 2.6875 24.375H28.3125C28.3954 24.375 28.4749 24.3421 28.5335 24.2835C28.5921 24.2249 28.625 24.1454 28.625 24.0625V5.9375C28.625 5.85462 28.5921 5.77513 28.5335 5.71653C28.4749 5.65792 28.3954 5.625 28.3125 5.625H2.6875Z" fill="black"/>
                            <path d="M11.75 19.48V10.52C11.7502 10.4079 11.7805 10.2979 11.8378 10.2015C11.8951 10.1052 11.9773 10.026 12.0757 9.97231C12.1741 9.91863 12.2852 9.89241 12.3972 9.89639C12.5092 9.90038 12.6181 9.93442 12.7125 9.99496L19.6825 14.4737C19.7708 14.5303 19.8434 14.6081 19.8937 14.7C19.944 14.792 19.9703 14.8951 19.9703 15C19.9703 15.1048 19.944 15.2079 19.8937 15.2999C19.8434 15.3918 19.7708 15.4697 19.6825 15.5262L12.7125 20.0062C12.6181 20.0667 12.5092 20.1008 12.3972 20.1048C12.2852 20.1088 12.1741 20.0825 12.0757 20.0289C11.9773 19.9752 11.8951 19.896 11.8378 19.7997C11.7805 19.7033 11.7502 19.5933 11.75 19.4812V19.48Z" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_70_1129">
                            <rect width="30" height="30" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <span>{file.name}</span>
                    </div>
                    <button
                        onClick={() => handleRemoveFile(index)}
                        className={sent}
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
                <label id='LabelPengumpulanTugas' for="PengumpulanTugas" className='LabelPengumpulanTugas flex'>Tambahkan File +</label>
                <button type='button' id='SendButton' className='w-full h-11 bg-[#00438F] rounded-[10px] text-[white] font-[500] text-[16px]' onClick={handleSubmit}>Tandai Selesai</button>
                <div id='sendTaskPopup' className='fixed w-screen h-screen z-[99999] bg-[#C1E3FB] left-0 top-0 bg-opacity-60 flex justify-center items-center hidden'>
                    <div className='absolute w-[319px] rounded-[10px] bg-white px-5 py-6 flex flex-col gap-[15px]'>
                        <p id='sendTaskTitle' className='font-[600] text-[24px] text-[#090A0A] text-center'>Kirim Tugas?</p>
                        <p id='sendTaskSubtitle' className='font-[400] text-[16px] text-[#090A0A] text-center opacity-60'>Tugas yang sudah selesai akan<br/> dikumpulkan</p>
                        <button id='sendButton' className='w-full h-[43px] bg-[#00348F] rounded-[10px] font-[700] text-[18px] text-white' onClick={HandleSubmit}>Kirim</button>
                        <button className='w-full h-[43px] bg-white rounded-[10px] font-[700] text-[18px] text-black border-[1px] border-[#00438F]' onClick={handleClose}>Batal</button>
                    </div>
                </div>
        </div>
    )
}
