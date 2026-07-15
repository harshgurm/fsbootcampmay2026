type ProfileDetailsProps = {
    children: React.ReactNode
};

function ProfileDetails({ children }: ProfileDetailsProps) {
    return (
        <div className="profile-details">
            {children}
        </div>
    )
}

export default ProfileDetails;