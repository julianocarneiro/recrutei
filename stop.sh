#!/bin/bash

echo "#######################################"
echo "  Finalizando Todos Containers Docker  "
echo "#######################################"

# Composer down
 docker stop $(docker ps -qa)