import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "/src/styles/index.css";
import * as theme from "./styles/theme";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecoilRoot } from "recoil";
import Config from "./utils/config";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		{/* ReactQuery DevTools */}
		{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		<RecoilRoot>
			<BrowserRouter basename={Config.BASE_URL}>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</RecoilRoot>
	</QueryClientProvider>
);
