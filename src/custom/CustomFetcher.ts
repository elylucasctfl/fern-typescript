import { fetcher as defaultFetcher, type FetchFunction } from "../core/index.js";

export function createCustomFetcher(): FetchFunction {
    return async (args) => {
        console.log("in custom fetcher....", JSON.stringify(args));
        
        //QUESTION: How can we tell which operation is being called here for some custom logic?
      
        return defaultFetcher({ ...args });
    };
}
