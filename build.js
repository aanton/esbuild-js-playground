const esbuild = require('esbuild')
const { glob } = require('glob')
const args = require('minimist')(process.argv.slice(2))

const outDirectory = 'public'

const build = (files) => {
  esbuild.build({
    entryPoints: files,
    bundle: true,
    logLevel: 'info',
    minify: args.minify === true,
    outdir: outDirectory,
    sourcemap: args.sourcemap === true,
    watch: args.watch === true
  })
}

const serve = async function serve () {
  console.log('Running server from: http://localhost:8080/')
  const servor = require('servor')
  await servor({
    fallback: 'index.html',
    port: 8080,
    reload: true,
    root: outDirectory
  })
}

glob('src/*.js', (err, files) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Building ${files} ...`)
  build(files)

  if (args.server === true) {
    serve()
  }
})
