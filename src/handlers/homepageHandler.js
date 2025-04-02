import frontend from "../htmls/frontend_online.html";

export default function homepageHandler(url) {
    return new Response(frontend, {
        headers: {
            'Content-Type': 'text/html',
        },
    });
}