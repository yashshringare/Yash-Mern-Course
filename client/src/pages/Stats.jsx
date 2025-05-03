import { ChartsContainer, StatsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const statsQuery = {
  queryKey: ["stats"],
  queryFn: async () => {
    const response = await customFetch.get("/jobs/stats");
    return response.data;
  },
};

// export const loader = async () => {
//   // try {
//   return null;
//   const response = await customFetch.get("/jobs/stats");
//   return response.data;
//   // } catch (error) {
//   //   return error;
//   // }
// };

export const loader = (queryClient) => async () => {
  const data = await queryClient.ensureQueryData(statsQuery);
  return data; // can also retun null because we use data from statsQuery and not from loader
};

const Stats = () => {
  // const { defaultStats, monthlyApplications } = useLoaderData();
  // const { isLoading, isError, data } = useQuery({
  //   queryKey: ["stats"],
  //   queryFn: () => customFetch.get("/jobs/stats"),
  // });
  // console.log(response);
  const { isLoading, isError, data } = useQuery(statsQuery);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }
  const { defaultStats, monthlyApplications } = data;
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 0 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};
export default Stats;
