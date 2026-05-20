import CommonHeader from "@/app/components/CommonHeader";

type FacilityItem = {
  title: string;
  desc: string;
  image?: string;
};

type FacilitiesData = {
  header: {
    tag: string;
    title: string;
    highlight: string;
    description: string;
  };
  items: FacilityItem[];
};

type FacilitiesSectionProps = {
  data: FacilitiesData;
};

const FacilitiesSection = ({ data }: FacilitiesSectionProps) => {
  return (
    <section className="bg-[#F7F8F6] py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* HEADER */}
        <CommonHeader
          tag={data.header.tag}
          title={data.header.title}
          highlight={data.header.highlight}
          description={data.header.description}
          primaryColor="#0A8F96"
        />

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {data.items.map((item, i) => (
            <div
              key={i}
              className={`
        ${
          i === data.items.length - 1 ? "md:col-span-3 flex justify-center" : ""
        }
      `}
            >
              <div
                className="
          relative
          bg-white
          rounded-2xl
          overflow-hidden
          shadow-sm
          hover:shadow-xl
          transition-all duration-300
          border-b-[3px]
          border-b-[#0A8F96]
          group
          h-full
          w-full
          max-w-[430px]
        "
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
              w-full
              h-[180px]
              object-cover
              group-hover:scale-105
              transition duration-500
            "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h4 className="text-[#0F1E3D] text-xl mb-2">{item.title}</h4>

                  <p className="text-gray-500 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
