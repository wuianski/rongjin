import fetchData from "../helpers/fetchData";

export const getHomepagePosts = async () => {
  const data = await fetchData(
    `
        query HomepagePosts {
            about {
                id
                history
                operations_team
            }
        }
        `,
    {
      variables: {},
    }
  );

  return data.data.about;
};
