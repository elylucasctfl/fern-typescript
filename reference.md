# Reference
## contentTypes
<details><summary><code>client.contentTypes.<a href="/src/api/resources/contentTypes/client/Client.ts">get</a>({ ...params }) -> Contentful.ContentTypeSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a ContentType by Id
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contentTypes.get({
    spaceId: "yadj1kx9rmg0",
    environmentId: "master",
    contentTypeId: "blogPost"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Contentful.GetContentTypesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContentTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contentTypes.<a href="/src/api/resources/contentTypes/client/Client.ts">list</a>({ ...params }) -> Contentful.ListContentTypesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get ContentTypes
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contentTypes.list({
    spaceId: "yadj1kx9rmg0",
    environmentId: "master"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Contentful.ListContentTypesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContentTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## entries
<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">get</a>({ ...params }) -> Contentful.EntrySchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve an entry by ID
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entries.get({
    spaceId: "yadj1kx9rmg0",
    environmentId: "master",
    entryId: "1nG4SkuMy0WenQUG6z2aEw"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Contentful.GetEntriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">list</a>({ ...params }) -> Contentful.ListEntriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a collection of entries
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entries.list({
    spaceId: "yadj1kx9rmg0",
    environmentId: "master",
    contentType: "blogPost"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Contentful.ListEntriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>
