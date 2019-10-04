#!/bin/bash

echo "########################"
echo "  Iniciando Portainer   "
echo "      Porta 9001        "
echo "########################"

# Composer up
docker run -d -p 9001:9000 -h portainer -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer


