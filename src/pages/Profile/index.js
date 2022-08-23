import MultiTab from '../components/MultiTab';
import ProfileHeader from './ProfileHeader';

function Profile() {
  document.title = 'Profile';

  return (
    <>
      <ProfileHeader />
      <MultiTab />
    </>
  );
}

export default Profile;
