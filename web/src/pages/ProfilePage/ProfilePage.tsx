import { Metadata } from '@redwoodjs/web'

const ProfilePage = () => {
  return (
    <>
      <Metadata title="Profile" description="Profile page" />
      <div className="container max-w-3xl bg-black">
        <div className="relative -top-7">
          <h1 className="text-xl font-semibold tracking-tight text-white">
            Uw Profiel
          </h1>
          <p className="font-thin">Beheer uw profiel</p>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
