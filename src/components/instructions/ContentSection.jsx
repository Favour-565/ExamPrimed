import React from 'react';

function ContentSection({ content }) {
  return (
    <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="grow gap-2.5 self-stretch py-2.5 text-base text-black w-[500px] max-md:mt-10 max-md:max-w-full">
        {content}
      </div>
    </section>
  );
}

export default ContentSection;