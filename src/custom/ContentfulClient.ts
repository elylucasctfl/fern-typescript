import { ContentfulClient as GeneratedClient } from "../Client.js";
// import { ExtendedEntries } from "./extended-entries.js";

type ClientOptions = GeneratedClient.Options;
// Accept all options except 'fetcher', and add our 'privateKey'
type Options = Omit<ClientOptions, "fetcher" | "token" | "baseUrl"> & {
    accessToken?: string;
    previewToken?: string;
    isPreview?: boolean;
    host?: string;
};

export class ContentfulClient extends GeneratedClient {
    constructor(options: Options) {
        const { accessToken, previewToken, isPreview = false, host = "contentful.com", ...rest } = options;
        if (isPreview && !previewToken) {
            throw new Error("previewToken must be provided when isPreview is true.");
        }
        if (!isPreview && !accessToken) {
            throw new Error("accessToken must be provided when isPreview is false.");
        }
        const newOptions = {
            ...rest,
            token: isPreview ? previewToken! : accessToken!,
            baseUrl: isPreview ? `https://preview.${host}` : `https://cdn.${host}`,
        };
        super(newOptions);
    }
    // protected _entriesEx: ExtendedEntries | undefined;

    // public override get entries(): ExtendedEntries {
    //     return (this._entriesEx ??= new ExtendedEntries(this._options));
    // }
}
