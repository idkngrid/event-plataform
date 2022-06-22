import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4oituw909p201xk7j80hton/master",
    cache: new InMemoryCache()
})