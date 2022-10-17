import fetchData from "../helpers/fetchData";

export const getHomepagePosts = async () => {
  const data = await fetchData(
    `
        query HomepagePosts {
            about {
                id
                history_tw
                operations_team_tw
            }
        }
        `,
    {
      variables: {},
    }
  );

  return data.data.about;
};
