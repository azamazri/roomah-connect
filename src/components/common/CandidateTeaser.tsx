import CandidateCard from "./CandidateCard";

const candidatesData = [
  {
    name: "Ahmad Faizi",
    age: 25,
    city: "Jakarta", 
    job: "Software Engineer",
    edu: "S1",
    bio: "Shalehah",
    badges: ["Tech", "Quran"],
    readyLabel: "Siap Ta'aruf"
  },
  {
    name: "Siti Aisyah",
    age: 23,
    city: "Surabaya",
    job: "Guru",
    edu: "S1", 
    bio: "Pengertian dan Visi Pemikahan yang tepat",
    badges: ["Education", "Family"],
    readyLabel: "Siap Ta'aruf"
  },
  {
    name: "Muhammad Rizki",
    age: 27,
    city: "Jogja",
    job: "Marketing",
    edu: "S1",
    bio: "Shaleh",
    badges: ["Business", "Travel"],
    readyLabel: "Siap Ta'aruf"
  },
  {
    name: "Fatimah Azzahra", 
    age: 24,
    city: "Bandung",
    job: "Designer",
    edu: "S1",
    bio: "Shaleh, sholat 5 waktu",
    badges: ["Creative", "Art"],
    readyLabel: "Siap Ta'aruf"
  },
  {
    name: "Umar Faruq",
    age: 26,
    city: "Semarang",
    job: "Dokter",
    edu: "S1",
    bio: "Rajin menabung",
    badges: ["Medical", "Health"],
    readyLabel: "Siap Ta'aruf"
  },
  {
    name: "Khadijah Ummu",
    age: 25,
    city: "Medan",
    job: "Pharmacist", 
    edu: "S1",
    bio: "Gemar olahraga",
    badges: ["Health", "Sports"],
    readyLabel: "Siap Ta'aruf"
  }
];

export default function CandidateTeaser() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {candidatesData.map((candidate, index) => (
        <CandidateCard
          key={index}
          name={candidate.name}
          age={candidate.age}
          city={candidate.city}
          job={candidate.job}
          edu={candidate.edu}
          bio={candidate.bio}
          badges={candidate.badges}
          readyLabel={candidate.readyLabel}
        />
      ))}
    </div>
  );
}