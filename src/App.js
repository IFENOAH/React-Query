import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RQSuperHeroPage } from "./components/RQSuperHero.Page";
import { ParallelQueriesPage } from "./components/ParallelQueries.page";
import { DynamicParallelPage } from "./components/DynamicParallel.Page";
import { DependentQueriesPage } from "./components/DependentQueries.Page";
import { PaginatedQueriesPage } from "./components/PaginatedQueries.Page";
import { InfiniteQueriesPage } from "./components/InfiniteQueries.Page";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/rq-infinite"
              element={<InfiniteQueriesPage />}
            ></Route>
            <Route
              path="/rq-paginated"
              element={<PaginatedQueriesPage />}
            ></Route>
            <Route
              path="/rq-dependent"
              element={
                <DependentQueriesPage email="ifeoluwadayonoah@gmail.com" />
              }
            ></Route>
            <Route
              path="/rq-dynamic-parallel"
              element={<DynamicParallelPage heroIds={[1, 3]} />}
            ></Route>
            <Route
              path="/rq-parallel"
              element={<ParallelQueriesPage />}
            ></Route>
            <Route
              path="/rq-super-heroes/:heroId"
              element={<RQSuperHeroPage />}
            ></Route>
            <Route path="/super-heroes" element={<SuperHeroesPage />}></Route>
            <Route
              path="/rq-super-heroes"
              element={<RQSuperHeroesPage />}
            ></Route>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
