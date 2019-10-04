#!/bin/bash

echo "########################"
echo "  Finalizando Docker    "
echo "  Removendo containers  "
echo "  Reiniciando Docker    "
echo "########################"

echo "* Parando containers *"
docker stop $(docker ps -qa)

cd docker

echo "* Removendo containers *"
docker-compose rm -s -f

echo "* Reiniciando containers *"
docker-compose up --build