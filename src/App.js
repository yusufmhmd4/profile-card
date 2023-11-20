import { useEffect, useState } from "react"; //importing hooks
import ProfileCard from "./components/ProfileCard";
import "./App.css";

const App = () => {
  const [profileData, setProfileData] = useState(null); //initializing state value null

  useEffect(() => {
    //calling api using useEffect hook
    fetchProfileData();
  }, []);

  async function fetchProfileData() {
    const url = `https://randomuser.me/api/?page=1&results=1&seed=abc`;
    const fetchData = await fetch(url);
    const response = await fetchData.json();
    setProfileData(response.results[0]); // updating state value
  }

  return (
    <div className="App">
      {/* Rendering ProfileCard Component */}
      {profileData && <ProfileCard profileData={profileData} />}
    </div>
  );
};

export default App;
