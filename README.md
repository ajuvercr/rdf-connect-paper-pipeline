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

## Ingest data

```bash
curl -X POST -d @data.json localhost:8888
```
