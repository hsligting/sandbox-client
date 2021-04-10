import store from "../store";

describe("store", () => {
    it("store should be initialized properly", () => {
        expect(typeof store.dispatch).toBe("function");
        expect(typeof store.getState).toBe("function");

        expect(store.getState()).toEqual({
            users: { admins: [], employees: [] },
            googleAccounts: {},
            notes: [],
            contacts: [],
            clients: [],
            ppcCampaigns: [],
            callRailAccounts: [],
            directMailCampaigns: [],
            aggregatedPpc: { rows: [], averages: {} },
            leads: [],
            currentUser: { isAuthenticated: false, user: {}, userType: "" },
            dimensions: {
                contentContainer: { width: 375 },
                viewport: { width: 1024, height: 768 },
            },
            loading: {},
            serverErrors: { login: {}, register: {}, practiceList: {} },
            practices: [],
            openPractice: {},
            directMailReport: [],
            ppcReport: { activeCampaigns: [], pastCampaigns: [] },
            practiceGrowthDataReport: {},
            growthData: [],
            seoReport: {},
            myAccount: {},
        });
    });
});
