/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import createUrlHandler from "./handlers/createUrlHandler";
import homepageHandler from "./handlers/homepageHandler";
import redirectHandler from "./handlers/redirectHandler";

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const path = url.pathname.slice(1);
		const ip = request.headers.get('CF-Connecting-IP');

		try {
			// 主页
			if (path === '') {
				return homepageHandler(url);
			}
			// 创建新的短链接
			if (path === 'create' && request.method === 'POST') {
				return createUrlHandler(request, url, ip, env);
			}
			// fallback: 解析短链接
			return redirectHandler(url, path, ip, env);
		} catch (error) {
			return new Response(JSON.stringify({error: 'server error'}), {
				status: 500,
				headers: {'Content-Type': 'application/json'}
			});
		}
	},

	async scheduled(controller, env, ctx) {
		const delete_prepare = env.DB.prepare(`DELETE FROM links WHERE strftime('%Y-%m-%d %H:%M:%S', expire_time) > datetime('now')`);
		const deleted = await delete_prepare.run();
	}
};