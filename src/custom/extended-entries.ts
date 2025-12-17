import { Entries as GeneratedEntries } from '../api/resources/entries/client/Client.js';
import type { Entries as EntriesNS } from '../api/resources/entries/client/Client.js';
import type * as Contentful from '../api/index.js';
import type { Entry, EntrySkeletonShape } from './contentful-types.js';
import * as core from '../core/index.js';

export class ExtendedEntries extends GeneratedEntries {
  public get(
    entryId: string,
    requestOptions?: EntriesNS.RequestOptions
  ): core.HttpResponsePromise<Contentful.EntrySchema>;
  public get<TSkeleton extends EntrySkeletonShape>(
    entryId: string,
    requestOptions?: EntriesNS.RequestOptions
  ): core.HttpResponsePromise<Entry<TSkeleton>>;
  public get<TSkeleton extends EntrySkeletonShape>(
    entryId: string,
    requestOptions?: EntriesNS.RequestOptions
  ) {
    return super.get(
      entryId,
      requestOptions
    ) as unknown as core.HttpResponsePromise<Entry<TSkeleton>>;
  }
}
