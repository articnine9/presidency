export default function CourseQuickBar({ data, school }: any) {
  return (
    <div className="bg-white border-b py-4">
      <div className="max-w-[1400px] mx-auto px-6 flex gap-10 text-sm">
        <div>
          <p className="text-gray-400">Degree</p>
          <p className="font-semibold">{data.degree}</p>
        </div>

        <div>
          <p className="text-gray-400">Duration</p>
          <p className="font-semibold">{data.duration}</p>
        </div>

        <div>
          <p className="text-gray-400">School</p>
          <p className="font-semibold">{school.name}</p>
        </div>
      </div>
    </div>
  );
}
