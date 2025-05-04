import { getBrainDb } from "@braindb/astro";

let unresolvedLinksCount = 0;
getBrainDb().on("*", (action, opts) => {
    if (opts) {
        opts.document.unresolvedLinks().forEach((link) => {
            unresolvedLinksCount++;
            console.log(
                `Unresolved link: ${link
                    .from()
                    .path()}:${link.line()}:${link.column()}`
            );
        });
    }
    // fail build if there are broken links
    if (
        import.meta.env.PROD &&
        action === "ready" &&
        unresolvedLinksCount > 0
    ) {
        process.exit(1);
    }
});