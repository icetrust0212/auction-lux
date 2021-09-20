import Layout from '../Layout';
import ProfileView from '../../components/ProfileView/ProfileView'
import ProfileDetail from '../../components/ProfileDetail/ProfileDetail';

const ProfilePage = () => {
  return(
  <Layout>
    <ProfileView/>
    <ProfileDetail/>
  </Layout>
  )
}

export default ProfilePage