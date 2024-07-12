# RDF Connect Example Muli-Lingual Pipeline 

## Usage

Install everything:
```bash
# JS dependencies
npm install

# build JVM Runner
cd node_modules/@rdfc/orchestrator
gradle clean build
```

## Start JVM runner
```bash

cd node_modules/@rdfc/orchestrator
gradle run --args "../../../jvm_pipeline.ttl"
```

## Start JS runner

```bash
bunx --bun js-runner ./jvm_pipeline.ttl
```

## Start Virtuoso
```bash
docker run \
  --name my-virtuoso \
  -p 8890:8890 -p 1111:1111 \
  -e DBA_PASSWORD=myDbaPassword \
  -e SPARQL_UPDATE=true \
  -e DEFAULT_GRAPH=http://www.example.com/my-graph \
  -v /my/path/to/the/virtuoso/db:/data \
  --rm
```
  
## Ingest data

```bash
curl -X POST -d @data.json localhost:8888
```
