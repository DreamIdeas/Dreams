import DreamObject from 'DreamObject';
export default class Subject extends DreamObject {
	constructor(spritePath) {
		super(spritePath);
	}
	do(action,options) {
		switch(action) {
			case "move":
				this.move();
				break;
			default:
				this.stand();
				break;
		}
	}
	stand() {
		// Standing still animation
	}
	move(value,direction,speed) {

	}
}