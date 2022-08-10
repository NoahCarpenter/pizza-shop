import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "gnx3ijeq",
    dataset: "production",
    apiVersion: "2022-07-16",
    useCdn: true,
    token: "skoO2VZTJmNTkzp6yHN1VYnTWoHdG5iEjl59AH19kEGmheS1Fp9vZklumM89rBAt5dJIegbhRDOx7z9w5zBBc5ztQvWoiRVgHQZhQQDwNT0FA2e9LiE1qsE3pwB8MiEFeMCxghGlpEf6gtVmVduJbGUB58c9XdnBSAcERypSDAUqwxuC3q20"
})

const builder = ImageUrlBuilder(client)

export const UrlFor = (source) => builder.image(source)