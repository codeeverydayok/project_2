import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import GoogleIcon from '@mui/icons-material/Google';
import "./Share.scss";

const Share = ({ onClose }) => {
	// const { currentUser } = useContext(AuthContext);

	return (
		<div className="share" onClick={onClose}>
        	<div className="shareContent">
        		<h2>Share content</h2>
       			<p><GoogleIcon /></p>
        	</div>
        </div>
	)
}

export default Share