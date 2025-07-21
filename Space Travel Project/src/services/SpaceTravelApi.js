import SpaceTravelMockApi from "./SpaceTravelMockApi.js";
//use SpaceTravel Mock API methods here
class SpaceTravelApi {
  static async getPlanets() {
    return SpaceTravelMockApi.getPlanets();
  }

  static async getSpacecrafts() {
    return SpaceTravelMockApi.getSpacecrafts();
  }

  static async getSpacecraftById({ id }) {
    return SpaceTravelMockApi.getSpacecraftById({ id });
  }

  static async buildSpacecraft({
    name,
    capacity,
    description,
    pictureUrl = undefined,
  }) {
    return SpaceTravelMockApi.buildSpacecraft({
      name,
      capacity,
      description,
      pictureUrl,
    });
  }

  static async destroySpacecraftById({ id }) {
    return SpaceTravelMockApi.destroySpacecraftById({ id });
  }

  static async sendSpacecraftToPlanet({ spacecraftId, targetPlanetId }) {
    return SpaceTravelMockApi.sendSpacecraftToPlanet({
      spacecraftId,
      targetPlanetId,
    });
  }
}
//export SpaceTravelAPI for further use
export default SpaceTravelApi;
