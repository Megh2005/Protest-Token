import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "aconst",
    name: "Power",
    chainId: "constantine-3",
    createdDate: "2025-07-15T16:09:57.428Z",
    modifiedDate: "2025-07-15T16:09:57.428Z",
    id: "archway",
    collections: [
        {
            exchange:
                "archway1ck3ntu9jhg6j20q5kjhcwec4dy40upmwtlvjkq3udzszjrqpfeus5thxge",
            cw20: "archway1lp9a7gc7u40aun70zj4at3w8pddnesrh28wr23c6j8qa5392lzkqq4cfn5",
            name: "Power Exchange",
            type: ICollectionType.EXCHANGE,
            id: "powerexchange-dapp",
        },
    ],
};



export default CONFIG;
