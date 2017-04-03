export default class Scenario {
	constructor(starterEl,starterTrig,enderEl,enderTrig) {
		this.goal = {
			startMessage: "", // When the scenario triggers, this message appears
			starter: {
				element: starterEl,
				trigger: starterTrig
			},
			endMessage: "", // When the scenario ends, this message appears
			ender: {
				element: enderEl,
				trigger: enderTrig
			}
		};
	}
}