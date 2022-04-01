import MiniProfile from "./MiniProfile"
import Posts from "./Posts"
import Stories from "./Stories"
import Suggestions from "./Suggestions"

const Feed = () => {
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 md:max-w-4xl lg:max-w-5xl xl:grid-cols-3 mx-auto">
			{/* Stories */}
			<section className="col-span-2">
				<Stories />
				<Posts />
				{/* Posts */}
			</section>
			<section className="hidden xl:inline-grid md:col-span-1">
				{/* Mini Profile */}
				<div className="fixed top-20">
					<MiniProfile />

					{/* Suggestions */}
					<Suggestions />
				</div>

			</section>
		</main>
	)
}

export default Feed
