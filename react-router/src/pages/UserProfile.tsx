import { useParams } from "react-router-dom"

type Profile ={
    profileId:string
}

export default function UserProfile() {
    const params = useParams<Profile>();
    return (
    <div className="p-10 flex flex-col gap-4">
      User Page
      <p>Profile : {params.profileId}</p>
    </div>
  )
}
