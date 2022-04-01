import Post from "./Post"

const posts = [
	{
		id: '123',
		username: 'Shaik Rehan',
		userImg: 'https://yt3.ggpht.com/yti/APfAmoFV_G4Ix1hgko-tLXkyZdCGH-f9sqMWyOkedxOo=s88-c-k-c0x00ffffff-no-rj-mo',
		img: 'https://yt3.ggpht.com/yti/APfAmoFV_G4Ix1hgko-tLXkyZdCGH-f9sqMWyOkedxOo=s88-c-k-c0x00ffffff-no-rj-mo',
		caption: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?'
	},
]

const Posts = () => {
	return (
		<div>
			{posts.map((post) => {
				return (
					<Post key={post.id}
						username={post.username}
						userImg={post.userImg}
						postImg={[post.img]}
						caption={post.caption} />
				)
			})}
		</div>
	)
}

export default Posts
