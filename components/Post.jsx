import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline"

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { useState } from "react"

const Post = ({ username, userImg, postImg, caption }) => {
	const [readMore, setReadMore] = useState(false);
	return (
		<div className='bg-white my-7 border rounded-sm'>
			<div className="flex items-center p-5 ">
				{/* Header */}
				<img src={userImg} className='rounded-full h-12 w-12 object-contain border p-1 m-3' />
				<p className="flex-1 font-bold">{username}</p>
				<DotsHorizontalIcon className='h-5' />
			</div>
			{/* Img */}
			<img src={postImg} className="object-cover w-full" />

			{/* Buttons */}
			<div className="flex justify-between px-4 pt-4">
				<div className="flex space-x-4">
					<HeartIcon className="button" />
					<ChatIcon className="button" />
					<PaperAirplaneIcon className="button" />
				</div>
				<BookmarkIcon className="button" />
			</div>
			{/* Captions */}
			<p className={readMore ? "p-5" : "p-5 truncate"}>
				<span className="font-bold mr-1">{username} </span>
				<p className="font-mono inline">{caption}</p>
				<p onClick={() => setReadMore(!readMore)} className="cursor-pointer font-extrabold text-blue-700">{readMore ? 'Show Less' : 'Show More'}</p>
			</p>
			{/* comments */}

			{/* Input Box */}
			<form className="flex items-center p-4">
				<EmojiHappyIcon className="h-7" />
				<input type="text" className="border-none flex-1 focus:ring-0 outline-none" placeholder="Add a Comment ..." />
				<button className="font-semibold text-blue-500">Post</button>
			</form>
		</div >
	)
}

export default Post
