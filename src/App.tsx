import { useEffect, useState } from "react";
import CovidTable from "./CovidTable";

export type StateData = {
  active: number;
  confirmed: number;
  deaths: number;
  deltaconfirmed: number;
  deltadeaths: number;
  deltarecovered: number;
  lastupdatedtime: string;
  migratedother: number;
  recovered: number;
  state: string;
  statecode: string;
  statenotes: string;
};

function App(): JSX.Element {
  const [covidData, setCovidData] = useState<StateData[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const URL = "https://api.covid19india.org/data.json";
      const res = await fetch(URL);
      const data = await res.json();
      setCovidData(data.statewise);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="tw-flex tw-justify-center tw-flex-col tw-items-center">
      <h1 className="tw-text-5xl tw-font-extralight tw-my-10">
        <span className="tw-font-normal">INDIA</span> Covid-19 Dashboard
      </h1>
      {isLoading ? (
        <p className="tw-text-base">Loading...</p>
      ) : isError ? (
        <>
          <p className="tw-text-lg">
            We are facing some issue while fetching data.
          </p>
          <button
            className="tw-mt-4 tw-mb-6 tw-inline-block tw-px-6 tw-py-2 tw-text-xs tw-font-medium tw-leading-6 tw-text-center tw-text-black tw-uppercase tw-transition tw-bg-gray-100 tw-rounded tw-shadow tw-ripple hover:tw-shadow-lg hover:tw-bg-gray-200 focus:tw-outline-none"
            onClick={fetchData}
          >
            Try again
          </button>
        </>
      ) : (
        <CovidTable data={covidData} />
      )}
      <footer className="tw-my-3">
        Made With ❤️ by{" "}
        <a
          className="tw-underline"
          href="https://shailesh-parmar.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          Shailesh Parmar
        </a>
      </footer>
    </div>
  );
}

export default App;
