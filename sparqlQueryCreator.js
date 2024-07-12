import { SparqlEndpointFetcher } from "fetch-sparql-endpoint";

export function processor(reader, endpoint, graph) {
  console.log("Creating sparql query creator")
  const myFetcher = new SparqlEndpointFetcher();

  reader.data(async (dat) => {
    await myFetcher.fetchUpdate(
      endpoint,
      `
INSERT DATA { 
  GRAPH <${graph}> 
    { ${dat} }
  }`,
    );
  });
}
