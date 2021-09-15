import Layout from '../Layout';
import ProfileView from '../../components/ProfileView/ProfileView'
import ProfileDetail from '../../components/ProfileDetail/ProfileDetail';

const ProfilePage = () => {
  return(
  <Layout>
    <ProfileView
    m_image={'assets/images/car.jpg'}
    m_name={"This_Is_You"}
    m_since={"August 09, 2021"}
    m_email={'ThisIsYou@gmail.com'}
    m_style={'Strategic'}
    m_status={'savage'}
    m_about_you={'I am the light within the dark that fights for what is right.It is not bravery to do what is needed, it is bravery to do what is needed when it is needed for others beyond yourself.'}
    />

    <ProfileDetail/>
  </Layout>
  )
}

export default ProfilePage