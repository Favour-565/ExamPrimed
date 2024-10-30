import useAuthStore from "../../data/stores/authStore";

function ProfileSection() {
  let { user } = useAuthStore();
  return (
    <section className="flex w-[25%] flex-col max-md:ml-0 max-md:w-full">
      <div className="w-[600px] items-start text-lg text-cyan-950 max-md:mt-10">
        <img
          loading="lazy"
          src="/Icons/Mark2.png"
          alt="Profile"
          className="aspect-square w-[171px] max-w-full rounded-3xl object-contain"
        />
        <h2 className="mt-5 text-2xl font-semibold">
          {user?.firstName} {user?.lastName}
        </h2>
        <div className="mt-5 flex gap-2.5 self-stretch whitespace-nowrap">
          <img
            loading="lazy"
            src="/Icons/uiw_mail.png"
            alt=""
            className="aspect-square w-8 shrink-0 object-contain"
          />
          <p className="my-auto shrink grow">{user?.email}</p>
        </div>
        <div className="mt-2.5 flex gap-2.5">
          <img
            loading="lazy"
            src="/Icons/ion_call.png"
            alt=""
            className="aspect-square w-8 shrink-0 object-contain"
          />
          <p className="my-auto basis-auto">{user?.telephone}</p>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
