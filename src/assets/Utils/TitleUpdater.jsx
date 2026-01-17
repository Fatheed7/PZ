import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { SKILLS_CONFIG } from "../../Config/skillsConfig";

const staticTitles = {
	"/": "Books",
	"/magazine": "Magazines",
};

export default function TitleUpdater() {
	const location = useLocation();

	useEffect(() => {
		let title = "404";

		// Static routes
		if (staticTitles[location.pathname]) {
			title = staticTitles[location.pathname];
		}

		// Dynamic skill route
		const skillMatch = matchPath("/:skill", location.pathname);

		if (skillMatch) {
			const skillKey = skillMatch.params.skill;
			const skillConfig = SKILLS_CONFIG[skillKey];

			if (skillConfig) {
				title = skillConfig.name;
			}
		}

		document.title = `PZ Checklist | ${title}`;
	}, [location]);

	return null;
}
