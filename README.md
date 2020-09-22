# Eval

## Environment setup

```shell
npx --ignore-existing create-nx-workspace@^9.7.0 eval --cli=angular  --nx-cloud=false --preset=empty --style=scss

ng add @nrwl/angular@^9.7.0
```

## Generating the shell library

```shell
ng g @nrwl/angular:lib shell --directory=crud --style=scss --publishable --routing=true --lazy=true
```

## Generating the shell library

```shell
ng g @nrwl/angular:lib list --directory=crud --style=scss --routing=true --lazy=true --parentModule=libs/crud/shell/src/lib/crud-shell.module.ts
```

## Upgrading from v9 to v10

```shell
yarn update --force
```

### Problem on run `ng build crud-shell --prod`

Result:

```shell
ERROR: libs/crud/list/src/index.ts:1:15 - error TS6059: File '/...MyPC.../angular-9/eval/libs/crud/list/src/lib/crud-list.module.ts' is not under 'rootDir' '/...MyPC.../angular-9/eval/libs/crud/shell/src'. 'rootDir' is expected to contain all source files.

1 export * from './lib/crud-list.module';
                ~~~~~~~~~~~~~~~~~~~~~~~~
libs/crud/shell/src/lib/crud-shell.module.ts:13:18 - error TS6059: File '/...MyPC.../angular-9/eval/libs/crud/list/src/index.ts' is not under 'rootDir' '/...MyPC.../angular-9/eval/libs/crud/shell/src'. 'rootDir' is expected to contain all source files.

13           import('@eval/crud/list').then((module) => module.CrudListModule),
                    ~~~~~~~~~~~~~~~~~
Error during template compile of 'CrudListModule'
  Function calls are not supported in decorators but 'RouterModule' was called.

An unhandled exception occurred: libs/crud/list/src/index.ts:1:15 - error TS6059: File '/...MyPC.../angular-9/eval/libs/crud/list/src/lib/crud-list.module.ts' is not under 'rootDir' '/...MyPC.../angular-9/eval/libs/crud/shell/src'. 'rootDir' is expected to contain all source files.

1 export * from './lib/crud-list.module';
                ~~~~~~~~~~~~~~~~~~~~~~~~
libs/crud/shell/src/lib/crud-shell.module.ts:13:18 - error TS6059: File '/...MyPC.../angular-9/eval/libs/crud/list/src/index.ts' is not under 'rootDir' '/...MyPC.../angular-9/eval/libs/crud/shell/src'. 'rootDir' is expected to contain all source files.

13           import('@eval/crud/list').then((module) => module.CrudListModule),
                    ~~~~~~~~~~~~~~~~~
Error during template compile of 'CrudListModule'
  Function calls are not supported in decorators but 'RouterModule' was called.
```
