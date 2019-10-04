.#!/bin/bash

echo "########################"
echo "  Finalizando Docker    "
echo "  Removendo containers  "
echo "########################"

# Composer down
 docker stop $(docker ps -qa)

cd docker
docker-compose rm