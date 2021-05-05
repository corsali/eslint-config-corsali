# @corsali/eslint-config

Corsali linting rules.

## Usage

1. Add the package to dev dependencies:

```sh
$ npm i -D @corsali/eslint-config
```

2. Create `.eslintrc.json` in the root directory with this content:

```json
{
  "extends": ["@corsali"]
}
```

## Development

1. In this repository:

   1. `npm link` (may need to be run as root).
   2. Update version in `package.json`.

2. In another project where the rule is used:
   1. `npm link @corsali/eslint-config`.
   2. Update the installed version in `package.json`.
