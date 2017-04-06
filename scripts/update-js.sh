set -e

$(pwd)/scripts/dev-container.sh

docker run \
    --rm \
    --name update-js \
    -it \
    -v $(pwd):/app/src \
    stephanos/subvoc \
    /opt/node_modules/npm-check-updates/bin/ncu -a