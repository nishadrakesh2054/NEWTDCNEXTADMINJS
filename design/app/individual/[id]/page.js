"use client";
import { useParams } from "next/navigation";

// You could move this to a separate data file or fetch from an API
const sportDetails = {
  football: {
    name: "Football",
    description: "Our football program offers professional training for all ages.",
    coaches: ["John Smith", "Sarah Johnson"],
    schedule: "Mon, Wed, Fri - 4-6 PM",
    requirements: "Comfortable athletic wear, cleats, water bottle"
  },
  swimming: {
    name: "Swimming",
    description: "Learn competitive swimming techniques from Olympic-level coaches.",
    coaches: ["Michael Brown", "Lisa Chen"],
    schedule: "Tue, Thu, Sat - 3-5 PM",
    requirements: "Swimsuit, goggles, towel"
  }
};

export default function IndividualSportPage() {
  const { id } = useParams();
  const sport = sportDetails[id];

  if (!sport) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold">Sport not found</h1>
        <p className="mt-4">The sport you're looking for doesn't exist in our programs.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-200 h-64 w-full">
          {/* Placeholder for sport image */}
        </div>
        
        <div className="p-6">
          <h1 className="text-3xl font-bold capitalize mb-4">
            {sport.name} Program
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">{sport.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-3">Coaches</h2>
                <ul className="space-y-2">
                  {sport.coaches.map((coach, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {coach}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-3">Schedule</h2>
                <p>{sport.schedule}</p>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">Requirements</h2>
              <p>{sport.requirements}</p>
            </div>
            
            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Register for {sport.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}