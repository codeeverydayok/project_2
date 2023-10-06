import { useContext } from "react";
import { AuthContext } from "../../context/authContext"
import "./stories.scss"

const Stories = () => {

	const {currentUser} = useContext(AuthContext)

	//TEMPORARY
	const stories = [
		{
			id: 1,
			name: "John Doe",
			img: "https://images.unsplash.com/photo-1685362926801-d97120f56465?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
		},
		{
			id: 2,
			name: "John Doe",
			img: "https://images.unsplash.com/photo-1685461331095-1743eda176f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
		},
		{
			id: 3,
			name: "John Doe",
			img: "https://images.unsplash.com/photo-1685443866545-57adcff6e0be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
		},
		{
			id: 4,
			name: "John Doe",
			img: "https://images.unsplash.com/photo-1642362932918-e06b87fc185b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
		},
	];

	return (
		<div className="stories">
			<div className="story">
				<img /*src={currentUser.profilePic}*/
					src="avatar.jpg" alt="" />
				<span>{currentUser.name}</span>
				<button>+</button>
			</div>
			{stories.map(story=>(
				<div className="story" key={story.id}>
					<img src={story.img} alt="" />
					<span>{story.name}</span>
				</div>
			))}
		</div>
	)
}

export default Stories