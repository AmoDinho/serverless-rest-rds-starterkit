import { teams } from "./models/team";
export const addTeam = async (event, context) => {
  const { name } = JSON.parse(event.body);

  try {
    const addedTeam = await teams.create({ name: name });
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: addedTeam.dataValues,
      }),
    };
  } catch (e) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: e.message,
      }),
    };
  }
};
