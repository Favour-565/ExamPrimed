import React from 'react';

function ContentSection({ content }) {
  return (
    <section className="flex-grow basis-[calc(50%-1rem)] min-w-[280px]">
      <div className="prose prose-sm text-black">
        {content}
      </div>
    </section>
  );
}

export default ContentSection;