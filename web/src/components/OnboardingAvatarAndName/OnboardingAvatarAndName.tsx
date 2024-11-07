import UpdateAvatar from 'src/components/UpdateAvatar/UpdateAvatar'

const OnboardingAvatarAndName = () => {
  return (
    <div className="rw-scaffold mx-auto my-40 flex max-w-md flex-col py-4">
      <div className="mx-auto">
        <UpdateAvatar />
      </div>
      <div className="rw-segment-main">
        <div className="rw-form-wrapper">
          <p className="break-words">
            {
              'Find me in ./web/src/components/OnboardingAvatarAndName/OnboardingAvatarAndName.tsx'
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default OnboardingAvatarAndName
