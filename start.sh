#!/bin/bash

echo "########################"
echo "   Iniciando docker     "
echo "     PHP   7.2         "
echo "########################"

# Composer up
cd docker

#docker-compose rm
docker-compose -f docker-compose.yml up --build

# -d pra ficar em segundo plano
