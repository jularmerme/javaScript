/**
 * 
 * Project Configuration
 * 
 * Project configuration in Typescript is used to set the compiler options and helps in specifying the files to be
 * included or excluded while performing the compilation
 * 
 * Typescript project configuration can be done using one of the below approaches:
 * 
 * 1. tsc: With command line along with the tsc command
 * 2. IDE: setting options using the idE with which you have coded Typescript
 * 3. Build Tool: using any task builder like Grunt or Gulp
 * 4. tsconfig.json: Inside a file with the name tsconfig.json
 * 
 * Specifying Compiler Option
 * 
 * Compiler option is used to specify configurations like target ES version to be used to compile, module loader to
 * be used, and so on.
 * 
 * There are many compiler options available which you can refer to from the Typescript documentation
 * 
 * common compiler options used are:
 * 
 * --module or --m
 * --sourceMap
 * --target or --t
 * --watch or --w
 * --outDir
 * --outFile
 * 
 * Target => A developer can specify ECMAScript target version 'ES3'(default), 'ES5', 'ES6' => tsc --target ES2015 filename.ts
 * Module => A developer can specify module code generation: 'none', 'system', 'umd', 'es6' or 'es2015' => tsc --module commonjs filesname.ts
 * outFile => A developer can redirec output structure to the directory
 * sourceMap => Helps in concatenation, and emits the output to a single file. Order or concatenation is determined by the list of files passed
 * to the compiler on the command line along with triple-slash references and imports => tsc -sourceMap filename.ts
 * watch => Run the compiler in watch mode. Watch input files and trigger recompilation on changes. => tsc -watch filename.ts
 * 
 * 
 * Role and Structure of tsconfig.json
 * 
 * * It is used to provide compiler options to a Typescript project
 * * It helps in specifying the files to be included or excluded from the project
 * 
 * You can also find the root of a Typescript application using the tsconfig.json as the file resides in the root folder
 * 
 */

{
  "compilerOptions": { // <= Provides compiler options to be configured while compiling.ts file
    "target": "es5",
    "outDir":"js",
    "module":"amd",
    "outFile":"moduletest.js"
  },
  "files": [ // <= Provides files names to be compiled with configured compiler options
    "filename1.ts",
    "filename2.ts"
  ]
}

/**
 * 
 * Once you add tsconfig.json file, you can use the tsc command to compile the files using the tsconfig.json file
 * 
 * Example: Using tsc command without file name from root folder command line
 * 
 */