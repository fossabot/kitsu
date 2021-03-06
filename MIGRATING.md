# Migration Guides

## Migrating to `4.0.0`

Major overhaul of the codebase and further bundle size optimization - now 14kb gzipped!

- Dropped support for IE in the main package
  - Import/require `kitsu/lib/legacy` to use with IE8+
- Changed default behavior of request URL formatting
  - In `3.x` the model/resource was mistakenly converted from `camelCase` into `snake_case`
  - In `4.x` the default behavior is now converting it into `kebab-case`
- The JSON:API `errors` object can now be destructured for easier error handling
  - Previously exposed as an anonymous object
- Sending a `POST` or `PATCH` request with relationships containing an array of data is fixed - they now correctly go into the `relationships` object instead of `attributes`

### Constructor Options

Many new options have been added inside `new Kitsu({ options })`

- Removed `version` - use the existing `baseURL` instead
- Added pluralization option
  - `pluralization: false` to disable pluralization
- Added option to camelCase the resource `type` value
  - `camelCaseTypes: true` - default, `library-entries` and `library_entries` become `libraryEntries`
  - `camelCaseTypes: false` - types are not modified
- Added option to change the model/resource request URL case conversion
  - `resourceCase: 'kebab'` - default behavior, `/libraryEntries/1` becomes `/library-entries/1`
  - `resourceCase: 'snake'` - previous behavior, `/libraryEntries/1` becomes `/library_entries/1`
  - `resourceCase: 'none'` - new behavior, `/libraryEntries/1` is not modified


## Migrating to `3.0.0`

Major update focusing on bundle size optimization. `2.0.4` was 48kb gzipped - `3.0.0` is 20kb

- Removed built-in oAuth2 authentication - use the `client-oauth2` package directly.
- Removed `compact` option in `whoAmI()`
- Removed network failure retry ability (side-effect of switching from `got` to `axios`)
- Some `new Kitsu()` constructor options have been renamed
  - `apiUrl` is now `baseURL`
  - `apiVer` is now `version`

## Migrating to `2.0.0`

- Remove `attributes` from object traversing
  - `data.attributes.canonicalTitle` is now `data.canonicalTitle`
- Use the relationship name to access relationships
  - In `1.x` the `waifu` relationship erroneously became `characters: { type: 'characters' }`
  - In `2.x` the `waifu` relationship is `waifu: { type: 'characters' }`
- Use an integer to delete resources
  - `kitsu.remove('model', { id: 1 })` is now `kitsu.remove('model', 1)`
- `kitsu.header('key', 'value')` has been removed
  - Use the existing `kitsu.headers['key'] = 'value'`
