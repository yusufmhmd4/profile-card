import "./index.css";

const ProfileCard = ({ profileData }) => {
  const {
    picture,
    name,
    gender,
    dob,
    email,
    phone,
    login,
    location
  } = profileData;
  // Destructering props

  const birthDate = new Date(dob.date);

  const dateString = `${birthDate.getDate()}-${
    birthDate.getMonth() + 1
  }-${birthDate.getFullYear()}`;

  return (
    <div className="profile-card">
      <div className="image-container">
        <img src={picture.large} alt="Profile" />
        <label>{login.username}</label>
      </div>
      <div className="profile-details-container">
        <div className="name-container">
          <p className="label-name">
            Firstname : <span className="span">{name.first}</span>
          </p>
          <p className="label-name">
            Lastname : <span className="span">{name.last}</span>
          </p>
        </div>
        <p className="label-name">
          Date-of-birth : <span className="span">{dateString}</span>
        </p>
        <p className="label-name">
          Email : <span className="span">{email}</span>
        </p>
        <p className="label-name">
          Gender : <span className="span">{gender}</span>
        </p>
        <p className="label-name">
          Age : <span className="span">{dob.age}</span>
        </p>
        <p className="label-name">
          Phone Number : <span className="span">{phone}</span>
        </p>
        <p className="label-name">
          Location : <span className="span">{location.city}</span>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
