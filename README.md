# Teste Recrutei

## Como baixar a aplicação
```
git clone git@github.com:julianocarneiro/recrutei.git
```

##Com rodar a aplicação
Para rodar a aplicação é necessário ter o docker instalado, entrar na pasta recrutei e executar o arquivo ./start.sh

```
cd recritei
./start.sh
```

Para criar o banco de dados, rode

```
ubersystem@ubersystem-PC:/mnt/projetos/Ubersystem/Estudos/recrutei$ docker ps
CONTAINER ID        IMAGE                    COMMAND                  CREATED             STATUS              PORTS                    NAMES
2cb4a41c445d        docker_node2             "docker-entrypoint.s…"   21 seconds ago      Up 18 seconds       0.0.0.0:8080->8080/tcp   back_server
49d9952b4857        docker_node1             "docker-entrypoint.s…"   23 seconds ago      Up 19 seconds       0.0.0.0:80->8080/tcp     front_server
a7d6b28659b5        docker_postgres_server   "docker-entrypoint.s…"   23 seconds ago      Up 21 seconds       0.0.0.0:5432->5432/tcp   postgres_server

```
```
ubersystem@ubersystem-PC:/mnt/projetos/Ubersystem/Estudos/recrutei$ docker exec -it back_server bash
node@5f487240af58:~/app$ adonis migration:run
migrate: 1503250034279_user.js
migrate: 1503250034280_token.js
Database migrated successfully in 621 ms
node@5f487240af58:~/app$ 

```

Acesso a aplicação frontend
```
http://localhost
```

Acesso a aplicação backend
```
http://localhost:8080
```

Bom trabalho,

Juliano Carneiro