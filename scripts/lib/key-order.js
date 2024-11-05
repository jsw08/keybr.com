export const packageJsonKeys = [
  "private",
  "template",
  "name",
  "version",
  "type",
  "main",
  "types",
  "module",
  "exports",
  "imports",
  "sideEffects",
  "bin",
  ["dependencies", "alpha"],
  ["devDependencies", "alpha"],
  ["peerDependencies", "alpha"],
  ["optionalDependencies", "alpha"],
  ["scripts", ["clean", "compile", "test"]],
];

export const tsconfigJsonKeys = [
  "extends",
  [
    "compilerOptions",
    [
      "rootDir",
      "outDir",
      "lib",
      "declaration",
      "declarationMap",
      "noEmit",
      "emitDeclarationOnly",
      "incremental",
      "tsBuildInfoFile",
    ],
  ],
  ["include", "alpha"],
  ["exclude", "alpha"],
];
