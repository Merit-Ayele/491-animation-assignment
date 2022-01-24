const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./walk.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	//document.getElementById("gameWorld").style.backgroundImage="url('./city.jpg')";
	//document.getElementById("gameWorld").style.backgroundSize="1024px 768px";

	gameEngine.addEntity(new Walk(gameEngine));
	gameEngine.init(ctx);

	gameEngine.start();
});
