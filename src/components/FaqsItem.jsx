import React from 'react';

function FaqsItem({ question }) {
  return (
    <details className="flex overflow-hidden flex-col justify-end mt-5 w-full rounded-xl border border-solid border-cyan-950 max-md:max-w-full">
      <summary className="flex flex-wrap gap-10 justify-between items-center px-2.5 py-4 bg-white rounded-xl max-md:max-w-full cursor-pointer">
        <span className="self-stretch my-auto">{question}</span>
        <img loading="lazy" src="\Icons\gridicons_dropdown.svg" alt="" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
      </summary>
      <div className="flex shrink-0 gap-2.5 py-4 h-0 bg-white rounded-none max-md:max-w-full" />
    </details>
  );
}

export default FaqsItem;