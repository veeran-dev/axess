import Image from "next/image"
import ProfileSetup from "@/components/profile/profileSetup"
import withPublicLayout from "@/lib/withPublicLayout"
import { memo } from "react"
import { InboxIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/outline"

const Profile =()=>{
    return(
        <div className="mx-auto max-w-3xl bg-white p-8 rounded-lg">
            <h2 className="font-bold text-xl">Profile</h2>
            <div className="flex flex-row my-4">
                <div className="w-24 h-24 rounded-full relative mr-8 overflow-hidden border-2 border-indigo-600">
                    <Image
                        src={'/home/face.jpg'}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="flex flex-col items-start justify-center space-y-4">
                    <div className="flex flex-row justify-center items-center"><UserIcon className="size-4 mr-2" /> john doe</div>
                    <div className="flex flex-row justify-center items-center"><InboxIcon className="size-4 mr-2" /> johndoe@gmail.com</div>
                    <div className="flex flex-row justify-center items-center"><PhoneIcon className="size-4 mr-2" /> +91 78989 78989</div>
                </div>
            </div>
            <ProfileSetup/>
        </div>
    )
}

export default memo(withPublicLayout(Profile))