import { useParams, Navigate } from "react-router-dom";
import SkillPage from "../../Components/SkillPage/SkillPage";
import { SKILLS_CONFIG } from "../../Config/skillsConfig";

const SkillRoute = () => {
	const { skill } = useParams();

	const config = SKILLS_CONFIG[skill];

	// Invalid route protection
	if (!config) {
		return <Navigate to="/" replace />;
	}

	return (
		<SkillPage
			skillName={config.name}
			jsonUrl={config.json}
			storageKey={skill}
		/>
	);
};

export default SkillRoute;
