import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AppProvider from "./contexts/AppProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Container } from "./styles/app";

import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Pokemons from "./pages/Pokemons";
import MyPokemons from "./pages/MyPokemons";
import DetailPokemon from "./pages/DetailPokemon";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            pokemons: {
              keyArgs: false,
              merge(existing, incoming) {
                let results: Reference[] = [];
                if (existing && existing.results) {
                  results = results.concat(existing.results);
                }
                if (incoming && incoming.results) {
                  results = results.concat(incoming.results);
                }
                return {
                  ...incoming,
                  results,
                };
              },
            },
          },
        },
      },
    }),
  });

  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Loading />
        <BrowserRouter>
          <Switch>
            <Container>
              <Navbar />
              <Route exact path="/" component={Pokemons} />
              <Route exact path="/mypokemons" component={MyPokemons} />
              <Route exact path="/pokemon/:name" component={DetailPokemon} />
            </Container>
          </Switch>
        </BrowserRouter>
      </AppProvider>
    </ApolloProvider>
  );
}

export default App;
