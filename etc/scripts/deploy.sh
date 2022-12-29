#sh

git pull
docker build -t kishlin/wowguides .
docker rm $(docker stop $(docker ps -a -q --filter ancestor=kishlin/wowguides --format="{{.ID}}"))
docker run -d -p 3030:3000 kishlin/wowguides

