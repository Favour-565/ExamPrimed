import React from 'react';

function ImageCard({ letter, text, imageSrc }) {
  return (
    <div className="flex relative flex-col flex-auto gap-5 justify-between px-14 py-1 rounded-none aspect-[6.84] w-[342px] max-md:px-5">
      <img loading="lazy" src={imageSrc} alt={`Background for ${letter}`} className="object-cover absolute inset-0 size-full" />
      <div className="relative gap-2.5 self-stretch my-auto text-3xl rounded-xl text-zinc-50">
        {letter}
      </div>
      <div className="relative gap-2.5 self-stretch p-2.5 text-xl rounded-xl text-neutral-900">
        {text}
      </div>
    </div>
  );
}

export default ImageCard;