import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux";

// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// const client = new ApolloClient({
// 	uri: import.meta.env.VITE_GRAPHQL_CLIENT,
// 	cache: new InMemoryCache(),
// });

ReactDOM.render(
	<React.StrictMode>
		{/* <ApolloProvider client={client}> */}
		<Provider store={store}>
			<App />
		</Provider>
		{/* </ApolloProvider> */}
	</React.StrictMode>,
	document.getElementById("root"),
);
