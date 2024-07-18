import { NavLink , Outlet } from "react-router-dom"

const profiles =[1,2,3,4,5]

export default function Profile() {
  return (
    <div className="mt-40 flex flex-col justify-center">
      Profile Page
      <div className="flex flex-col gap-2">
        {profiles.map((profile)=>
        <NavLink
        className={({isActive})=>{
            return isActive ? 'text-blue-600':''
        } }
        key={profile} to={`/profile/${profile}`}>
            Profile {profile}
        </NavLink>
        )}
      </div>
      <Outlet/>
    </div>
  )
}
