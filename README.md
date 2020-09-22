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

### 1st problem on run `ng build crud-shell --prod`

Result:

```shell
ERROR: Error during template compile of 'CrudShellModule'
  Function calls are not supported in decorators but 'RouterModule' was called.

An unhandled exception occurred: Error during template compile of 'CrudShellModule'
  Function calls are not supported in decorators but 'RouterModule' was called.
```
