export default class Dream {
	constructor() {
		this.environment = new Ground();
		this.artefacts = this.generateArtefacts();
		this.characters = this.generateCharacters();
		this.scenario = this.generateScenario();
	}

	generateArtefacts() {}
	generateCharacters() {}
	generateScenario() {
		starter = null;
		starterTrigger = null;
		finisher = null;
		finisherTrigger = null;
		
		return new Scenario(starter,starterTrigger,finisher,finisherTrigger);
	}

	addPlayer() {}
	removePlayer() {}
}