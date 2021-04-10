import { createBrowserHistory } from "history";

export const routerHistory = createBrowserHistory();

if (window.Cypress) {
  window.tgHistory = routerHistory;
}
