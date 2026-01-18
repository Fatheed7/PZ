import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { SKILLS_CONFIG } from "../../Config/skillsConfig";

const staticTitles = {
	"/": "Books",
	"/magazine": "Magazines",
};

export default function TitleUpdater() {
	const location = useLocation();
	const path = location.pathname;

	useEffect(() => {
		let title = "404";

		if (staticTitles[path]) {
			title = staticTitles[path];
		}

		const skillMatch = matchPath("/:skill", path);
		if (skillMatch) {
			const skillKey = skillMatch.params.skill;
			const skillConfig = SKILLS_CONFIG[skillKey];
			if (skillConfig) {
				title = skillConfig.name;
			}
		}

		document.title = `PZ Checklist | ${title}`;
	}, [path]);

	return null;
}
