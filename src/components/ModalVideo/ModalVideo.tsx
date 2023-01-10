import React, { useState } from "react";

interface Props {
  setIsModalActive: (val: boolean) => void;
}

const ModalVideo: React.FC<Props> = ({ setIsModalActive }) => {
  return (
    <>
      <div className="fixed inset-0 z-[100] h-screen w-screen bg-[rgba(0,0,0,0.8)]">
        <button aria-label="Close Modal" className="absolute top-6 right-12 text-2xl text-white" onClick={() => setIsModalActive(false)}>
          ✕
        </button>
        <div className="flex h-full w-full items-center justify-center">
          <div className="aspect-video w-[90%] xl:w-1/2">
            <iframe className="h-full w-full" src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalVideo;
