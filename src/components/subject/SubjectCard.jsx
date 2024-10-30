/* eslint-disable react/prop-types */

function SubjectCard({ subject, onClick }) {
  if (!subject) {
    return null; // Or some fallback UI
  }

  return (
    <button
      onClick={() => onClick && onClick(subject)}
      className="relative aspect-[1.6] w-full max-w-[320px] transform overflow-hidden rounded-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-700"
    >
      <img
        loading="lazy"
        src={subject?.image}
        alt={`${subject?.name} background`}
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          e.target.src = "/images/subject-placeholder.png";
          e.target.className =
            "absolute inset-0 w-full h-full object-cover opacity-50";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
          <span className="text-base font-bold uppercase text-white sm:text-lg">
            {subject?.title || subject?.name}
          </span>
        </div>
      </div>
    </button>
  );
}

export default SubjectCard;
