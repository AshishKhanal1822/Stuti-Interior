import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'k48kdllj',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
});

async function checkData() {
    const about = await client.fetch(`*[_type == "about"]`);
    console.log("About pages found:", about.length);
    if (about.length > 0) {
        console.log("First about doc:", JSON.stringify(about[0], null, 2));
    }
}
checkData();
