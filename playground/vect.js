class Vector2D {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
}