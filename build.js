const esbuild = require('esbuild')
const { glob } = require('glob')
const args = require('minimist')(process.argv.slice(2))

const build = (files) => {
  esbuild.build({
    entryPoints: files,
    bundle: true,
    logLevel: 'info',
    minify: args.minify === true,
    outdir: 'public',
    sourcemap: args.sourcemap === true,
    watch: args.watch === true
  })
}

glob('src/*.js', (err, files) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Building ${files} ...`)
  build(files)
})
