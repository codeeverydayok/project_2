import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import Share from "../share/Share";
import { useState, useEffect } from "react";
import "./post.scss";

const Post = ({ post }) => {
	const [commentOpen, setCommentOpen] = useState(false);
	const [shareOpen, setShareOpen] = useState(false);

	//TEMPORARY
	const liked = false;

	const handleShareClick = () => {
		setShareOpen(true);
		document.body.style.overflow = 'hidden'; // Prevent scrolling
	};

	const handleShareClose = () => {
		setShareOpen(false);
		document.body.style.overflow = 'auto';
	};

	useEffect(() => {
		return () => {
			document.body.style.overflow = 'auto'; // Enable scrolling when component unmounts
		};
	}, []);

	return (
		<div className="post">
			<div className="container">
				<div className="user">
					<div className="userInfo">
						<img src={post.profilePic} alt="" />
						<div className="details">
							<Link
								to={`/profile/${post.userId}`}
								style={{ textDecoration: "none", color: "inherit" }}
							>
								<span className="name">{post.name}</span>
							</Link>
							<span className="date">1 min ago</span>
						</div>
					</div>
					<MoreHorizIcon />
				</div>
				<div className="content">
					<p>{post.desc}</p>
					<img src={post.img} alt="" />
				</div>
				<div className="info">
					<div className="item">
						{liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
						12 Likes
					</div>
					<div className="item" onClick={() => setCommentOpen(!commentOpen)}>
						<TextsmsOutlinedIcon />
						12 Comments
					</div>
					<div className="item" onClick={ handleShareClick }>
						<ShareOutlinedIcon />
						Share
					</div>
				</div>
				{commentOpen && <Comments />}
				{shareOpen && <Share onClose={ handleShareClose } />}
			</div>
		</div>
	);
};

export default Post;