# A short-url project on Cloudflare Workers

<br/>

## Warning: Do not attempt to use the project for production environment, or any circumstance requiring availability. Errors may occur at any time!

<br/>

### How to use

1. Run SQL scripts in `init.sql` in one of your D1 database to create the table. Remember to **create a database first**!

2. Create a D1 database bind, either in web panel or in `wrangler.jsonc`, with `DB` as the name and the database name you just chose as the value, so that Worker can visit the database you wish it should visit.
   Note that you can customize the binding name, just global search the word `DB` and replace it as you named in the binding.

3. Deploy the code, either with [Playground](https://workers.cloudflare.com/playground), or with [Wrangler, the CLI tool for Workers](https://developers.cloudflare.com/workers/wrangler/). The latter is recommended.

4. Now you may use it.

5. If you wish to 'auto-delete' all expired links in the database, a scheduled task is already provided in the code, so you may just add a [Cron Trigger](https://developers.cloudflare.com/workers/configuration/cron-triggers/). Note is not real auto-delete, just scheduled delete.

6. Note about `frontend.html` and `frontend_online.html`. `frontend.html` is the original version, and contains human readable JS codes. `frontend_online.html` is the JS obfuscated version. Default use the latter, you may change it to `import frontend from "../htmls/frontend.html";` in `homepageHandler.js`.
