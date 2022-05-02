import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    projectId:"hdwf8mu1",
    dataset:'production',
    apiVersion:'2022-12-17',
    userCdn:true,
    token:"skJnw0eu3GvqikObBZRU0bGtr9xy7u6RfrrtoD6Qz9x0XUpn8W7pPjsFvRL1V0DtCB7fRM1p9cgGkMCUDmHZJ85MAPEYUEgHcZyWA3WvKIE2vf3OcpOgl2ywtXgEq8MWe69VsHtT8Qk6Z1oqqwquE9t22OOBneIv0PlNfKXQZaV1AN7AZB1s",

})

const builder = imageUrlBuilder(client);

export const urlFor = (source)=> builder.image(source);