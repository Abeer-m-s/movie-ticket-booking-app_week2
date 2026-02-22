import { useParams, useNavigate } from "react-router-dom";

const shows = [
  {
    id: "s1",
    theatre: "PVR Cinemas",
    location: "Chennai",
    times: ["10:00 AM", "2:00 PM", "6:00 PM"]
  },
  {
    id: "s2",
    theatre: "INOX",
    location: "Coimbatore",
    times: ["11:00 AM", "3:00 PM", "9:00 PM"]
  },
  {
    id: "s3",
    theatre: "AGS Cinemas",
    location: "Madurai",
    times: ["9:30 AM", "1:30 PM", "7:30 PM"]
  }
];

const TheatreSelection = () => {
  const { id } = useParams(); // anime id
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10 text-pink-400">
        Select Theatre & Showtime
      </h1>

      <div className="space-y-8">
        {shows.map((show) => (
          <div
            key={show.id}
            className="bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold">
              {show.theatre}
            </h2>
            <p className="text-gray-400 mb-4">
              {show.location}
            </p>

            <div className="flex gap-4 flex-wrap">
              {show.times.map((time, index) => (
                <button
                  key={index}
                  onClick={() =>
                    navigate("/seats", {
                      state: {
                        showId: show.id,
                        theatre: show.theatre,
                        time
                      }
                    })
                  }
                  className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TheatreSelection;