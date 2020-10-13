import { Module } from '@nuxt/types'

const generator: Module = function () {
  this.nuxt.hook('generate:done', async (context: any) => {
    const routesToExclude: string[] =
    process.env.NUXT_ENV_EXCLUDE_ROUTES
      ? process.env.NUXT_ENV_EXCLUDE_ROUTES.split(',') : []
    const allRoutes: string[] = await Array.from(context.generatedRoutes)
    const routes: string[] = await allRoutes.filter((route: string) => !routesToExclude.includes(route))
    this.nuxt.options.sitemap.routes = await [...routes]
  })
}

export default generator
